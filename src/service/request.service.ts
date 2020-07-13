import { tipoFonte } from './../model/noticia';
import axios from 'axios';
import { rss } from '../model/rss';
import { config } from 'dotenv';
config();

const URL_RSS = process.env.URL + 'rss/';

const URL_TF = process.env.URL + 'noticias/fontes/';

export async function requestNews(): Promise<rss[]> {
  try {
    let response: rss[] = await (await axios.get(URL_RSS)).data;

    let tipoFonte: tipoFonte[] = await (await axios.get(URL_TF)).data;

    response.map((rss) => {
      let tfName = tipoFonte.findIndex((tf) => tf.id === rss.tipoFonteId);
      rss.tipoFonteName = tipoFonte[tfName].nome;
    });

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Error requestNews(): ' + error);
  }
}
