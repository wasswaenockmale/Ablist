import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { environments } from '../../constants/environments';

const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [topStories, setTopStories] = useState([]);

  const { NEWS_API_KEY, NEWS_API_ENDPOINT_TOP_HEADLINES } = environments;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(NEWS_API_ENDPOINT_TOP_HEADLINES, {
          headers: {
            'Authorization': `Bearer ${NEWS_API_KEY}`,
          },
          params: {
            country: 'za',
            category: 'technology',
          }
        });

        // Sort articles by publication date
        const sortedArticles = response.data.articles.sort((a: any, b: any) => {
          const dateA = new Date(b.publishedAt);
          const dateB = new Date(a.publishedAt);
          //return latest date first
          return  (dateA as any)- (dateB as any);
        });

        setArticles(sortedArticles);

        // Set the topStories with the top 3 articles
        const topStories_ = sortedArticles.slice(0, 3);
        setTopStories(topStories_);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchData();
  }, []);

  return {
    articles,
    topStories
  };
}

export default useArticles;
