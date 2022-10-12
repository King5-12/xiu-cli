const protobufjs = require('protobufjs');
const { CWD } = require('../constant');
const path = require('path');
const run = async () => {
    await new Promise((res) => {
        console.log(path.join(CWD, 'demo.proto'));
        protobufjs.load(path.join(CWD, 'demo.proto'), function (err, root) {
            console.log(err);
            if (err) throw err;

            // example code
            const demo = root.lookupType('demo.SelectCompetitionListReq');

            let message = demo.create({ name: 'hello' });
            console.log(`message = ${JSON.stringify(message)}`);

            let buffer = demo.encode(message).finish();
            console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);

            let decoded = demo.decode(buffer);
            console.log(`decoded = ${JSON.stringify(decoded)}`);
            res();
        });
    });
};
module.exports = run;
