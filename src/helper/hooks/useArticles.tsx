import { useEffect, useState } from 'react';
import axios from 'axios';
import { environments } from '../../constants/environments';
import AppwriteService from '../../appwrite/appwrite';
import DatabaseService from '../../appwrite/appwrite';

const useArticles = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [topStories, setTopStories] = useState<any[]>([]);

  const {
    APPWRITE_DATABASE_ID,
    APPWRITE_ARTICLES_COLLECTION_ID
  } = environments;

  useEffect(() => {

    const fetchData = async () => {
      try {
        const techInAfricaResponse =
          await DatabaseService.getArticles(
            APPWRITE_DATABASE_ID,
            APPWRITE_ARTICLES_COLLECTION_ID
          );
        // console.log("Reponse",techJajaResponse.data);
        if (techInAfricaResponse) {
          setArticles(techInAfricaResponse)
          // Sort articles by publication date
          const sortedArticles = techInAfricaResponse?.sort((a: any, b: any) => {
            const dateA = new Date(b.publishedAt);
            const dateB = new Date(a.publishedAt);
  
            // console.log(dateA)
            return (dateA as any) - (dateB as any);
          });
  
          setArticles(sortedArticles.slice(3));
  
          // Set the topStories with the top 3 articles
          const topStories_ = sortedArticles.slice(0, 3);
          setTopStories(topStories_);
        }
      } catch (error) {
        
      } finally {
      }
    }

    fetchData()
  }, []);

  return {
    articles,
    topStories
  };
}

export default useArticles;
