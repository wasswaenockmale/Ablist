import AsyncStorage from "@react-native-async-storage/async-storage";

async function storeToLocalStorage(key:string, value: any) {
  const jsonArticles = JSON.stringify(value);
  try {
    await AsyncStorage.setItem(`${key}`, jsonArticles, function () {
      
    })
      .then(response => {

      })
      .catch(error => {
      
      });
  } catch (error) {
    
  }
}

async function retrieveLocalData(key:string) {
  try {
    return await AsyncStorage.getItem(`${key}`);
  } catch (error) {
    
  }
}

async function clearLocalData(key:string) {
  try {
    await AsyncStorage.removeItem(`${key}`);
  } catch (error) {
    
  }
}