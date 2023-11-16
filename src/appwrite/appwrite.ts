import { Client, Databases } from "appwrite";
import { environments } from "../constants/environments";

const appwriteClient = new Client();

const { 
  APPWRITE_API_KEY,
  APPWRITE_PROJECT_ID,
  APPWRITE_PROJECT_ENDPOINT,
} = environments;
 
 class AppwriteService {
  databases: Databases;

  constructor(){
    appwriteClient
      .setEndpoint(environments.APPWRITE_PROJECT_ENDPOINT)
      .setProject(environments.APPWRITE_PROJECT_ID)
      
    this.databases = new Databases(appwriteClient);
  }

  async getArticles(databaseID:string, collectionID:string) {
    try {
      return (await this.databases.listDocuments(databaseID, collectionID)).documents
    } catch (error) {
      console.log('getArticles -- ', error);
    }
  }
}

const DatabaseService = new AppwriteService();
export default DatabaseService;