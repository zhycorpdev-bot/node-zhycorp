import { Bot } from "./interfaces";
export declare class ZhycorpWrapper {
    private readonly baseURL;
    getBot(id: string): Promise<Bot>;
}
