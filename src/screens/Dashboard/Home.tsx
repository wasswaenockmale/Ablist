import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import { COLOR, FONTSIZE } from '../../constants/contants'
import LatestNewsContainer from '../../components/LatestNews/LatestNewsContainer/LatestNewsContainer'

const Home = () => {
  return (
    <View
      style={styles.container}
    >
      <Header />
      <Text
        style={{
          fontFamily: "RalewaySemiBold",
          marginVertical: 5,
          color: COLOR.ORANGE_300,
          fontSize:FONTSIZE.TITLE_1
        }}
      >
        Latest
      </Text>
      <LatestNewsContainer />
      {/* <LatestNewsContainer /> */}
      <StatusBar />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:COLOR.WHITE
  }
})