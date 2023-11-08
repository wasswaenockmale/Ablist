import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { COLOR, FONTSIZE } from '../../../constants/contants';

interface ExpandableListItemProps{
  title: string,
  content: string,
  snippet: any
}
const ExpandableListItem = (
  {
    title,
    content,
    snippet="no"
  }: ExpandableListItemProps
) => {

  const [expand, setExpand] = React.useState<boolean>(false);

  const toggleExpand = () => {
    setExpand(!expand);
  }

  return (
    <View
      style={styles.itemContainer}
    >
      {/* Pressable section  */}
      <Pressable
        style={styles.itemPressable}
        onPress={toggleExpand}
      >
        <Text
          style={{
            ...styles.itemTitle,
            fontFamily:""
          }}
        >
          {title}
        </Text>

        {!expand &&
          <Feather
            name="chevron-down"
            size={20}
            color={COLOR.B_300}
          />
        }
        {expand &&
          <Feather
            name="chevron-up"
            size={20}
            color={COLOR.B_300}
          />
        }
      </Pressable>

      {/* Expanded section  */}
      {expand &&
        <Text
          style={{
            ...styles.itemContent,
            fontFamily:""
          }}
        >
          {content}
        </Text>
      }
      {snippet != "no" &&
        <Text
          style={styles.codeSnippet}
        >
          {snippet}
        </Text>
      }
    </View>
  )
}

export default ExpandableListItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 10,
    padding: 5,
    backgroundColor: COLOR.GREY_50,
    borderRadius: 10,
    elevation:3
  },
  itemPressable: {
    borderRadius: 10, 
    overflow: 'hidden',
    backgroundColor:COLOR.WHITE
  },
  itemTitle: {
    fontSize:FONTSIZE.TITLE_1
  },
  itemContent: {
    fontSize: FONTSIZE.BODY,
    color:COLOR.GREY_100
  },
  codeSnippet: {
    fontSize:FONTSIZE.BODY
  }
})