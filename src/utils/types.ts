import { RouteProp } from "@react-navigation/native"

type NewsRouteParams = {
  title: string
  content: string
  excerpt: string 
  datePublised: string
  featured_image: string
}

type RootStackParamList = {
  Home: undefined;
  Details: {
    title: string,
    excerpt: string,
    articleID: number,
    publishedAt: string,
    featured_image: string,
    articleContent: string,
  };
  CodeTips: undefined;
}
type userModal = {
  email: string
  phone: string
  lastName: string
  firstName: string
}
type DetailsScreenProps = RouteProp<RootStackParamList, 'Details'>

// interface for TalentSubmissionForm
type TalentSubmissionForm = {
  name: string
  email: string
  phone: string
  company: string
  lookingFor: string
  message: string
}
export {
  NewsRouteParams,
  RootStackParamList,
  DetailsScreenProps,
  TalentSubmissionForm,
  userModal
}
