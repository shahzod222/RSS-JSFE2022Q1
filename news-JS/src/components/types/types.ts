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
export enum URLs {
    apiKey = 'a628c8597cf54cf0bfd3b0c8666e1c59',
    apiUrl = 'https://nodenews.herokuapp.com/',
    urlToAltImg = 'https://media.istockphoto.com/vectors/abstract-globe-background-vector-id1311148884?k=20&m=1311148884&s=612x612&w=0&h=2zFGLiw0VmQbh_CFQgbTzaaamRygqILdq1T8QuglBSQ=',
}
