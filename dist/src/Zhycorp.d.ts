import type { Bot } from "./Types";
export declare class ZhycorpWrapper {
    readonly baseURL = "https://bot.zhycorp.xyz";
    getBot(id: string): Promise<Bot>;
}
