import Parser from 'rss-parser';
import { rss } from 'model/rss';
let parser = new Parser();
export async function rssToJson(sites: rss[]) {
  let listaNoticias = [];
  sites.forEach((site) => {
    let feed;
    try {
      feed = parser.parseURL(site.url);
    } catch (error) {
      console.log('erro ao pegar RSS', error);
    }

    console.log(feed);
  });
  console.log('Parse RSS to JSON sucesso!');
  return JSON.stringify(feed);
}
