import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { COLOR, FONTSIZE } from '../../../constants/contants'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
  
  const navigation = useNavigation();

  return (
    <View
      style={styles.container}
    >
      <AntDesign
        name='arrowleft'
        color={COLOR.B_300}
        size={20}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text
        style={[
          styles.text,
          {
            fontFamily: ""
          }
        ]}
      >
        Details
      </Text>
      <View />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:5
  },
  text: {
    fontSize:FONTSIZE.TITLE_1
  }
})