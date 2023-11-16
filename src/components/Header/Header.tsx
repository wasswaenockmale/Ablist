import React from 'react';
import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { COLOR, FONTSIZE } from '../../constants/contants';

interface HeaderProps {
  title: string
  iconName: any
}


const Header = (
  {
    title,
    iconName,
  }: HeaderProps
) => {

  return (
    <View
      style={styles.container}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Text
          style={
            [
              styles.text,
              {
                fontFamily:"ComfortaaBold"
              }
            ]
          }
        >
          {title}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Entypo
            name="dots-three-vertical"
            size={20}
            color="black"
            onPress={() => { }}
          />
        </View>
      </View>
      <View
        style={{
          width: 200
        }}
      >
      </View>
    </View >
  );
}

export default Header

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.GREY_50,
  },
  text: {
    color: COLOR.B_300,
    fontSize: FONTSIZE.HEADING_5,
    marginRight: 10
  }
})