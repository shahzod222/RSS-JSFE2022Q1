import News from './news/news';
import Sources from './sources/sources';
export type DataType = {
    articles: articleType[];
    sources: sourceType[];
};
export type articleType = {
    author: string;
    publishedAt: string;
    source: sourceType;
    title: string;
    url: string;
    description: string;
    urlToImage: string;
};
export type sourceType = {
    id: string;
    name: string;
};
export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DataType) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DataType): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
