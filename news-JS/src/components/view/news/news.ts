/* eslint-disable @typescript-eslint/ban-types */
import { articleType, noNull } from '../../types/types';
import './news.css';

class News {
    draw(data: articleType[]) {
        const news = data.length >= 10 ? data.filter((_item: Object, idx: number) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: articleType, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;
            const newsItem = newsClone.querySelector('.news__item') as noNull;
            const newsMetsPhoto = newsClone.querySelector('.news__meta-photo') as noNull;
            const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as noNull;
            const newsMetaDate = newsClone.querySelector('.news__meta-date') as noNull;
            const newsDescTitle = newsClone.querySelector('.news__description-title') as noNull;
            const newsDescSrc = newsClone.querySelector('.news__description-source') as noNull;
            const newsDescContent = newsClone.querySelector('.news__description-content') as noNull;
            const newsRM = newsClone.querySelector('.news__read-more a') as noNull;
            if (idx % 2) newsItem.classList.add('alt');
            newsMetsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            newsMetaAuthor.textContent = item.author || item.source.name;
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            newsDescTitle.textContent = item.title;
            newsDescSrc.textContent = item.source.name;
            newsDescContent.textContent = item.description;
            newsRM.setAttribute('href', item.url);

            fragment.append(newsClone);
        });
        const newsDiv = document.querySelector('.news') as HTMLDivElement;
        newsDiv.innerHTML = '';
        newsDiv.appendChild(fragment);
    }
}

export default News;
