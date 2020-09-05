import { get } from "superagent";
import { load } from "cheerio";

const botURL: string = "https://zhycorp.xyz/bot/";
let result: string[] = [];

async function getOwner(id: string) {
    const data = await get(botURL + id);
    const $ = load(data.body);

    $("p").each((i, el) => {
        result[i] = $(el).text().trim();
    });
    return result.filter(item => item.includes("#"))[0];
}

export { getOwner };
