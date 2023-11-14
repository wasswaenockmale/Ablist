import React from 'react'
import {
  Modal,
  Text, View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as SecureStore from "expo-secure-store";

interface BookmarkModalProps {
  isModalVisible: boolean
  toggleModal: () => void
}
const BookmarkModal = (
  {
    isModalVisible,
    toggleModal
  }:BookmarkModalProps
) => {

  const [bookmarks, setBookmarks] = React.useState<any[]>([]);

  React.useEffect(() => {
    async function getValueFor() {
      let result = await SecureStore.getItemAsync("bookmarks");
      if (result) {
        setBookmarks(JSON.parse(result));
      }
    };
    getValueFor();
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={toggleModal}
    >
      <View style={styles.modalContainer}>
        {/* {bookmarks.map((item, index) => (
          <Text>
            One
          </Text>
        ))
        } */}
        <TouchableOpacity onPress={toggleModal}>
          <Text>Close Modal</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default BookmarkModal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
})