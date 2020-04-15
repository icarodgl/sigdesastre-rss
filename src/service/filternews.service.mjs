export async function filterNews(news) {
  let filtereds = await news.filter((n) => inDescritores(n));
  return filtereds;
}

function inDescritores(noticia) {
  let descritores = ["mariana", "fundão", "barragem", "samarco"];
  for (let index = 0; index < descritores.length; index++) {
    let res = noticia.indexOf(descritores[index]);
    if (res != -1) {
      return true;
    }
  }
  return false;
}
