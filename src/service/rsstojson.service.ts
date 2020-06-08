import Parser, { Output } from 'rss-parser';
import { rss } from 'model/rss';
import { Noticia, Fonte, grupoAcesso } from '../model/noticia';
let parser = new Parser();

export async function rssToJson(sites: rss[]) {
  let listaNoticias: any[] = [];
  let rssjson: Output | null = null;

  for (const site of sites) {
    try {
      rssjson = await await parser.parseURL(site.url);

      if (rssjson.items !== undefined) {
        rssjson.items.forEach((item) => {
          let fonte: Fonte = {
            nome: site.nome,
            link: `${rssjson?.link}`,
          };
          let grupoAcesso: grupoAcesso = { nome: 'todos' };
          let noticia: Noticia = {
            link: `${item.link}`,
            titulo: item.title,
            fonte: fonte,
            conteudo: item.content,
            dataAtualizacao: item.isoDate,
            dataCriacao: item.isoDate,
            dataPublicacao: item.isoDate,
            descricao: '',
            descritores: [],
            grupoAcesso: grupoAcesso,
            midias: [],
          };

          listaNoticias.push(noticia);
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
  // console.log(listaNoticias);
  return listaNoticias;
}
