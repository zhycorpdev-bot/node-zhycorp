const { ZhycorpWrapper } = require("../dist/");
(async function() {
    console.log(await new ZhycorpWrapper().getBot("364242246314360843"))
})();