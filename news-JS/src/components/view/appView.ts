import { DataType } from '../types/types';
import News from './news/news';
import { showByAlph } from './sources/sources';

export class AppView {
    news: News;
    constructor() {
        this.news = new News();
    }

    drawNews(data: DataType) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DataType): void {
        const values = data?.sources ? data?.sources : [];
        showByAlph(values);
    }
}

export default AppView;
