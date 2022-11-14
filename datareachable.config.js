const command = process.argv[process.argv.length - 1];

module.exports = {
    output: {
        publicPath: command === "build" ? "./" : undefined,
    },
};