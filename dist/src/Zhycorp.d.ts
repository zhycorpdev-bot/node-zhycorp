<<<<<<< HEAD
import type { Bot } from "./Types";
export declare class ZhycorpWrapper {
    readonly baseURL = "https://bot.zhycorp.xyz";
=======
import type { Bot } from "./interfaces";
export declare class ZhycorpWrapper {
    private readonly baseURL;
>>>>>>> 4e25000f8c49191cd7e07abc24abd015d70da1e4
    getBot(id: string): Promise<Bot>;
}
