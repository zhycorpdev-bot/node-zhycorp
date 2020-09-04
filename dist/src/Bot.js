"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new(P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOwner = void 0;
const superagent_1 = require("superagent");
const cheerio_1 = require("cheerio");
const botURL = "https://bot.zhycorp.xyz/";
let result = [];

function getOwner(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield superagent_1.get(botURL + id);
        const $ = cheerio_1.load(data.body);
        $("p").each((i, el) => {
            result[i] = $(el).text().trim();
        });
        return result.filter(item => item.includes("#"))[0];
    });
}

exports.getOwner = getOwner;