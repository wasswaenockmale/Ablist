import React from 'react';
import {
  Linking,
  Pressable,
  StyleSheet,
  Text, View
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLOR, FONTSIZE } from '../../../constants/contants';
import CodeHighlighter from "react-native-code-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface ExpandableListItemProps{
  title: string,
  content: string,
  snippet: any,
  name: string,
  link: string
}


const ExpandableListItem = (
  {
    title,
    content,
    snippet = "no",
    name,
    link
  }: ExpandableListItemProps
) => {
  const [expand, setExpand] = React.useState<boolean>(false);

  const toggleExpand = () => {
    setExpand(!expand);
  }

  const handleLinkPress = async () => {
    try {
      const canOpen = await Linking.canOpenURL(link).then(response => response)
      if (canOpen) {
        console.log("The link should open")
        await Linking.openURL(link)
          .then(response => {
            console.log("Opened the link", response);
          })
          .catch(error => {
            console.log("Failed to open a given link");
          })
      }
    } catch (error) {
      console.log("Caught the error", error)
    }
  }

  return (
    <View style={styles.itemContainer}>
      {/* Pressable section */}
      <Pressable
        style={{
          ...styles.itemPressable,
          borderBottomLeftRadius: !expand ? 10 : 0,
          borderBottomRightRadius: !expand ? 10 : 0,
        }}
        onPress={toggleExpand}
      >
        <View
          style={styles.titleViewStyle}
        >
          <Text style={{ ...styles.itemTitle, fontFamily: "" }} numberOfLines={3}>
            {title}
          </Text>
          <Pressable
            style={styles.linkStyle}
            onPress={handleLinkPress}
          >
            <Text
              style={{
                ...styles.itemName,
                fontFamily: "",
              }}
              numberOfLines={1}
            >
              {name}
            </Text>
          </Pressable>
        </View>

        {!expand && (
          <Feather name="chevron-down" size={20} color={COLOR.B_300} />
        )}
        {expand && (
          <Feather name="chevron-up" size={20} color={COLOR.B_300} />
        )}
      </Pressable>

      {/* Expanded section */}
      {expand && (
        <View style={styles.codeDescriptionStyle}>
          <Text style={{ ...styles.itemContent, fontFamily: "" }}>{content}</Text>
        </View>
      )}

      {/* If the code snippet is available, show it in the details of the tip otherwise don't */}
      {expand && snippet !== "" && (
        <View style={styles.codeDescriptionStyle}>
          <CodeHighlighter
            hljsStyle={atomOneDarkReasonable}
            containerStyle={styles.codeSnippet}
            textStyle={styles.text}
            language="javascript"
          >
            {snippet}
          </CodeHighlighter>
        </View>
      )}
    </View>
  );
}

// Add the new styles for name and link in your styles object
const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: COLOR.GREY_50,
    elevation: 1,
    borderColor: COLOR.GREY_75,
  },
  itemPressable: {
    height: 100,
    padding: 10,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.WHITE,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: COLOR.GREY_75,
  },
  itemTitle: {
    fontSize: FONTSIZE.TITLE_1,
  },
  itemName: {
    fontSize: FONTSIZE.BODY,
    color: COLOR.GREY_100,
  },
  itemLink: {
    fontSize: FONTSIZE.BODY,
    color: COLOR.B_300,
  },
  itemContent: {
    fontSize: FONTSIZE.BODY,
    color: COLOR.GREY_100,
  },
  codeSnippet: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  codeDescriptionStyle: {
    padding: 10,
    borderRadius: 10,
  },
  text: {},
  titleViewStyle: {
    height:"100%"
  },
  linkStyle: {
    bottom: 0,
    position: 'absolute'
  }
});

export default ExpandableListItem