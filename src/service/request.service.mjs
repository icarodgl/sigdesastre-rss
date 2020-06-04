import axios from "axios";

const URL = "https://sigdesastre.herokuapp.com/rss";

export function requestNews() {
  try {
    const response = await axios.get(URL);
    return response
  } catch (error) {
    console.error(error);
  }
}
