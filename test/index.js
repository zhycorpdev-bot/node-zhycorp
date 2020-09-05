const { ZhycorpWrapper } = require("../dist/Zhycorp");
(async function() {
    console.log(await new ZhycorpWrapper().getBot("364242246314360843"))
})();