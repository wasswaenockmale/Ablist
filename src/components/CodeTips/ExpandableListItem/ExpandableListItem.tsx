import React from 'react';
import {
  Linking,
  Pressable,
  StyleSheet,
  Text, View
} from 'react-native';

import { Feather, FontAwesome } from '@expo/vector-icons';
import { COLOR, FONTSIZE } from '../../../constants/contants';
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CodeHighlighter from "react-native-code-highlighter";
import onShare from '../../../utils/onShare';

interface ExpandableListItemProps {
  title: string,
  content: string,
  snippet: any,
  sourceName: string,
  sourceLink: string
  expandedIndex: number | null
  index: number
  onToggleExpand: (index: number) => void
}

const ExpandableListItem = (
  {
    title,
    index,
    content,
    snippet = "",
    sourceName,
    sourceLink,
    expandedIndex,
    onToggleExpand
  }: ExpandableListItemProps
) => {
  const [expand, setExpand] = React.useState<boolean>(true);

  const toggleExpand = () => {
    setExpand(!expand);
    onToggleExpand(index);
  }

  const handleLinkPress = async () => {
    try {
      const canOpen = await Linking.canOpenURL(sourceLink)
        .then(response => response)
        .catch((error: any) => {
          console.log("Link error", error.message);
        });
      if (canOpen) {
        console.log("The link should open");
        await Linking.openURL(sourceLink)
          .then(response => {
            console.log("Opened the link", response);
          })
          .catch(error => {
            console.log("Failed to open a given link");
          })
      }
    } catch (error) {
      console.log("Caught the error", error);
    }
  }

  const message = content + " " + title;

  return (
    <View style={styles.itemContainer}>
      {/* Pressable section */}
      <Pressable
        style={{
          ...styles.itemPressable,
          borderBottomLeftRadius: !expand ? 10 : 0,
          borderBottomRightRadius: !expand ? 10 : 0,
          borderWidth: !expand ? 0.5 : 0
        }}
        onPress={toggleExpand}
      >
        <View
          style={styles.titleViewStyle}
        >
          <Text
            numberOfLines={3}
            style={{
              ...styles.itemTitle,
              fontFamily: "RalewayBold"
            }}
          >
            {title}
          </Text>
          {/* Open the neccessary app so that a link is opened  */}
          <Pressable
            style={styles.linkStyle}
            onPress={handleLinkPress}
          >
            <Text
              style={{
                ...styles.itemsourceName,
                fontFamily: "RalewayExtraBold"
              }}
              numberOfLines={1}
            >
              Source: {sourceName}
            </Text>
          </Pressable>
        </View>

        {
          !expand && (
            <Feather
              name="chevron-down"
              size={20}
              color={COLOR.B_300}
            />
          )
        }
        {
          expand && (
            <Feather
              name="chevron-up"
              size={20}
              color={COLOR.B_300}
            />
          )
        }
      </Pressable >

      {/* Expanded section */}
      {
        expand && (
          <View
            style={
              styles.codeDescriptionStyle
            }
          >
            <Text
              style={{
                ...styles.itemContent,
              }}
            >
              {content}
            </Text>
          </View >
        )
      }

      {/* If the code snippet is available, show it in the details of the tip otherwise don't */}
      {
        expand && snippet !== "" && (
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
        )
      }
      {/* Share tip  */}
      {
        expand &&
        <View
          style={{
            flexDirection: 'row',
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingVertical: 10
          }}
        >
          <View />
          <Pressable
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: 'center',
              paddingHorizontal: 10
            }}
            onPress={() => onShare(message)}
          >
            <FontAwesome
              name="share"
              size={20}
              color={COLOR.B_300}
            />
            <Text style={{ fontSize: FONTSIZE.TITLE_2 }}>Share tip</Text>
          </Pressable>
        </View>
      }
    </View >
  );
}

// Add the new styles for sourceName and link in your styles object
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
  itemsourceName: {
    fontSize: FONTSIZE.BODY,
    color: COLOR.GREY_100,
  },
  itemLink: {
    fontSize: FONTSIZE.BODY,
    color: COLOR.B_300,
  },
  itemContent: {
    fontSize: FONTSIZE.TITLE_1,
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
    flex: 1,
    height: "100%"
  },
  linkStyle: {
    bottom: 0,
    position: 'absolute'
  }
});

export default ExpandableListItem