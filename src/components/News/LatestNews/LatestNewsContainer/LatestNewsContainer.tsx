import React from 'react'
import {
  Animated,
  FlatList,
  StyleSheet,
  View,
  ViewToken,
  useWindowDimensions,
} from 'react-native';

import { DIMEN } from '../../../../constants/contants';

// hooks 
import { useNavigation } from '@react-navigation/native';

// components 
import Paginator from '../../Paginator/Paginator';
import useArticles from '../../../../helper/hooks/useArticles';
import NewsItemContainer from '../NewsItemContainer/NewsItemContainer';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const LatestNewsContainer = () => {

  // Navigation hook
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  
  // state hooks 
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  
  // useWindowDimens()
  const { width } = useWindowDimensions();
  
  // useRef hooks
  const scrollX = React.useRef(new Animated.Value(1)).current;
  const slidesRef = React.useRef(null);
  const viewableItemsChanged = React.useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0].index !== null) {
      setCurrentIndex(viewableItems[0].index)
    }
  }).current;

  const viewConfig = React.useRef({ viewAreaCoveragePercentThreshold: 50 }).current;


  // custom hook for fetching articles.
  const { topStories } = useArticles();

  const renderLatestStory = ({ item, index }: { item: any, index: number }) => (
    <View
      style={{
        width: width * 0.90,
        // borderWidth:10
        marginRight: index === topStories.length - 1 || index === 0 ? 10 : 5,
        marginLeft: index === 0 ? 5 : 0
      }}
    >
      <NewsItemContainer
        key={index}
        image={{ uri: item.featured_image }}
        title={item.title}
        author={"Tech News Africa"}
        publishedAt={item.publishedAt}
        handleNavigation={() => {
          navigation.navigate("Details", item);
        }}
      />
    </View>
  );

  return (
    <View
      style={styles.container}
    >
      <FlatList
        data={topStories}
        style={{ width: '100%', flexWrap: 'wrap' }}
        numColumns={1}
        renderItem={renderLatestStory}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={(item) => item?.articleID.toString()}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />

      <Paginator
        data={topStories}
        scrollX={scrollX}
      />
    </View>
  );
}

export default LatestNewsContainer;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  flatListStyle: {
  }
})