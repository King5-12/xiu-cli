const protobufjs = require('protobufjs');
const path = require('path');
const chalk = require('chalk');

const { CWD } = require('../constant');
var Type = protobufjs.Type,
    Service = protobufjs.Service,
    Enum = protobufjs.Enum,
    Namespace = protobufjs.Namespace,
    util = protobufjs.util;

//获取protobufjs的root
const loadProto = (path) => {
    return new Promise((res) =>
        protobufjs.load(path, (err, root) => {
            res({ err, root });
        }),
    );
};

// 遍历出全部的 message 和 services ，根据services获取到自己需要的message, 会去修改baseData
const formatAndFilterData = (root, baseData = {}) => {
    if (!root) {
        console.error(chalk.red('proto文件为空'));
        process.exit(1);
    }
    if (root instanceof Namespace) {
        if (root.nested) {
            root.nested.forEach((item) => {
                formatAndFilterData(item, baseData);
            });
        }
    }

    if (root instanceof Service) {
        if (!baseData.services) baseData.services = [];
        baseData.services.concat(Object.values(root.methods));
    }

    if (root instanceof Type) {
        if (!baseData.types) baseData.types = [];
        
    }
};

const run = async (name, type, args) => {
    // const { err, root } = await loadProto(path.join(CWD, 'game_service.proto'));

    // if (err) {
    //     console.error(chalk.red('读取文件失败'), err);
    //     process.exit(1);
    // }

    await new Promise((res) => {
        console.log(path.join(CWD, 'game_service.proto'));
        protobufjs.load(
            path.join(CWD, 'game_service.proto'),
            function (err, root) {
                console.log(root?.nested);
                if (err) throw err;

                console.log(Type, Service, Enum, Namespace, util);
                // example code
                const demo = root.lookupType('demo.SelectCompetitionListReq');

                let message = demo.create({ name: 'hello' });
                console.log(`message = ${JSON.stringify(message)}`);

                let buffer = demo.encode(message).finish();
                console.log(
                    `buffer = ${Array.prototype.toString.call(buffer)}`,
                );

                let decoded = demo.decode(buffer);
                console.log(`decoded = ${JSON.stringify(decoded)}`);
                res();
            },
        );
    });
};
module.exports = run;
