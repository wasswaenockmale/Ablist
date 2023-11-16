import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLOR, FONTSIZE } from '../../constants/contants';
import { loadFonts } from '../../assets/fonts/fonts';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps{
  title: string
  iconName: any
}

const Header = (
  {
    title,
    iconName,
  }: HeaderProps
) => {

  React.useEffect(() => {
    loadFonts()
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }, [])

  return (
    <View
      style={styles.container}
    >
      <Text
        style={
          [styles.text, { fontFamily: "ComfortaaSemiBold" }]
        }
      >
        {title}
      </Text>
      
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap:2
        }}
      >
        <Ionicons
          name={iconName}
          size={20}
          color={COLOR.B_300}
        />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLOR.GREY_50,
  },
  text: {
    color: COLOR.B_300,
    fontSize: FONTSIZE.HEADING_5,
    marginRight:10
  }
})