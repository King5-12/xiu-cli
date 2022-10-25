const inquirer = require('inquirer');
const ora = require('ora');
const chalk = require('chalk');
const fs = require('fs');

const runProto = require('./proto');
const { CWD } = require('../constant');
const { getProtoFile } = require('../utils/tool');

const run = async ({ path: filePath }) => {
    const spinner = ora();

    if (filePath) {
        return;
    }
    const fileList = getProtoFile(CWD);

    if (!fileList.length) {
        console.error(chalk.red('当前路径没有proto文件'));
        process.exit(1);
    }

    const selectOptions = fileList.map((item) => ({
        name: item,
        value: item,
        short: item,
    }));

    const selectData = await inquirer.prompt([
        {
            name: 'type',
            message: `选择需要编译的proto`,
            type: 'list',
            choices: selectOptions,
        },
    ]);

    spinner.start(`😁 正在编译proto文件`);

    const { title, content } = await runProto(selectData.type);

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
    fs.writeFileSync(title + '.ts', data, { encoding: 'utf8' });

    spinner.succeed();
};

module.exports = run;
