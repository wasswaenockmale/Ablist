import React, { Fragment, useCallback, useContext } from 'react'
import {
  StyleSheet,
  Animated,
  View,
  Text,
} from 'react-native'

// constants
import { COLOR, FONTSIZE } from '../../constants/contants'

import Loading from '../../components/Loading/Loading'
import { AppContext } from '../../helper/context/AppContext'

import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import TabBar from '../../routes/TabBar'
import BookmarkModal from '../../components/BookmarkModal/BookmarkModal'
import { useFonts } from 'expo-font'

const Home = () => {

  const { isLoading } = useContext(AppContext);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [bookmarkModalVisible, setBookmarkModalVisible] = React.useState<boolean>(false);

  // handle bookmark modal 
  const toggleModal = () => {
    setBookmarkModalVisible(!bookmarkModalVisible)
  }
  // The app is still fetching data, from the database.
  let [fontsLoaded, fontError] = useFonts({
    "ComfortaaLight": require('../../assets/fonts/Comfortaa/static/Comfortaa-Light.ttf'),
    "Comfortaa_Regular": require('../../assets/fonts/Comfortaa/static/Comfortaa-Regular.ttf'),
    "ComfortaaMedium": require('../../assets/fonts/Comfortaa/static/Comfortaa-Medium.ttf'),
    "ComfortaaSemiBold": require('../../assets/fonts/Comfortaa/static/Comfortaa-SemiBold.ttf'),
    "ComfortaaBold": require('../../assets/fonts/Comfortaa/static/Comfortaa-Bold.ttf'),
    "RalewayThin": require('../../assets/fonts/Raleway/static/Raleway-Thin.ttf'),
    "RalewayExtraLight": require('../../assets/fonts/Raleway/static/Raleway-ExtraLight.ttf'),
    "RalewayLight": require('../../assets/fonts/Raleway/static/Raleway-Light.ttf'),
    "RalewayRegular": require('../../assets/fonts/Raleway/static/Raleway-Regular.ttf'),
    "RalewayMedium": require('../../assets/fonts/Raleway/static/Raleway-Medium.ttf'),
    "RalewaySemiBold": require('../../assets/fonts/Raleway/static/Raleway-SemiBold.ttf'),
    "RalewayBold": require('../../assets/fonts/Raleway/static/Raleway-Bold.ttf'),
    "RalewayExtraBold": require('../../assets/fonts/Raleway/static/Raleway-ExtraBold.ttf'),
    "RalewayBlack": require('../../assets/fonts/Raleway/static/Raleway-Black.ttf')
  }
  );
  
  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <Animated.View
      style={styles.container}
    >
      <View
        style={styles.headerContainer}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginBottom: 5
          }}
        >
          <Text
            style={
              [
                styles.text,
                {
                  fontSize: FONTSIZE.TITLE_1,
                  fontFamily:'ComfortaaBold'
                }]
            }
          >
          {`Ablist`}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Entypo
            name="dots-three-vertical"
            size={20}
            color="black"
            onPress={() => { }}
          />

          {/* Check bookmarks.  */}
          <BookmarkModal
            isModalVisible={bookmarkModalVisible}
            toggleModal={toggleModal}
          />
        </View>
      </View>
      <TabBar />
      </View>
      <Loading isLoading={isLoading && fontsLoaded} />
    </Animated.View >
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },

  searchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {

  },
  headerContainer: {
    // paddingHorizontal: 10,
    flex: 1,
    paddingVertical: 10,
  }
})