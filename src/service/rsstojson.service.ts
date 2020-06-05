import Parser, { Output } from 'rss-parser';
import { rss } from 'model/rss';
import { RssJson } from '../model/rssJson';
import { Noticia } from '../model/noticia';
let parser = new Parser();

export async function rssToJson(sites: rss[]) {
  let listaNoticias: Noticia[] = [];
  let rssjson: Output| null = null;

  for (const site of sites) {
    try {
      rssjson = await parser.parseURL(site.url);
      console.log(rssjson);
    } catch (error) {
      throw new Error('Erro rssToJson: '+ error);
    }
  }
  
  if (rssjson) {
    rssjson.feed.items.forEach((item: Noticia) => {
      listaNoticias.push(item)
    });
  }


  return listaNoticias;
}
