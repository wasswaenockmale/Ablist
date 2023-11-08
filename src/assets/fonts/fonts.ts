import { useFonts } from "expo-font";

import {
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from "@expo-google-fonts/comfortaa";
 
import {
  Raleway_100Thin,
  Raleway_200ExtraLight,
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
  Raleway_900Black
} from "@expo-google-fonts/raleway";
 

const fontNames = {
  ComfortaaLight: Comfortaa_300Light,
  Comfortaa_Regular: Comfortaa_400Regular,
  ComfortaaMedium: Comfortaa_500Medium,
  ComfortaaSemiBold: Comfortaa_600SemiBold,
  ComfortaaBold: Comfortaa_700Bold,
  RalewayThin: Raleway_100Thin,
  RalewayExtraLight: Raleway_200ExtraLight,
  RalewayLight: Raleway_300Light,
  RalewayRegular: Raleway_400Regular,
  RalewayMedium: Raleway_500Medium,
  RalewaySemiBold: Raleway_600SemiBold,
  RalewayBold: Raleway_700Bold,
  RalewayExtraBold: Raleway_800ExtraBold,
  RalewayBlack: Raleway_900Black
};

async function* promiseGenerator<T>(promise: Promise<T>): AsyncGenerator<T>{
  yield await promise;
}

export async function loadFonts() {
  // const [fontsLoaded] =
    return useFonts(fontNames);
  // console.log(fontsLoaded)
  // return promiseGenerator(Promise.resolve([fontsLoaded, null]))
}