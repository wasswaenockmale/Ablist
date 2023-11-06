import React from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import { COLOR, DIMEN, FONTSIZE } from '../../../../constants/contants';
import { loadFonts } from '../../../../assets/fonts/fonts';
import { ArticleLifeSpan } from '../../../../helper/functions/functions';

const CONTAINER_WIDTH = DIMEN.SCREENWIDTH * 0.99;

interface NewsItemContainerProps {
  image: any,
  title: string,
  author: string,
  publishedAt: string,
  handleNavigation: () => void
}
const NewsItemContainer = (
  {
    image,
    title,
    author,
    publishedAt,
    handleNavigation
  }: NewsItemContainerProps
) => {

  const [fontsLoaded] = loadFonts();

  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={handleNavigation}
    >
      <Image
        source={image}
        style={styles.imageStyle}
        width={100}
        resizeMethod='auto'
        resizeMode='contain'
      />
      <View
        style={styles.headingContainer}
      >
        <Text
          style={{
            ...styles.headingText,
            fontFamily: "RalewaySemiBold"
          }}
          numberOfLines={2}
        >
          {title}
        </Text>
        <Text
          style={styles.text}
        >
          By {author}
        </Text>
        <View
          style={styles.footerContainer}
        >
          <Text
            style={styles.text}
          >
            {new Date(publishedAt).toDateString()}
          </Text>
          <Text
            style={styles.text}
          >{ArticleLifeSpan(publishedAt)} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default NewsItemContainer

const styles = StyleSheet.create({
  container: {
    width: CONTAINER_WIDTH,
  },

  imageView: {
    borderRadius: 10,
    borderColor: COLOR.ORANGE_400,
  },

  imageStyle: {
    height: 250,
    borderRadius: 10,
    width: '100%'
  },

  headingText: {
    fontSize: FONTSIZE.HEADING_5,
    color: COLOR.WHITE
  },

  headingContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    // left:20,
    backgroundColor: COLOR.NEUTRAL_2,
    paddingHorizontal: 10,
    paddingVertical: 5
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    gap: 5,
  },

  text: {
    color: COLOR.WHITE
  }
})