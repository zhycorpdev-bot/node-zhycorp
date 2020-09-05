"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOwner = void 0;
const superagent_1 = require("superagent");
const cheerio_1 = require("cheerio");
const botURL = "https://zhycorp.xyz/bot/";
async function getOwner(id) {
    const data = await superagent_1.get(botURL + id);
    const $ = cheerio_1.load(data.body);
    const result = $("p").map((i, el) => $(el).text().trim()).get();
    return result.filter(item => item.includes("#"))[0];
}
exports.getOwner = getOwner;
