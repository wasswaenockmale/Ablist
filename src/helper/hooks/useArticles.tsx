import { useContext, useEffect, useState } from 'react';
import { environments } from '../../constants/environments';
import DatabaseService, { appwriteClient } from '../../appwrite/appwrite';
import { AppContext } from '../context/AppContext';

const useArticles = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [topStories, setTopStories] = useState<any[]>([]);
  const [codeTips, setCodeTips] = useState<any[]>([]);

  // Access the loading state
  const { setIsLoading } = useContext(AppContext);

  const {
    APPWRITE_PROJECT_ID,
    APPWRITE_DATABASE_ID,
    APPWRITE_PROJECT_ENDPOINT,
    APPWRITE_ARTICLES_COLLECTION_ID,
    APPWRITE_CODETIPS_COLLECTION_ID,
  } = environments;

  useEffect(() => {

    const fetchData = async () => {
      try {
        setIsLoading(true)
        const techInAfricaResponse =
          await DatabaseService.getDBData(
            APPWRITE_DATABASE_ID,
            APPWRITE_ARTICLES_COLLECTION_ID
          );
        
        const developerTips =
          await DatabaseService.getDBData(
            APPWRITE_DATABASE_ID,
            APPWRITE_CODETIPS_COLLECTION_ID
          );
        
        if (techInAfricaResponse) {
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

        // If developer tips are returned from the database. 
        // Store the tips in the codeTips state.
        if (developerTips) {
          setCodeTips(developerTips);
        }
      } catch (error:any) {
        console.log("Failed to load data", error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
    // listen to realtime news updates.
    // appwriteClient
    //   .setEndpoint(APPWRITE_PROJECT_ENDPOINT)
    //   .setProject(APPWRITE_PROJECT_ID)
    //   .subscribe(
    //   `databases.${APPWRITE_DATABASE_ID}.collections.${APPWRITE_ARTICLES_COLLECTION_ID}.documents`,
    //   (response: any) => {
    //     if(response.events.includes(
    //       'databases.*.collections.*.documents.*.create'
    //     )) {
    //       // If there is a newly created document. Update the articles and the top stories.
    //       setArticles((prevArticles: any[]) => {
    //         // first combine all the articles plus the updated articles. 
    //         const updatedArticles = [...prevArticles, ...topStories, ...response.payload];
    //         const sortedArticles = updatedArticles?.sort((a: any, b: any) => {
    //           const dateA = new Date(b.publishedAt);
    //           const dateB = new Date(a.publishedAt);

    //           return (dateA as any) - (dateB as any);
    //         });

    //         // Set the topStories with the top 3 articles
    //         const topStories_ = sortedArticles.slice(0, 3);
    //         setTopStories(topStories_);
    //         return [...sortedArticles.slice(3)];
    //       }
    //       );
    //     } else if (response.events.includes(
    //       'database.*.collections.*.documents.delete'
    //     )) {
    //       setArticles((prevArticles: any[]) => {
    //         return prevArticles.filter((article) => {
    //           return article.$id !== response.payload.$id
    //         })
    //       })
    //     }
    //   });
  }, []);

  return {
    articles,
    topStories,
    codeTips
  };
}

export default useArticles;
