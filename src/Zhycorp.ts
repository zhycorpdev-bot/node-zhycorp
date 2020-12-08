/* eslint-disable @typescript-eslint/naming-convention */
import { get } from "superagent";
import { getOwner } from "./api/Bot";
import ZhycorpError from "./util/ZhycorpError";
import { Bot } from "./interfaces";

export class ZhycorpWrapper {
    private readonly baseURL = "https://bot.zhycorp.com";
    public async getBot(id: string): Promise<Bot> {
        const USER_PATTERN = /\d{17,19}/g;
        if (!USER_PATTERN.test(id)) throw Error("Invalid user id");

        const { body: result } = await get(this.baseURL);
        if (!result[id]) throw new ZhycorpError("Not Found");
        const bot = result[id];
        const user = await getOwner(id);
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
