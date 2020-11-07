import { get } from "superagent";
import { load } from "cheerio";

const botURL = "https://zhycorp.com/bot";

export async function getOwner(id: string): Promise<string> {
    const { text } = await get(`${botURL}/${id}`);
    const $ = load(text);

    const result = $("p").map((i, el) => $(el).text().trim()).get();
    return result[0].split("\n").find((res: string) => /(.*)#\d{4}/g.exec(res));
}
