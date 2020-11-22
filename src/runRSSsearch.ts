import {
  filterNews,
  requestNews,
  rssToJson,
  sendNews,
  saveNews,
} from './service/index';
import { config } from 'dotenv';
config();

const run = async () => {
  // Pega os links RSS cadastrados
  console.log('Inicio do processo');
  console.log('Recuperando RSS cadastrados');
  let sites = await requestNews();
  // entra no RSS e converte o RSS para Objeto JS ou JSON
  console.log('gerando Rss e convertendo em noticias');
  let noticias = await rssToJson(sites);
  //Filtra os objetos de acordo com os descritores
  console.log('Filtrando noticias com base nos descritores');
  let filtrados = await filterNews(noticias, []);
  console.log('Enviando noticias');
  //envia as noticias filtradas para a API
  //saveNews(filtrados);
  sendNews(filtrados);
  console.log('Processo finalizado');
};

run();
