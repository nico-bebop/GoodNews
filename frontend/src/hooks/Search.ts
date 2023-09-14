import { useState } from "react";
import { IArticle } from "../models";

const useNews = () => {
  const [news, setNews] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchNews(keywords: string, from: Date, to: Date) {
    try {
      setError("");
      setLoading(true);

      const url = ('api/news/search?' + new URLSearchParams({
        language: 'es',
        keywords: keywords,
        dateFrom: new Date(from).toLocaleDateString('en-US').replace(/\//g, '-'),
        dateTo: new Date(to).toLocaleDateString('en-US').replace(/\//g, '-'),
        page: '1',
        pageSize: '10'
      }).toString());

      const response = await fetch(url);
      const data = await response.json();

      setNews(data.articles);
      setLoading(false);

    } catch (e: unknown) {
      setLoading(false);
      setError(new Error(String(e)).message);
    }
  }

  return { fetchNews, news, loading, error };
};

export default useNews;
