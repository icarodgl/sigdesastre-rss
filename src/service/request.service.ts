import axios from 'axios';
import { rss } from '../model/rss';

const URL = 'https://sigdesastre.herokuapp.com/rss';

export async function requestNews(): Promise<rss[]> {
  try {
    let response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error requestNews(): ' + error);
  }
}
