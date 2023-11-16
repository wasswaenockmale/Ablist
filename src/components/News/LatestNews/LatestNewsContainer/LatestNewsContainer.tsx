import React from 'react'
import {
  Animated,
  FlatList,
  StyleSheet,
  View,
  ViewToken,
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
  const arr = [1, 2, 3, 5];
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  
  const scrollX = React.useRef(new Animated.Value(1)).current;

  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const slidesRef = React.useRef(null);

  const viewableItemsChanged = React.useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0].index !== null) {
      setCurrentIndex(viewableItems[0].index)
    }
  }).current;

  const viewConfig = React.useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  const { topStories } = useArticles();

  return (
    <View
      style={styles.container}
    >
      <FlatList
        data={topStories}
        renderItem={({ item, index }) => (
          <NewsItemContainer
            key={index}
            image={{ uri: item.featured_image }}
            title={item.title}
            author={"Sylvia Duruson"}
            publishedAt={item.publishedAt}
            handleNavigation={() => {
              navigation.navigate("Details", item);
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
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
    width: DIMEN.SCREENWIDTH,
    marginRight: 10
  },
})