import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native'
import { COLOR, FONTSIZE } from '../../../constants/contants';


interface ListItemProps{
  title: string
  expand: boolean
  toggleExpand:() => void
}
const ListItem = (
  {
    title,
    expand,
    toggleExpand
  }:ListItemProps
) => {
  return (
    <Pressable
      style={styles.itemPressable}
      onPress={toggleExpand}
    >
      <Text
        style={{
          ...styles.itemTitle,
          fontFamily: ""
        }}
      >
        {title}
      </Text>
      {!expand && <Feather name="chevron-down" size={24} color="black" />}
      {expand && <Feather name="chevron-up" size={24} color="black" />}
    </Pressable>
  )
}

export default ListItem

const styles = StyleSheet.create({
  itemPressable: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: COLOR.WHITE
  },
  itemTitle: {
    fontSize: FONTSIZE.TITLE_1
  },
})