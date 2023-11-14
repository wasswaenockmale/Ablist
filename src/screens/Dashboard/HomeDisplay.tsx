import {
  StyleSheet, View,
  Animated, StatusBar,
} from 'react-native'
import React from 'react'
import { AppContext } from '../../helper/context/AppContext'

// componets 
import HomeHeading from '../../components/HomeScreenText/HomeHeading'
import NewsListContainer from '../../components/News/NewsListContainer/NewsListContainer'
import LatestNewsContainer from '../../components/News/LatestNews/LatestNewsContainer/LatestNewsContainer'

const HomeDisplay = () => {

  const { isLoading } = React.useContext(AppContext);
  return (
    <View
      style={{
        width: '100%',
        flex: 1
      }}
    >
      {!isLoading && <HomeHeading title='Hot News' />}
      {/* container for latest news  */}
      <LatestNewsContainer />

      {!isLoading && <HomeHeading title='Trending News' />}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Container for the list of the rest of the news  */}
        <NewsListContainer />

        <StatusBar />
      </Animated.ScrollView>
    </View>
  )
}

export default HomeDisplay

const styles = StyleSheet.create({})