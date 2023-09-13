export interface IArticle {
  author: string;
  title: string;
  url: string;
  urlToImage: string;
  content: string;
  description: string;
  publishedAt: string;
  source: [
    {
      id: string;
      name: string;
    }
  ];
}
