const inquirer = require('inquirer');
const ora = require('ora');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const runProto = require('./proto');
const { CWD } = require('../constant');
const { getProtoFile } = require('../utils/tool');

const run = async ({ path: filePath = '' }) => {
    const fileList = getProtoFile(path.join(CWD, filePath)).map((item) =>
        path.join(CWD, filePath, item),
    );

    if (!fileList.length) {
        console.error(chalk.red('当前路径没有proto文件'));
        process.exit(1);
    }

    const { type: typeSelect } = await inquirer.prompt([
        {
            name: 'type',
            message: `选择编译出的文件类型：`,
            type: 'list',
            choices: [{ name: 'js' }, { name: 'ts' }],
        },
    ]);

    // const selectData = await inquirer.prompt([
    //     {
    //         name: 'type',
    //         message: `选择需要编译的proto：`,
    //         type: 'list',
    //         choices: selectOptions,
    //     },
    // ]);
    const spinner = ora();

    spinner.start(`😁 正在编译proto文件`);

    const { title, content } = await runProto(fileList, typeSelect);

    const prettier = require('prettier');

    const data = prettier.format(content, {
        useTabs: false,
        printWidth: 120,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        parser: 'typescript',
        semi: true,
    });
    fs.writeFileSync(title + '.' + typeSelect, data, { encoding: 'utf8' });

    spinner.succeed();
};

module.exports = run;
