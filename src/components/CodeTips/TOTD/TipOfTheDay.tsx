import {
  Pressable,
  StyleSheet, Text, View,
  Platform, Linking,
  Share,
  Alert
} from 'react-native';
import React from 'react';

import CodeHighlighter from 'react-native-code-highlighter';
import { COLOR, FONTSIZE } from '../../../constants/contants';

import {
  atomOneDarkReasonable
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Imports for icons.
import { FontAwesome } from '@expo/vector-icons';

// imports for sharing tips 
import { Permission, } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';

interface TipOfTheDayProps {
  title: string
  content: string
  snippet: string
  sourceName: string
  sourceLink: string
}

const TipOfTheDay = (
  {
    title,
    content,
    snippet,
    sourceName,
    sourceLink
  }: TipOfTheDayProps
) => {

  const [share, setShare] = React.useState<boolean>(false);

  return (
    <View
      style={styles.showCodeTip}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center'
        }}
      >
        <Text
          style={{
            color: COLOR.GREY_75,

          }}
        >
          Tip of the day
        </Text>
        <FontAwesome
          name="share"
          size={15}
          color={COLOR.B_300}
        />
      </View>
      {/* View section  */}
      <View
        style={{
          ...styles.itemView,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          
        }}
      >
        <Text
          style={{
            ...styles.itemTitle,
             : ""
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
             : ""
          }}
        >
          {content}
        </Text>
      </View >

  {/* If the code snippet is available, show it in the details of the tip otherwise don't  */ }
  < View
style = { styles.codeDescriptionStyle }
  >
  { snippet !== "" && (
    <View style={styles.codeDescriptionStyle}>
      <CodeHighlighter
        hljsStyle={atomOneDarkReasonable}
        containerStyle={styles.codeSnippet}
        textStyle={{
          ...styles.text
        }}
        language="javascript"
      >
        {snippet}
      </CodeHighlighter>
    </View>
  )}
      </View >

  {/* Source  */ }
  < View >
  <Text>Source: { }</Text>
      </View >
    </View >
  );
}

export default TipOfTheDay

const styles = StyleSheet.create({
  showCodeTip: {
    flex: 1,
    padding: 20,
    marginTop: 5,
    elevation: 10,
    marginBottom: 10,
    borderColor: COLOR.GREY_75,
    shadowColor: COLOR.NEUTRAL_1
  },
  itemView: {
    height: 100,
    padding: 10,
    marginTop: 20,
    borderWidth: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: COLOR.GREY_75,
  },
  itemTitle: {
    fontSize: FONTSIZE.HEADING_5
  },
  itemContent: {
    color: COLOR.GREY_100,
    fontSize: FONTSIZE.TITLE_2,
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
  },
});