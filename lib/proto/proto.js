const protobufjs = require('protobufjs');
const path = require('path');
const chalk = require('chalk');
const fs = require('fs');

const { CWD } = require('../constant');
const { titleCase } = require('../utils/tool');

var Service = protobufjs.Service,
    Enum = protobufjs.Enum,
    Namespace = protobufjs.Namespace,
    Root = protobufjs.Root;

const option = {
    alternateCommentMode: true,
};
protobufjs.common('descriptor', {});

//获取protobufjs的root
const loadProto = (pathText) => {
    const root = new protobufjs.Root();
    const paths = [];
    // paths.push(path.relative(process.cwd(), path.join(__dirname, '..')) || '.');
    paths.push(process.cwd());
    root.resolvePath = (origin, target) => {
        const normOrigin = protobufjs.util.path.normalize(origin),
            normTarget = protobufjs.util.path.normalize(target);
        let resolved = protobufjs.util.path.resolve(
            normOrigin,
            normTarget,
            true,
        );
        const idx = resolved.lastIndexOf('google/protobuf/');
        if (idx > -1) {
            var altname = resolved.substring(idx);
            if (altname in protobufjs.common) resolved = altname;
        }

        if (fs.existsSync(resolved)) return resolved;

        for (var i = 0; i < paths.length; ++i) {
            var iresolved = protobufjs.util.path.resolve(
                paths[i] + '/',
                target,
            );
            if (fs.existsSync(iresolved)) return iresolved;
        }
        return resolved;
    };

    return new Promise((res) =>
        root.load(pathText, option, (err, root) => {
            res({ err, root });
        }),
    );
};

let out = { type: [], methods: {} };
let outObj = { type: [], methods: [] };
let indent = 0;
let outText = [`type ServiceData<T> = {code: number; data: T; msg: string;}`];

const getTypeInBaseType = (type) => `ServiceData<${type}>`;

const pushType = (line) => {
    if (line === '') return out.type.push('');
    var ind = '';
    for (var i = 0; i < indent; ++i) ind += '    ';
    return out.type.push(ind + line);
};

const pushMethod = (api, line) => {
    if (!out.methods[api]) out.methods[api] = [];
    if (line === '') return out.methods[api].push('');
    var ind = '';
    for (var i = 0; i < indent; ++i) ind += '    ';
    return out.methods[api].push(ind + line);
};

// 取出全部的 methods 构造出一个baseData
const formatAndFilterData = (root, baseData = {}) => {
    if (!root) {
        console.error(chalk.red('proto文件为空'));
        process.exit(1);
    }
    if (root instanceof Namespace) {
        if (root.nested) {
            Object.values(root.nested).forEach((item) => {
                formatAndFilterData(item, baseData);
            });
        }
    }

    if (root instanceof Service) {
        if (!baseData.methods) baseData.methods = [];
        baseData.methods = baseData.methods.concat(Object.values(root.methods));
    }

    return baseData;
};

//开始从节点的父级寻找
const findTypeInParent = (node, typeName) => {
    if (!node) return undefined;
    if (node.parent.nested?.[typeName]) {
        return node.parent.nested[typeName];
    }
    if (node.parent instanceof Root) return undefined;
    return findTypeInParent(node.parent, typeName);
};

// 遍历父节点获取type对应的节点
const findTypeInNested = (node, typeName) => {
    if (!node) return undefined;
    if (node?.nested) {
        return node.nested[typeName];
    }
    return undefined;
};

const goToNameSpaceNode = (node) => {
    if (node.parent instanceof Namespace && node.parent.nested) {
        return node.parent;
    }
    return goToNameSpaceNode(node.parent);
};

// 获取methods下面的type
const getTypeNodeByMethods = (node, type) => {
    if (!node) return undefined;

    const typeList = type.split('.');
    if (typeList.length > 1) {
        let cur = node;
        for (let i = 0; i < typeList.length; i++) {
            if (i === 0) {
                cur = findTypeInParent(cur, typeList[i]);
            } else {
                cur = findTypeInNested(cur, typeList[i]);
            }
        }
        return { node: cur, typeName: typeList.join('_') };
    }

    const namespaceNode = goToNameSpaceNode(node);
    return { node: namespaceNode.nested[type], typeName: type };
};

