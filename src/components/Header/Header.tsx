import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { COLOR, FONTSIZE } from '../../constants/contants';
import { loadFonts } from '../../assets/fonts/fonts';


const Header = () => {
  const [fontsLoaded] = loadFonts();
  return (
    <View
      style={styles.container}
    >
      <Text
        style={
          [styles.text, { fontFamily: "ComfortaaSemiBold" }]
        }
      >
        Ablist
      </Text>
      <AntDesign name="search1" size={24} color={COLOR.B_300} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor:COLOR.GREY_50
  },
  text: {
    color: COLOR.B_300,
    fontSize:FONTSIZE.HEADING_5
  }
})