const descritores = ["mariana", "fundão", "barragem", "samarco"];
/**
 *
 * @param news string
 * @returns Promisse<news>
 */
export async function filterNews(news) {
  let filtereds = await news.filter((n) => inDescritores(n));
  return filtereds;
}

/**
 *
 * @param noticia
 * @returns boolean
 */
function inDescritores(noticia) {
  for (let index = 0; index < descritores.length; index++) {
    let res = noticia.indexOf(descritores[index]);
    if (res != -1) {
      return true;
    }
  }
  return false;
}
