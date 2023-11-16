import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  View
} from 'react-native'

import { COLOR } from '../../constants/contants'

const Loading = () => {
  return (
    <View
      style={styles.container}
    >
      <ActivityIndicator
        size='large'
        color={COLOR.ORANGE_300}
      />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:COLOR.NEUTRAL_3
  }
})