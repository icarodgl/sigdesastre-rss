import { Noticia } from './../model/noticia';
import { writeFile } from 'fs';

export function saveNews(Noticias: Noticia[]) {
  writeFile(
    `out${Date.now().toString()}.json`,
    JSON.stringify(Noticias),
    (err) => {
      if (err) console.log(err);
      console.log('Successfully Written to File.');
    },
  );
}
