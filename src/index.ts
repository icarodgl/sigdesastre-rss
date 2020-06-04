import { filterNews, requestNews, rssToJson, sendNews } from './service/index';
const run = async () => {
  console.log('>>>>>>');
  // Pega os links RSS cadastrados
  let sites = await requestNews();
  // entra no RSS e converte o RSS para Objeto JS ou JSON
  let noticias = await rssToJson(sites);
  //Filtra os objetos de acordo com os descritores
  let filtrados = await filterNews(noticias);
  //envia as noticias filtradas para a API
  let resposta = await sendNews(filtrados);
};

run();
