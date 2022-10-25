const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { copy, remove } = require('fs-extra');

//获取指定路径下的全部文件夹
exports.getDirectory = (contentPath) => {
    return fs
        .readdirSync(contentPath)
        .filter(
            (item) =>
                !item.startsWith('.') &&
                fs.lstatSync(path.join(contentPath, item)).isDirectory(),
        );
};

//获取指定路径下全部的proto文件
exports.getProtoFile = (contentPath) => {
    return fs.readdirSync(contentPath).filter((item) => {
        const textArr = item.split('.');
        return textArr[textArr.length - 1] === 'proto';
    });
};

//获取对应区块的信息
exports.getPkgInfo = ({ contentPath }) => {
    const pkg = JSON.parse(
        fs.readFileSync(`${contentPath}/package.json`, 'utf-8'),
    );
    return {
        dep: pkg.dependencies || {},
        devDep: pkg.devDependencies || {},
        ifeDependencies: pkg.ifeDependencies || [],
        postInstallMessage: pkg.postInstallMessage || '',
    };
};

//仅对常见的～和^进行匹配格式化
exports.formatterVersion = (version) => {
    return version.replace(/(~|\^)/, '');
};
exports.compareVersion = (v1, v2) => {
    const formatV1 = exports.formatterVersion(v1);
    const formatV2 = exports.formatterVersion(v2);

    const arrV1 = formatV1.split('.');
    const arrV2 = formatV2.split('.');
    let maxV = formatV1;
    for (let i = 0; i < arrV1.length; i++) {
        if (Number(arrV1[i]) > Number(arrV2[i])) break;
        if (Number(arrV1[i]) < Number(arrV2[i])) {
            maxV = formatV2;
            break;
        }
    }
    return maxV;
};

exports.mergeDep = (dep1 = {}, dep2 = {}) => {
    const IntersectKeys = Object.keys(dep1).filter((item) => dep2[item]);
    const IntersectDep = IntersectKeys.reduce((pre, cur) => {
        return {
            ...pre,
            [cur]: exports.compareVersion(dep1[cur], dep2[cur]),
        };
    }, {});
    return {
        ...dep1,
        ...dep2,
        ...IntersectDep,
    };
};

//将指定目录下的全部文件移入指定目录
exports.copyContent = async (srcPath, curPath) => {
    if (fs.existsSync(curPath)) {
        const pathList = curPath.split('/');
        const contentFatherName = pathList[pathList.length - 2];
        const contentChildName = pathList[pathList.length - 1];
        const { confirm } = await inquirer.prompt([
            {
                name: 'confirm',
                message: `是否覆盖${contentFatherName}文件夹下的${contentChildName}目录`,
                type: 'confirm',
            },
        ]);
        if (!confirm) return;
        await remove(curPath);
    }
    await copy(srcPath, curPath);
};

//将指定文件拷贝到指定目录
exports.copyFiletoContent = async (srcPath, curPath, fileName = 'index.ts') => {
    if (fs.existsSync(curPath)) {
        if (fs.readdirSync(curPath).includes(fileName)) {
            const pathList = curPath.split('/');
            const contentName = pathList[pathList.length - 1];
            const { confirm } = await inquirer.prompt([
                {
                    name: 'confirm',
                    message: `是否覆盖${contentName}文件夹下的${fileName}文件`,
                    type: 'confirm',
                },
            ]);
            if (!confirm) return;
        }
    } else {
        fs.mkdirSync(curPath);
    }
    fs.writeFileSync(path.join(curPath, fileName), fs.readFileSync(srcPath));
};

//比较依赖取差
exports.getNeedInstallDep = (extraDep, proDep) => {
    const _proDep = new Set(proDep);
    const needInstallDep = extraDep.filter((item) => !_proDep.has(item));
    return needInstallDep;
};

//首字母大写
exports.titleCase = (str) => {
    const newStr = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
    return newStr;
};
