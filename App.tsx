import React, { useContext, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppContextProvider, { AppContext } from './src/helper/context/AppContext';
import AppStack from './src/routes/Drawer/AppStack';
import { environments } from './src/constants/environments';
import { useFonts } from 'expo-font';


const {
  APPWRITE_DATABASE_ID,
  APPWRITE_ARTICLES_COLLECTION_ID,
  APPWRITE_CODETIPS_COLLECTION_ID,
} = environments;

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    "ComfortaaLight": require('./src/assets/fonts/Comfortaa/static/Comfortaa-Light.ttf'),
    "Comfortaa_Regular": require('./src/assets/fonts/Comfortaa/static/Comfortaa-Regular.ttf'),
    "ComfortaaMedium": require('./src/assets/fonts/Comfortaa/static/Comfortaa-Medium.ttf'),
    "ComfortaaSemiBold": require('./src/assets/fonts/Comfortaa/static/Comfortaa-SemiBold.ttf'),
    "ComfortaaBold": require('./src/assets/fonts/Comfortaa/static/Comfortaa-Bold.ttf'),
    "RalewayThin": require('./src/assets/fonts/Raleway/static/Raleway-Thin.ttf'),
    "RalewayExtraLight": require('./src/assets/fonts/Raleway/static/Raleway-ExtraLight.ttf'),
    "RalewayLight": require('./src/assets/fonts/Raleway/static/Raleway-Light.ttf'),
    "RalewayRegular": require('./src/assets/fonts/Raleway/static/Raleway-Regular.ttf'),
    "RalewayMedium": require('./src/assets/fonts/Raleway/static/Raleway-Medium.ttf'),
    "RalewaySemiBold": require('./src/assets/fonts/Raleway/static/Raleway-SemiBold.ttf'),
    "RalewayBold": require('./src/assets/fonts/Raleway/static/Raleway-Bold.ttf'),
    "RalewayExtraBold": require('./src/assets/fonts/Raleway/static/Raleway-ExtraBold.ttf'),
    "RalewayBlack": require('./src/assets/fonts/Raleway/static/Raleway-Black.ttf')
  }
  );


  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <NavigationContainer>
      <AppContextProvider>
        <AppStack />
      </AppContextProvider>
    </NavigationContainer>
  );
}
