import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Reporter = () => {
  return (
    <View
      style={styles.container}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap:10
        }}
      >
        <View
          style={styles.imageView}
        >
          <Image
            source={require("../../assets/images/AbleStateLogo.jpeg")}
            resizeMethod='resize'
            resizeMode='contain'
            style={styles.imageStyle}
          />
        </View>
        <Text>By Sylvia Duruson</Text>
      </View>
      <Text>4 min</Text>
    </View>
  )
}

export default Reporter

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical:5
  },
  imageView: {
    width: 50,
    height: 50,
    flexWrap: 'wrap',
    // borderWidth:1
  },
  imageStyle: {
    width: '100%',
    height:"100%"
    }
})