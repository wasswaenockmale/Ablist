import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { COLOR } from '../../../constants/contants'

// icons 
import { AntDesign } from '@expo/vector-icons';

const CommentFooter = () => {
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.commentInputView}
      >
        <TextInput
          placeholder='Write your comment here...'
          placeholderTextColor={COLOR.GREY_100}
          style={styles.commentInput}
        />
      </View>
      <View
        style={styles.iconView}
      >
        <AntDesign name="message1" size={24} color="black" />
        {/* <AntDesign name="like1" size={24} color={COLOR.ORANGE_300} />
        <AntDesign name="dislike1" size={24} color={COLOR.ORANGE_300} /> */}
        <AntDesign name="like2" size={24} color="black" />
        <AntDesign name="dislike2" size={24} color="black" />
      </View>
    </View>
  )
}

export default CommentFooter

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    // borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: COLOR.WHITE,
    marginTop:10
  },
  commentInputView: {
    flex:1
  },
  commentInput: {
    backgroundColor: COLOR.GREY_50,
    borderRadius: 20,
    padding: 5,
    paddingLeft:20
  },
  iconView: {
    flexDirection: 'row',
    gap: 5,
    alignItems:'center'
  }
})