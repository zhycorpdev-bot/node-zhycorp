import { Bot } from "./Types";
declare class ZhycorpWrapper {
    readonly baseURL = "https://bot.zhycorp.xyz";
    constructor();
    getBot(id: string): Promise < Bot > ;
}

export { ZhycorpWrapper };
