import { filterNews } from "../src/service/index.js";
import jest from "jest";

let news = ["Sou uma string que contem fundão e mariana"];

jest.it(
  "filtra string com os descritores",
  () => {
    let filtro = filterNews(news);

    expect(filtro).toBe(true);
  },
  timeout
);
