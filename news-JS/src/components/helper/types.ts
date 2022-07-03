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
export type noNull = NonNullable<HTMLElement>;
