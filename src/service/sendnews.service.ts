import axios from 'axios';
import { Noticia } from 'model/noticia';

const URL = process.env.URL + 'noticias/';

export function sendNews(news: Noticia[]) {
  news.map((n) => send(n));
  console.log(`${news.length} Noticias enviadas`);
}

export async function send(news: Noticia) {
  let heades = { 'content-type': 'application/json' };
  try {
    let response = await axios({
      method: 'POST',
      headers: heades,
      baseURL: URL,
      data: news,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
