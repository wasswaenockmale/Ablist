import { StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react'
import { loadFonts } from '../../assets/fonts/fonts';
import { COLOR, FONTSIZE } from '../../constants/contants';

const SplashScreen = () => {
  const [fontsLoaded] = loadFonts();
  const textScale = new Animated.Value(0.1);

  Animated.timing(textScale, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true
  }).start();

  return (
    <View
      style={styles.container}
    >
      <Animated.Text
        style={[styles.text, {
          transform: [{ scale: textScale }],
           :"ComfortaaBold",
        }]}
      >
      Ablist
    </Animated.Text>
    </View >
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.ORANGE_300
  },
  text: {
    fontSize: FONTSIZE.HEADING_1,
    color: COLOR.WHITE
  }
})