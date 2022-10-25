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

const [arg1, arg2] = args._;
const { type } = args;

switch (arg1) {
    case 'proto':
        (async () => {
            await protoRun({
                type,
                path: arg2,
            });
            process.exit(0);
        })();
        break;
    default:
        (async () => {
            await run({
                type,
                args,
            });
            process.exit(0);
        })();
}
