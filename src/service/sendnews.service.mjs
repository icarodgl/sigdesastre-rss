import axios from "axios";

const URL = "";

export function sendNews(news) {
  if (typeof news === "string") {
    send(news);
  } else {
    news.map((n) => sendNew(n));
  }
}

function send(news) {
  try {
    const response = await axios.post(URL,news);
    return response
  } catch (error) {
    console.error(error);
  }
}
