import React, { Fragment } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native'
import useArticles from '../../../helper/hooks/useArticles';
import TrendingNewsItem from '../TrendingNewsItem/TrendingNewsItem';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const NewsListContainer = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { articles } = useArticles();

  return (
    <View>
      {
        articles.map((item: any, index: number) => (
          <Fragment key={index}>
            <TrendingNewsItem
              title={item.title}
              reporter={`Sylvia Duruson`}
              datePublished={item.publishedAt}
              featuredImage={{ uri: item.featured_image }}
              handleTendingArticleClick={() => {
                navigation.navigate('Details', item);
              }}
            />
          </Fragment>
        ))
      }
    </View >
  );
}

export default NewsListContainer

const styles = StyleSheet.create({})