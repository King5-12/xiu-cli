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

const name = args._[0] || '';
const { type } = args;

switch (name) {
    case 'proto':
        (async () => {
            await protoRun({
                name,
                type,
                args,
            });
            process.exit(0);
        })();
        break;
    default:
        (async () => {
            await run({
                name,
                type,
                args,
            });
            process.exit(0);
        })();
}
