import React,
{ useContext } from 'react';

import {
  View,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';


import * as Updates from 'expo-updates';

// constants
import { COLOR } from '../../constants/contants'

import { AppContext } from '../../helper/context/AppContext'

import TabBar from '../../routes/TabBar'

import Loading from '../../components/Loading/Loader';
import Header from '../../components/Header/Header';
import { environments } from '../../constants/environments';

const Home = () => {

  // Insightify
  const { isLoading } = useContext(AppContext);

  // function to listen to updates.
  const eventListener = (event: Updates.UpdateEvent) => {
    try {
      if (event.type === Updates.UpdateEventType.ERROR) {
        // Error occured.
      } else if (event.type === Updates.UpdateEventType.NO_UPDATE_AVAILABLE) {
        // No update available.
      } else if (event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
        // Since updates are available, notify the user about the updates available
        Alert.alert(
          "Update available",
          "Don't miss out on the latest Ablist features. Tap 'UPDATE' to update your app now.",
          [
            {
              text: "UPDATE",
              onPress: async () => {
                // When the user presses 'update'
                // install updates.
                await Updates.fetchUpdateAsync();
                await Updates.reloadAsync();
              },
              style: 'cancel'
            }
          ],
          {
            cancelable: true,
            onDismiss() { },
          }
        )
      }
    } catch (error) {
      console.log("error occured.")
    }
  }

  // Listen to the updates available and do the required action.
  Updates.useUpdateEvents(eventListener);

  // console.log(environments);
  return isLoading ? <Loading message='Loading articles' /> : (
    <SafeAreaView
      style={styles.container}
    >
      <View
        style={styles.headerContainer}
      >
        <Header />
        <TabBar />
      </View>
    </SafeAreaView >
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },

  text: {

  },
  headerContainer: {
    flex: 1,
    paddingVertical: 10,
  }
})