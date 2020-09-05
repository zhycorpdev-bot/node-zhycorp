import { get } from "superagent";
import { getOwner } from "./Bot";
import type { Bot } from "./Types";

export class ZhycorpWrapper {
    readonly baseURL = "https://bot.zhycorp.xyz";
    public async getBot(id: string): Promise<Bot> {
        const USER_PATTERN = /\d{17,19}/g;
        if (!USER_PATTERN.test(id)) throw Error("Invalid user id!");

        const { body: result } = await get(this.baseURL);

        if (!result[id]) throw Error("Not Found");
        const bot = result[id];
        const user = await getOwner(id);
        return {
            botID: bot.botID,
            owner: {
                userID: bot.ownerID,
                userTag: user
            },
            prefix: bot.prefix,
            approved: bot.approved ? "yes" : "no",
            regis: bot.registered ? "yes" : "no"
        };
    }
}