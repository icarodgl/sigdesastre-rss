import { Noticia } from './../model/noticia';

/**
 *
 * @param news string
 * @returns Promisse<news>
 */
export async function filterNews(news: Noticia[], descritores: string[]) {
  let resp = await news.filter((n: Noticia) => inDescritores(n, descritores));

  //console.log(resp);

  return resp;
}

/**
 *
 * @param noticia
 * @returns boolean
 */
function inDescritores(noticia: Noticia, descritores: string[]) {
  let cont = 0;
  descritores =
    descritores.length !== 0
      ? descritores
      : [
          'rompimento',
          'barragem',
          'samarco',
          'rio doce',
          'lama',
          'mariana',
          'fundão',
        ];
  for (let index = 0; index < descritores.length; index++) {
    let res = `${noticia.conteudo} ${noticia.titulo}`
      .toLowerCase()
      .indexOf(descritores[index]);
    if (res != -1) {
      cont++;
    }
  }
  if (cont / descritores.length > 0.2) {
    return true;
  } else {
    return false;
  }
}
