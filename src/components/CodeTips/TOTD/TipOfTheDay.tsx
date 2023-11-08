import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, FONTSIZE } from '../../../constants/contants'
import CodeHighlighter from 'react-native-code-highlighter'
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface TipOfTheDayProps{
  title: string
  content: string
  snippet: string
}
const TipOfTheDay = (
  {
    title,
    content,
    snippet
  }:TipOfTheDayProps
) => {
  return (
    <View
      style={styles.showCodeTip}
    >
      {/* View section  */}
      <View
        style={{
          ...styles.itemView,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10
        }}
      >
        {/* <Text>Tip of the day</Text> */}
        <Text
          style={{
            ...styles.itemTitle,
            fontFamily: ""
          }}
          numberOfLines={3}
        >
          {title}
        </Text>

      </View>

      <View
        style={styles.codeDescriptionStyle}
      >
        <Text
          style={{
            ...styles.itemContent,
            fontFamily: ""
          }}
        >
          {content}
        </Text>
      </View>

      {/* If the code snippet is available, show it in the details of the tip otherwise don't  */}
      <View
        style={styles.codeDescriptionStyle}
      >
        <CodeHighlighter
          hljsStyle={atomOneDarkReasonable}
          containerStyle={styles.codeSnippet}
          textStyle={styles.text}
          language="Java"
        >
          {snippet}
        </CodeHighlighter>
      </View>
    </View>
  )
}

export default TipOfTheDay

const styles = StyleSheet.create({
  showCodeTip: {
    padding:10,
    // elevation: 1,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: COLOR.GREY_75,
    backgroundColor: COLOR.GREY_50,
    flex:1,
  },
  itemView: {
    height: 100,
    padding: 10,
    borderWidth: 0.5,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: COLOR.GREY_75,
    backgroundColor: COLOR.WHITE,
  },
  itemTitle: {
    fontSize: FONTSIZE.TITLE_1
  },
  itemContent: {
    fontSize: FONTSIZE.BODY,
    color: COLOR.GREY_100
  },
  codeSnippet: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  codeDescriptionStyle: {
    padding: 10
  },
  text: {
    fontSize: FONTSIZE.BODY,
  }
})