import { tipoFonte } from './../model/noticia';
import axios from 'axios';
import { rss } from '../model/rss';
import { config } from 'dotenv';
config();

const URL_RSS = process.env.URL + 'rss/';

export async function requestNews(): Promise<rss[]> {
  try {
    let response: rss[] = await (await axios.get(URL_RSS)).data.data;

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Error requestNews(): ' + error);
  }
}
