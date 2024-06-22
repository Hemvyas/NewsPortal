import { useEffect, useState } from "react";
import axios from "axios";

const apiKey = "c0a4611ebaba4aad83bf9c130bb24707";

const useFetchNews = (category, pageSize, page = 1) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              country: "in",
              apiKey: apiKey,
              category: category,
              pageSize: pageSize,
              page: page,
            },
          }
        );

        setTotalResults(response.data.totalResults);

        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, pageSize, page]);

  return { news, loading, error, totalResults };
};

export default useFetchNews;
