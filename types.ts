import { RouteProp } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

type NewsRouteParams = {
  title: string
  content: string
  excerpt: string 
  datePublised: string
  featured_image: string
}

type RootStackParamList = {
  Home: undefined;
  Details: { title: string, articleID: number, excerpt: string, featured_image: string, articleContent: string, publishedAt: string };
  CodeTips: undefined;
}

type DetailsScreenProps = RouteProp<RootStackParamList, 'Details'>

export {
  NewsRouteParams,
  RootStackParamList,
  DetailsScreenProps
}
