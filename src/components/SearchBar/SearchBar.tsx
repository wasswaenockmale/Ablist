import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { COLOR } from '../../constants/contants';

interface SearchBarProps{
  searchWord: string,
  handleSearchInput: (text:string) => void,
  handleCancelClick: () => void
}
const SearchBar = (
  {
    searchWord,
    handleCancelClick,
    handleSearchInput
  }: SearchBarProps
) => {
  return (
    <View
      style={styles.container}
    >
      <AntDesign name="search1" size={20} color={COLOR.B_100} />
      <TextInput
        placeholderTextColor={COLOR.B_100}
        placeholder='search here...'
        style={styles.searchInput}
        onChangeText={handleSearchInput}
      />
      {
        searchWord &&
        <Entypo
          name="cross"
          size={25}
          color={COLOR.B_300}
          onPress={handleCancelClick}
        />
      }
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    backgroundColor: COLOR.GREY_50,
    marginTop:10
  },
  searchInput: {
    flex: 1,
    padding: 2,
    paddingHorizontal:5
  }
})