import { get } from "superagent";
import { load } from "cheerio";

const botURL = "https://zhycorp.xyz/bot/";

export async function getOwner(id: string): Promise<string> {
    const data = await get(botURL + id);
    const $ = load(data.body);

    const result = $("p").map((i, el) => $(el).text().trim()).get();
    return result.filter(item => item.includes("#"))[0];
}