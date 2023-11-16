import { useContext, useEffect, useState } from 'react';
import { environments } from '../../constants/environments';
import DatabaseService from '../../appwrite/appwrite';
import { AppContext } from '../context/AppContext';

const useArticles = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [topStories, setTopStories] = useState<any[]>([]);

  // Access the loading state
  const { setIsLoading } = useContext(AppContext);

  const {
    APPWRITE_DATABASE_ID,
    APPWRITE_ARTICLES_COLLECTION_ID
  } = environments;

  useEffect(() => {

    const fetchData = async () => {
      try {
        setIsLoading(true)
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
        setIsLoading(false);
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
