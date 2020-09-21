"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOwner = void 0;
const superagent_1 = require("superagent");
const cheerio_1 = require("cheerio");
const botURL = "https://zhycorp.xyz/bot";
async function getOwner(id) {
    const { text } = await superagent_1.get(`${botURL}/${id}`);
    const $ = cheerio_1.load(text);
    const result = $("p").map((i, el) => $(el).text().trim()).get();
    return result[0].split("\n").find((res) => /(.*)#\d{4}/g.exec(res));
}
exports.getOwner = getOwner;
