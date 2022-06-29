import { buttonsBlock, getData, newsBlock } from "./main";
import { DataType, SourceType, ArticleType } from "./types";
export class ShowInHtml {
  showData(dataSources: SourceType[]): void {
    for (let i: number = 0; i < dataSources.length; i++) {
      let btn: HTMLElement = document.createElement("button");
      let currentSource: SourceType = dataSources[i];
      btn.className = "btn";
      btn.id = currentSource.id;
      btn.innerHTML = currentSource.name;
      buttonsBlock.append(btn);
    }
    let allButtons: NodeListOf<Element> = document.querySelectorAll(".btn");
    allButtons.forEach((el: Element): void => {
      el.addEventListener("click", (): void => {
        let esspecialUrl: string =
          "https://newsapi.org/v2/top-headlines?sources=" +
          el.id +
          "&apiKey=3000231c228d4d13b42806036c3a767f";
        getData(esspecialUrl, "news");
      });
    });
  }
  showNews(dataArticles: ArticleType[]) {
    newsBlock.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      let news: HTMLDivElement = document.createElement("div");
      let newsImg: HTMLImageElement = document.createElement("img");
      let newsContent: HTMLDivElement = document.createElement("div");
      let newsTitle: HTMLHeadingElement = document.createElement("h3");
      let newsName: HTMLParagraphElement = document.createElement("p");
      let line: HTMLHRElement = document.createElement("hr");
      let newsDescrpt: HTMLParagraphElement = document.createElement("p");
      let readMore: HTMLAnchorElement = document.createElement("a");
      news.className = "news";
      newsImg.className = "news-img";
      newsContent.className = "news-content";
      newsTitle.className = "news-title";
      newsName.className = "news-name";
      newsDescrpt.className = "news-descrpt";
      readMore.className = "read-more";
      newsImg.src = dataArticles[i].urlToImage;
      newsTitle.innerHTML = dataArticles[i].title;
      newsName.innerHTML = dataArticles[i].source.name;
      newsDescrpt.innerHTML = dataArticles[i].description;
      readMore.href = dataArticles[i].url;
      readMore.innerHTML = "Read More";
      newsBlock.append(news);
      news.append(newsImg);
      news.append(newsContent);
      newsContent.append(newsTitle);
      newsContent.append(newsName);
      newsContent.append(line);
      newsContent.append(newsDescrpt);
      newsContent.append(readMore);
      if (i % 2 == 1) {
        news.style.flexDirection = "row-reverse";
        newsImg.style.borderRadius = "0 20px 20px 0";
      }
    }
  }
}
