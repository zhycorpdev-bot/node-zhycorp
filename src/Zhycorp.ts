import superagent from "superagent";
import { Bot } from "./Types";
import { getOwner } from "./Bot";

class ZhycorpWrapper {
    readonly baseURL = "https://bot.zhycorp.xyz";
    constructor() {}

    async getBot(id: string): Promise < Bot > {

        if (isNaN(id)) throw Error("ID must be number");
        if (id.length != 18) throw Error("Invalid ID");

        const { body: result } = await superagent.get(this.baseURL);

        if (!result[id]) throw Error("Not Found");
        const bot = result[id];
        const user = await getOwner(id);
        const structures = {
            botID: bot.botID,
            owner: {
                userID: bot.ownerID,
                userTag: user
            },
            prefix: bot.prefix,
            approved: bot.approved ? "yes" : "no",
            regis: bot.registered ? "yes" : "no"
        };

        return structures;
    }
}

export { ZhycorpWrapper };
