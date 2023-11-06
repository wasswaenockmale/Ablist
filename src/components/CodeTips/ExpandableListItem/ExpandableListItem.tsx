import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { COLOR, FONTSIZE } from '../../../constants/contants';
import ListItem from '../ListItem/ListItem';

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

      <ListItem
        title={title}
        expand={expand}
        toggleExpand={toggleExpand}
      />

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
  itemContent: {
    fontSize: FONTSIZE.BODY,
    color:COLOR.GREY_100
  },
  codeSnippet: {
    fontSize:FONTSIZE.BODY
  }
})