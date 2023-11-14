import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import { COLOR } from "../../constants/contants";

const Loading = ({ isLoading }) => {
  return (
    <Modal
      transparent={true}
      visible={isLoading}
      animationType='none'
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLOR.NEUTRAL_2
        }}
      >
        <ActivityIndicator
          size='large'
          style={{
            flex: 1,
            backgroundColor: 'transparent',
          }}
          color={COLOR.ORANGE_300}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default Loading;