const getHttpTypeByOptions = (options) => {
    //约定options的长度为一 按照第一个来配置
    const key = Object.keys(options)[0].toLowerCase();
    if (key.includes('get')) {
        return { type: 'get', api: options[key] };
    } else if (key.includes('post')) {
        return { type: 'post', api: options[key] };
    } else if (key.includes('put')) {
        return { type: 'put', api: options[key] };
    } else if (key.includes('delete')) {
        return { type: 'delete', api: options[key] };
    }
};

const getTypeByfieldType = (node, type, isRepeated, insideData) => {
    let fieldType = isRepeated ? '[]' : '';
    if (
        [
            'double',
            'float',
            'int32',
            'uint32',
            'sint32',
            'fixed32',
            'sfixed32',
            'int64',
            'uint64',
            'sint64',
            'fixed64',
            'sfixed64',
        ].includes(type)
    ) {
        fieldType = 'number' + fieldType;
    } else if (type === 'bool') {
        fieldType = 'boolean' + fieldType;
    } else if (type === 'string') {
        fieldType = 'string' + fieldType;
    } else if ((insideData || {})[type]) {
        if (insideData[type] instanceof Enum) {
            fieldType =
                `(${Object.values(insideData[type].values).join('|')})` +
                fieldType;
        } else {
            throw new Error('异常数据type' + type);
        }
    } else if (!outObj.type.find((item) => item.typeName === type)) {
        const { node: typeNode, typeName } = getTypeNodeByMethods(node, type);
        outObj.type.push({ node: typeNode, typeName });
        fieldType = typeName + fieldType;
    } else {
        fieldType = type + fieldType;
    }
    return fieldType;
};

const buildType = (node, typeName) => {
    const fieldList = Object.values(node.fields);
    if (!fieldList.length) {
        pushType(`type ${typeName} = null`);
        return;
    }
    pushType(`export type ${typeName} = {`);
    ++indent;
    fieldList.forEach((item) => {
        item.comment && pushType('// ' + item.comment);
        pushType(
            `${item.name}:${getTypeByfieldType(
                node,
                item.type,
                item.repeated,
                node.nested,
            )} `,
        );
    });
    --indent;
    pushType('}');
};

const buildMethods = (node) => {
    const { node: requestTypeNode, typeName: requestTypeName } =
        getTypeNodeByMethods(node, node.requestType);
    const { node: responseTypeNode, typeName: responseTypeName } =
        getTypeNodeByMethods(node, node.responseType);

    const apiOption = getHttpTypeByOptions(node.options);

    if (!requestTypeNode || !responseTypeNode) {
        throw new Error(`${node.name} 的 requestType或responseType 获取失败`);
    }
    node.comment && pushMethod(node.name, '// ' + node.comment);
    pushMethod(
        node.name,
        `${
            node.name
        } : async (${requestTypeName}:${requestTypeName}) : Promise<${getTypeInBaseType(
            responseTypeName,
        )}> => {`,
    );
    ++indent;
    pushMethod(
        node.name,
        `return service('${apiOption.type}','${apiOption.api}',${requestTypeName})`,
    );
    --indent;
    pushMethod(node.name, `},`);
    outObj.methods.push({
        node,
        api: apiOption.api,
    });
    if (!outObj.type.find((item) => item.typeName === responseTypeName)) {
        outObj.type.push({
            node: responseTypeNode,
            typeName: responseTypeName,
        });
    }
    if (!outObj.type.find((item) => item.typeName === requestTypeName)) {
        outObj.type.push({ node: requestTypeNode, typeName: requestTypeName });
    }
};

const runProto = async (pathText) => {
    const { err, root } = await loadProto(
        path.isAbsolute(pathText) ? pathText : path.join(CWD, pathText),
    );

    if (err) {
        console.error(chalk.red('读取文件失败'), err);
        process.exit(1);
    }

    const baseData = formatAndFilterData(root);

    for (let i = 0; i < baseData.methods.length; i++) {
        buildMethods(baseData.methods[i]);
    }

    for (let i = 0; i < Object.keys(outObj.type).length; i++) {
        buildType(outObj.type[i].node, outObj.type[i].typeName);
    }

    const nameText = pathText
        .split('.')
        .filter((item) => item !== 'proto')
        .join('_');

    const content = outText
        .concat(out.type)
        .concat([
            `export default function create${titleCase(
                nameText,
            )}Service(service:(type:string,url:string,param:any) => Promise<any>){`,
            `  return {`,
            ...outObj.methods.reduce(
                (pre, cur) => [...pre, ...out.methods[cur.node.name]],
                [],
            ),
            '}',
            '}',
        ])
        .join('\n');

    return { title: nameText, content };
};

module.exports = runProto;
