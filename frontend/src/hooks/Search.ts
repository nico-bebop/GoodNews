import { useState } from "react";
import { IArticle } from "../models";

const useNews = () => {
  const [news, setNews] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchNews(keywords: string) {
    try {
      setError("");
      setLoading(true);

      const url = ('api/news/search?' + new URLSearchParams({
        language: 'es',
        keywords: keywords,
        dateFrom: '2023-09-13',
        dateTo: '2023-09-13',
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
