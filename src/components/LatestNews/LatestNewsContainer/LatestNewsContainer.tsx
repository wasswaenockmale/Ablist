import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NewsItemContainer from '../NewsItemContainer/NewsItemContainer';

const LatestNewsContainer = () => {
  const arr = [1,2,3]
  return (
    <View
      style={styles.container}
    >
      <FlatList
        data={arr}
        renderItem={({ item:any }) => (
          <NewsItemContainer />
        )}
        horizontal
      />
      {/* <NewsItemContainer /> */}
    </View>
  )
}

export default LatestNewsContainer;

const styles = StyleSheet.create({
  container: {
  }
})