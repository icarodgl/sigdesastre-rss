import { Noticia } from './noticia';
import { Output } from 'rss-parser';

export interface RssJson {
  items: Output[];
}
