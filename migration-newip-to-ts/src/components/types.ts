export type DataType = {
  sources: SourceType[];
  articles: ArticleType[];
};
export type SourceType = {
  id: string;
  name: string;
};
export type ArticleType = {
  urlToImage: string;
  url: string;
  title: string;
  description: string;
  source: SourceType;
};
