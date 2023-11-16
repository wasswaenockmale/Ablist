import React from 'react'
import {
  StyleSheet, Text,
  View, Image, TouchableOpacity
} from 'react-native';

import { ArticleLifeSpan } from '../../../helper/functions/functions'
import { FONTSIZE, COLOR } from '../../../constants/contants'

interface TrendingNewsItem {
  title: string,
  reporter: string,
  datePublished: string,
  featuredImage: any,
  handleTendingArticleClick: () => void
}

const TrendingNewsItem = (
  {
    title,
    reporter,
    datePublished,
    featuredImage,
    handleTendingArticleClick
  }
    : TrendingNewsItem) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleTendingArticleClick}
    >
      <Image
        source={featuredImage}
        resizeMethod='auto'
        resizeMode='cover'
        style={styles.image}
      />
      <View
        style={styles.newsHeadingContainer}
      >
        <Text
          numberOfLines={2}
        >
          {title}
        </Text>
        <View
          style={styles.newHeadingContainerFooter}
        >
          {/* News footer section  */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            {/* News reporter  */}
            <Text
            >
              {reporter}
            </Text>
            {/* separator  */}
            <Text
              style={styles.textFooter}
            > | </Text>
            {/* Date the news was published */}
          </View>
          <Text
          >{new Date(datePublished).toDateString().split(" ").slice(1).join(" ")}</Text>
          {/* time from publish date  */}
          <Text
            style={styles.textFooter}
          >{ArticleLifeSpan(datePublished)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default TrendingNewsItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    padding: 5,
    position: 'relative',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 5,
  },
  newsHeadingContainer: {
    flex: 1,
    padding: 5
  },
  newHeadingContainerFooter: {
    width: "100%",
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 5,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textFooter: {
    fontSize: FONTSIZE.SMALL,
    color: COLOR.GREY_100
  }
})