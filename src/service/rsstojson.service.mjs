import Parser from "rss-parser";
let parser = new Parser();
export async function rssToJson() {
  let link =
    "https://feeds.elpais.com/mrss-s/pages/ep/site/brasil.elpais.com/portada";
  let feed;
  try {
    feed = await parser.parseURL(link);
  } catch (error) {
    console.log("erro ao pegar RSS", error);
  }
  console.log("Parse RSS to JSON sucesso!");
  return JSON.stringify(feed);
}
