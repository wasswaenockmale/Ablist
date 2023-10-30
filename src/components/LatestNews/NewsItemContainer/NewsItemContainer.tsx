import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { DIMEN, FONTSIZE } from '../../../constants/contants'
import Reporter from '../../Reporter/Reporter'

const NewsItemContainer = () => {
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.imageView}
      >
        <Image
          source={require("../../../assets/images/news-image.jpg")}
          style={styles.imageStyle}
          resizeMethod='auto'
          resizeMode='cover'
        />
      </View>
      <View>
        <Text
          style={{ ...styles.headingText, fontFamily:"RalewaySemiBold"}}
        >
          Kenyan Startup Enables WhatsApp Commerce in Africa
        </Text>
      </View>
      <Reporter />
    </View>
  )
}

export default NewsItemContainer

const styles = StyleSheet.create({
  container: {
    width: DIMEN.SCREENWIDTH,
    padding: 5,
    borderWidth:1
  },
  imageView: {
    borderRadius: 10,
  },
  imageStyle: {
    height: 250,
    borderRadius: 10,
  },
  headingText: {
    fontSize:FONTSIZE.HEADING_5
  }
})