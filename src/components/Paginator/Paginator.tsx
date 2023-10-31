import { StyleSheet, Animated, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { COLOR } from '../../constants/contants'

interface PaginatorProps{
  data: any[],
  scrollX: any
}
const Paginator = (
  {
    data,
    scrollX
  }
    : PaginatorProps) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={styles.container}
    >
      {
        data.map((_, index) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [5, 20, 5],
            extrapolate: 'clamp',
          })
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp'
          })
          return <Animated.View style={{...styles.dot, width: dotWidth, opacity}} key={index} />
        })
      }
    </View>
  )
}

export default Paginator

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    height: 30,
    marginVertical:5
  },
  dot: {
    height: 5,
    borderRadius: 5,
    backgroundColor: COLOR.B_300,
    marginHorizontal:5
  }
})