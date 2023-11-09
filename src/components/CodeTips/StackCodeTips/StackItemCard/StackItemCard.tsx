import { Alert, Linking, Platform, Pressable, Share, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import CodeHighlighter from 'react-native-code-highlighter'
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { COLOR, FONTSIZE } from '../../../../constants/contants'

interface TipOfTheDayProps {
  title: string
  content: string
  snippet: string
  sourceName: string
  sourceLink: string
}

const StackItemCard = (
  {
    title,
    content,
    snippet,
    sourceName,
    sourceLink
  }: TipOfTheDayProps
) => {
  const [favorite, setFavorite] = React.useState<boolean>(false);

  const apps = ['twitter', 'linkedin', 'instagram', 'facebook']


  const handleOpenLink = async () => {
    const openIn = apps.find(app => sourceLink.includes(app))
    if (openIn) {
      if (Platform.OS === 'android') {
        const url = sourceLink.startsWith('http') ? sourceLink : `https://${sourceLink}`;
        Linking.openURL(url)
          .then(response => {
            // console.log(response);
          })
          .catch(error => {
            console.log(error?.message);
            // Provide a user-friendly message here to inform the user about the issue.
          });
      }
    }
  }


  const onShare = async () => {
    try {
      const results = await Share.share(
        {
          message: sourceLink
        }
      )

      if (results.action === Share.sharedAction) {

      }
    } catch (error: any) {
      Alert.alert(error.message)
    }
  }

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
        {snippet !== "" && (
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

      {/* share section.  */}
      <View
        style={styles.sourceContainer}
      >
        <View
          style={styles.favoriteStyle}
        >
          {!favorite &&
            <AntDesign
              style={styles.heartStyle}
              name="hearto"
              size={24}
              color="black"
            />
          }
          {!!favorite &&
            <AntDesign
              style={styles.heartStyle}
              name="heart"
              size={24}
              color="black"
            />
          }
        </View>
        <Pressable
          style={styles.sourceLinkContainer}
          onPress={handleOpenLink}
        >
          <View>
            <Text>Find source</Text>
            <Text># {sourceName}</Text>
          </View>
          <FontAwesome
            name="location-arrow"
            size={24}
            color="black"
          />
        </Pressable>
        <View
          style={styles.favoriteStyle}
        >
          <MaterialCommunityIcons
            name="share-outline"
            size={25}
            color="black"
            onPress={onShare}
          />
        </View>
      </View>
    </View>
  );
}

export default StackItemCard

const styles = StyleSheet.create({
  showCodeTip: {
    flex: 1,
    padding: 10,
    marginBottom: 10,
    borderColor: COLOR.GREY_75,
    backgroundColor: COLOR.B_300,
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
    fontSize: FONTSIZE.BODY,
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
  sourceContainer: {
    width: '90%',
    bottom: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    color: COLOR.WHITE,
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: "space-around",
  },

  sourceLinkContainer: {
    width: "70%",
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favoriteStyle: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 20,
  },
  heartStyle: {
    alignSelf: "center"
  }
});