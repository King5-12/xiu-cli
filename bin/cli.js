#!/usr/bin/env node

const yParser = require('yargs-parser');

const run = require('../lib/run');
const protoRun = require('../lib/proto');

const args = yParser(process.argv.slice(2));

// --v 或者 --version 返回版本
if (args.v || args.version) {
    console.log(require('../package').version);

    process.exit(0);
}

const [arg1] = args._;

console.log('args', args);

const main = async () => {
    switch (arg1) {
        case 'proto':
            await protoRun(args);
            break;
        default:
            await run(args);
    }
    process.exit(0);
};
main();
