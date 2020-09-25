"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZhycorpWrapper = void 0;
/* eslint-disable @typescript-eslint/naming-convention */
const superagent_1 = require("superagent");
const Bot_1 = require("./api/Bot");
const ZhycorpError_1 = __importDefault(require("./util/ZhycorpError"));
class ZhycorpWrapper {
    constructor() {
        this.baseURL = "https://bot.zhycorp.xyz";
    }
    async getBot(id) {
        const USER_PATTERN = /\d{17,19}/g;
        if (!USER_PATTERN.test(id))
            throw Error("Invalid user id");
        const { body: result } = await superagent_1.get(this.baseURL);
        if (!result[id])
            throw new ZhycorpError_1.default("Not Found");
        const bot = result[id];
        const user = await Bot_1.getOwner(id);
        return {
            approved: bot.approved,
            botID: bot.botID,
            owner: {
                userID: bot.ownerID,
                userTag: user
            },
            prefix: bot.prefix,
            registered: bot.registered
        };
    }
}
exports.ZhycorpWrapper = ZhycorpWrapper;
