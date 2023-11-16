import React, { Fragment, useContext } from 'react'
import {
  StatusBar,
  StyleSheet,
  Animated,
  View,
  Text,
} from 'react-native'

// constants
import { COLOR } from '../../constants/contants'
// components 
import LatestNewsContainer from '../../components/News/LatestNews/LatestNewsContainer/LatestNewsContainer'
import NewsListContainer from '../../components/News/NewsListContainer/NewsListContainer'
import HomeHeading from '../../components/HomeScreenText/HomeHeading'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import { AppContext } from '../../helper/context/AppContext'
import Loading from '../../components/Loading/Loading'
import { loadFonts } from '../../assets/fonts/fonts'

const Home = () => {

  const [searchWord, setSearchWord] = React.useState<string>('');
  const { isLoading } = useContext(AppContext);

  const handleCancelClick = () => {

  }

  const handleSearchInput = (text: string) => {
    setSearchWord(text)
  }

  const searchResults = () => {

  }

  // The app is still fetching data, from the database.
  if (isLoading) {
    <Loading />
  }

  return (
    <Animated.View
      style={styles.container}
    >
      <Header
        title='Ablist'
        iconName={'settings-outline'}
      />

      <SearchBar
        searchWord=''
        handleCancelClick={handleCancelClick}
        handleSearchInput={handleSearchInput}
      />
      {
        searchWord?.length > 0 ?
          (
            <View style={styles.searchContainer}>
              <Text>Not available</Text>
            </View>
          ) :
          (
            <Fragment>
              <HomeHeading title='Latest News' />
              {/* container for latest news  */}
              <LatestNewsContainer />

              <HomeHeading title='Trending News' />
              <Animated.ScrollView
                showsVerticalScrollIndicator={false}
              >
                {/* Container for the list of the rest of the news  */}
                <NewsListContainer />

                <StatusBar />
              </Animated.ScrollView>
            </Fragment>
          )
      }
    </Animated.View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLOR.WHITE,
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})