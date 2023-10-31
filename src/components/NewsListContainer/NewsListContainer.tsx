import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import TrendingNewsItem from '../TrendingNewsItem/TrendingNewsItem'

const NewsListContainer = () => {
  return (
    <View>
      {
        Array(6).fill(0).map((item, index) => (
          <Fragment key={index}>
            <TrendingNewsItem
              title='Nigerian Fintech Vella Drops Crypto to Focus on SME Banking'
              reporter='Sylvia Duruson '
              datePublished=' Oct 30, 2023 '
              timePublished=''
              featuredImage={require('../../assets/images/news-image.jpg')}
            />
          </Fragment>
        ))
      }
    </View >
  );
}

export default NewsListContainer

const styles = StyleSheet.create({})