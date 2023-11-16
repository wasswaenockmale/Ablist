import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  StatusBar
} from 'react-native'
import React from 'react'
import Header from './helperComponents/Header'
import CommentFooter from './helperComponents/CommentFooter'
import { COLOR, FONTSIZE } from '../../constants/contants'
import Reporter from '../../components/Reporter/Reporter'
import { useRoute } from '@react-navigation/native'

const NewsDetails = () => {

  const router = useRoute();
  const { params } = router;

  return (
    <Animated.View
      style={styles.container}
    >
      <Header
        title='Details'
      />
      <View
        style={styles.techNewView}
      >
        <Text
          style={[
            styles.techText,
            {
              fontFamily: "ComfortaaBold",
            }
          ]}
        >Tech News Africa</Text>
      </View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
      >
        
        <Text
          style={{
            fontFamily: "ComfortaaBold",
            fontSize:FONTSIZE.TITLE_1
          }}
        >
          {/* Kenyan conversational commerce startup Sukhiba Connect
          aims to power seamless buying and selling through WhatsApp
          as social commerce booms across Africa. */}
          {params?.title}
        </Text>
        <Text
          style={{
            color: COLOR.B_200,
            fontFamily: "RalewayRegular",
            marginVertical: 10,
          }}
        >
          {/* The continent’s social commerce market is rapidly
          expanding as businesses leverage platforms like WhatsApp.
          However, limitations exist around digital payments and delivery, which is where Sukhiba comes in. */}
          {params?.excerpt}
        </Text>

        <Image
          source={{uri: params?.featured_image}}
          style={styles.image}
          resizeMethod='auto'
          resizeMode='cover'
        />

        <Text
          style={{
            fontFamily: "RalewaySemiBold",
            color: COLOR.GREY_400,
            marginVertical: 10,
            
          }}
        >
          {/* The company has developed a B2B tool enabling companies to
          reach and transact with customers directly within WhatsApp.
          Sellers can manage orders, accept mobile payments,
          send notifications and group buyers without leaving the app.
          “We brought the ability to do the full transaction from
          conversation to purchase, payments and delivery on WhatsApp,”
          said Sukhiba co-founder and CEO Ananth Gudipati.
          So far, Sukhiba has enabled WhatsApp commerce for over 30
          companies, largely manufacturers and distributors serving
          some 15,000 small and medium enterprises. These sellers use
          Sukhiba to help sales teams expand their reach and gain new
          retailers as customers.
          Features like customer routing assign reps to provide tailored
          support within WhatsApp based on location. Gudipati says this
          maintains vital personal relationships between buyers and
          sellers. */}
          {params?.articleContent}
        </Text>

        <Reporter
          name='Reported by Sylvia Duruson'
          articleLongitivity='4 min'
          imageUrl={params?.featured_image}
        />
      </Animated.ScrollView>
      <CommentFooter />
      <StatusBar backgroundColor={COLOR.WHITE} translucent={false} barStyle='dark-content' />
    </Animated.View>
  )
}

export default NewsDetails

const styles = StyleSheet.create({
  container: {
    flex:1,
    position: 'relative',
    padding: 20,
    backgroundColor:COLOR.WHITE
  },
  techNewView: {
    alignSelf:"flex-start",
    backgroundColor: COLOR.B_300,
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal:5,
    marginVertical: 5,
  },
  techText: {
    fontSize: FONTSIZE.TITLE_2,
    color:COLOR.WHITE
  },
  image: {
    width:"100%",
    height: 150,
    borderRadius:10
  }
})