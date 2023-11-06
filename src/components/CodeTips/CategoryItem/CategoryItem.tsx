import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLOR, FONTSIZE } from '../../../constants/contants'

interface CategoryItemProps{
  isActive: boolean,
  name: string
}
const CategoryItem = (
  {
    isActive,
    name
  }:CategoryItemProps
) => {
  return (
    <View
      style={{
        ...styles.categoryItemContainer,
        backgroundColor:isActive ? COLOR.B_300 : COLOR.WHITE
      }}
    >
      <Text
        style={{
          ...styles.text,
          fontFamily:""
        }}
      >
        {name}
      </Text>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  categoryItemContainer: {
    borderRadius: 20,
    padding: 5,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor:COLOR.B_300
  },
  text: {
    fontSize:FONTSIZE.SMALL
  }
})