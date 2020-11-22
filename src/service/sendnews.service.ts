import axios from 'axios';
import { Noticia } from 'model/noticia';

const URL = process.env.URL + 'noticias/';

export function sendNews(news: Noticia[]) {
  news.map(async (n) => await send(n));
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
    return response;
  } catch (error) {
    if (error.response) {
      console.log('Status: ', error.response.status);
      //console.log(error.response.data);
      //console.log(error.response.headers);
    } else {
      console.log(error);
    }
  }
}
