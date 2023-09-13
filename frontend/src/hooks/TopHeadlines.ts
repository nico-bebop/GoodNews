import { useState, useEffect } from "react";
import { IArticle } from "../models";

const useNews = () => {
  const [news, setNews] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews(/*country : string*/) {
    try {
      setError("");
      setLoading(true);

      const url = ('api/news/top-headlines?' + new URLSearchParams({
        country: 'us'/*country*/,
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

  return { news, loading, error };
};

export default useNews;
