import React from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import { COLOR, DIMEN, FONTSIZE } from '../../../constants/contants'
import { loadFonts } from '../../../assets/fonts/fonts'
import { useNavigation } from '@react-navigation/native'

const CONTAINER_WIDTH = DIMEN.SCREENWIDTH * 0.99
const NewsItemContainer = () => {

  const [fontsLoaded] = loadFonts();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => {
        navigation.navigate('Details');
      }}
    >
      <Image
        source={require("../../../assets/images/news-image.jpg")}
        style={styles.imageStyle}
        width={100}
        resizeMethod='auto'
        resizeMode='contain'
      />
      <View
        style={styles.headingContainer}
      >
        <Text
          style={{ ...styles.headingText, fontFamily: "RalewaySemiBold" }}
        >
          Kenyan Startup Enables WhatsApp Commerce in Africa
        </Text>
        <Text
          style={styles.text}
        >
          By Sylvia Duruson
        </Text>
        <View
          style={styles.footerContainer}
        >
          <Text
            style={styles.text}
          >Oct 30, 2023 </Text>
          <Text
            style={styles.text}
          >5 hours ago </Text>
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
    width:'100%'
  },

  headingText: {
    fontSize: FONTSIZE.HEADING_5,
    color:COLOR.WHITE
  },

  headingContainer: {
    width:'100%',
    position: 'absolute',
    bottom: 0,
    // left:20,
    backgroundColor: COLOR.NEUTRAL_2,
    paddingHorizontal: 10,
    paddingVertical:5
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    gap: 5,
  },

  text: {
    color:COLOR.WHITE
  }
})