import React from 'react';

import { Alert } from 'react-native';
import * as Updates from 'expo-updates';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/routes';
import AppContextProvider from './src/helper/context/AppContext';
import TabBar from './src/routes/TabBar';

export default function App() {
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
  // the return function.
  return (
    // <StackItems />
    <NavigationContainer>
      <AppContextProvider>
        <Routes />
        {/* <TabBar /> */}
      </AppContextProvider>
    </NavigationContainer>
  );
}
