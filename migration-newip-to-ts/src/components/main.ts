import { ShowInHtml } from "./mainClass";
import { DataType } from "./types";
let startUrl: string =
  "https://newsapi.org/v2/top-headlines/sources?apiKey=3000231c228d4d13b42806036c3a767f";
export let buttonsBlock: HTMLElement = document.querySelector(
  ".buttons"
) as HTMLElement;
export let newsBlock: HTMLElement = document.querySelector(
  ".news-block"
) as HTMLElement;
let showHtml = new ShowInHtml();

export async function getData(url: string, type: string): Promise<void> {
  const res: Response = await fetch(url);
  const data: DataType = await res.json();
  console.log(data);
  if (type == "btn") {
    showHtml.showData(data.sources);
  } else if (type == "news") {
    showHtml.showNews(data.articles);
  }
}
getData(startUrl, "btn");
