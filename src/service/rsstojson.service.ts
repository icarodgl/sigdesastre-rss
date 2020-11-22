import Parser, { Output } from 'rss-parser';
import { rss } from 'model/rss';
import { Noticia, Fonte, grupoAcesso } from '../model/noticia';

let parser = new Parser();

export async function rssToJson(sites: rss[]) {
  let listaNoticias: any[] = [];
  let rssjson: Output | null = null;
  let sucessos = 0;

  for (const site of sites) {
    try {
      rssjson = await await parser.parseURL(site.url);

      if (rssjson.items !== undefined) {
        rssjson.items.forEach((item) => {
          let fonte: Fonte = {
            nome: site.nome,
            link: `${rssjson?.link}`,
            tipoFonte: { id: site.tipoFonte.id, nome: site.tipoFonte.nome },
          };
          let grupoAcesso: grupoAcesso = { nome: 'todos' };
          let noticia: Noticia = {
            link: `${item.link}`,
            titulo: item.title,
            fonte: fonte,
            conteudo: (item.content ?? item.contentSnippet ?? '').replace(
              /(<([^>]+)>)/gi,
              '',
            ),
            dataAtualizacao:
              item.isoDate ??
              item.pubDate ??
              Date.now().toLocaleString('pt-br'),
            dataCriacao:
              item.isoDate ??
              item.pubDate ??
              Date.now().toLocaleString('pt-br'),
            dataPublicacao:
              item.isoDate ??
              item.pubDate ??
              Date.now().toLocaleString('pt-br'),
            descricao: '',
            descritores: [],
            grupoAcesso: grupoAcesso,
            midias: [],
          };

          listaNoticias.push(noticia);
        });
      }
      sucessos++;
    } catch (error) {
      console.log('ERRO ENCONTRADO NO SITE:', site.url);
      //console.log('Erro:', error);
      //console.error(error);
    }
    console.log(
      `Em andamento: ${Math.round((sucessos / sites.length) * 100)}%`,
    );
  }
  console.log(
    `${sites.length} Foram cadastrados, ${sucessos} foram capturados com exito `,
  );

  // console.log(listaNoticias);
  return listaNoticias;
}
