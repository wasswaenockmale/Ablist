import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLOR } from '../../constants/contants';

const SearchBar = () => {
  return (
    <View
      style={styles.container}
    >
      <AntDesign name="search1" size={24} color={COLOR.B_100} />
      <TextInput
        placeholderTextColor={COLOR.B_100}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: COLOR.GREY_50,
    borderRadius:10
  },
  searchInput: {
    flex: 1,
  }
})