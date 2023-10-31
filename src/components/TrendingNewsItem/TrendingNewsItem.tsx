import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR, FONTSIZE } from '../../constants/contants'

interface TrendingNewsItem{
  title: string,
  reporter: string,
  datePublished: string,
  timePublished: string,
  featuredImage: any
}

const TrendingNewsItem = (
  {
    title,
    reporter,
    datePublished,
    timePublished,
    featuredImage
  }
    : TrendingNewsItem) => {
  return (
    <TouchableOpacity
      style={styles.container}
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
        <Text>
          {title}
        </Text>
        <View
          style={styles.newHeadingContainerFooter}
        >
          {/* News footer section  */}
          <View
            style={{
              flexDirection: 'row',
              alignItems:'center'
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
            <Text
            >{ datePublished }</Text>
          </View>
          {/* time from publish date  */}
          <Text
            style={styles.textFooter}
          >5 hours ago</Text>
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
    padding:5
  },
  newHeadingContainerFooter: {
    width:"100%",
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left:5,
    alignItems: 'center', 
    justifyContent:'space-between'
  },
  textFooter: {
    fontSize: FONTSIZE.SMALL,
    color:COLOR.GREY_100
  }
})