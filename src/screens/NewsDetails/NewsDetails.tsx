import {
  Text,
  View,
  Image,
  Animated,
  StatusBar,
  Pressable,
  StyleSheet,
} from 'react-native'
import React from 'react'

import Header from './helperComponents/Header'
import { COLOR, FONTSIZE } from '../../constants/contants'
import * as SecureStore from 'expo-secure-store';

import {
  useRoute,
  useNavigation,
} from '@react-navigation/native'

import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons
} from '@expo/vector-icons'

import onShare from '../../utils/onShare'

import {
  NativeStackNavigationProp
} from '@react-navigation/native-stack';
import { DetailsScreenProps } from '../../../types';

const NewsDetails = () => {

  const router = useRoute<DetailsScreenProps>();
  const { params } = router;

  const [open, setOpen] = React.useState<boolean>(false);
  const [showMoreButton, setShowMoreButton] = React.useState<boolean>(false);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  // share article
  const message = `https://www.techinafrica.com/${params?.title}`;

  // function to bookmark.
  const bookmark = async () => {
    const articleArr = await SecureStore.getItemAsync('bookmarks');
    if (articleArr) {
      const res = JSON.parse(articleArr);
      await SecureStore.setItemAsync('bookmarks', JSON.stringify([...res, { ...params }]))
    } else {
      await SecureStore.setItemAsync('bookmarks', JSON.stringify([{ ...params }]));
    }
  };

  return (
    <Animated.View
      style={styles.container}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: "space-between",
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderBottomColor: COLOR.B_50
        }}
      >
        <Header
          title='Tech News'
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10
          }}
        >
          <MaterialCommunityIcons
            name="share-outline"
            size={30}
            color={COLOR.GREY_500}
            onPress={() => onShare(message)}
          />
          <Ionicons
            name="bookmark-outline"
            size={20}
            color={COLOR.GREY_500}
            onPress={bookmark}
          />
        </View>
      </View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 50
        }}
      >

        <Text
          style={{
            fontSize: FONTSIZE.TITLE_1,
            lineHeight: 25
          }}
          numberOfLines={4}
        >
          {params?.title}
        </Text>
        <Text
          style={{
            color: COLOR.B_200,
            marginVertical: 10,
            lineHeight: 20
          }}
        >
          {params?.excerpt.split(".").slice(0, 1).join("\n")}
        </Text>

        <Image
          source={{ uri: params?.featured_image }}
          style={styles.image}
          resizeMethod='auto'
          resizeMode='cover'
        />
        {/* Author and time  */}
        <View>
        </View>
        <Text
          style={{
            color: COLOR.GREY_400,
            marginVertical: 10,
            lineHeight: 20,
            letterSpacing: 0.9,
            marginBottom: 10
          }}
          numberOfLines={!open ? 15 : undefined}
          onTextLayout={event => {
            if (event.nativeEvent.lines.length > 5) {
              setShowMoreButton(true)
            }
          }}
        >
          {params?.articleContent.replace(params?.excerpt.split(".").slice(0, 1).join("\n"), "")}
        </Text >

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <View />
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => {
              setOpen(!open)
            }}>
            <Text
              style={{
                color: COLOR.ORANGE_300
              }}
            >
              {!open && showMoreButton ? "show more" : "show less"}
            </Text>
            {
              !open && showMoreButton ?
                <Entypo name="chevron-small-down" size={20} color={COLOR.B_300} /> :
                <Entypo name="chevron-small-up" size={20} color={COLOR.B_300} />
            }
          </Pressable>
        </View>

      </Animated.ScrollView >
      < StatusBar
        backgroundColor={COLOR.WHITE}
        translucent={false}
        barStyle='dark-content'
      />
    </Animated.View >
  );
}

export default NewsDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLOR.WHITE
  },
  techNewView: {
    alignSelf: "flex-start",
    backgroundColor: COLOR.B_300,
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 5,
    marginVertical: 5,
    padding: 20
  },
  techText: {
    fontSize: FONTSIZE.TITLE_2,
    color: COLOR.WHITE
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10
  }
})