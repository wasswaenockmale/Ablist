import { Animated, FlatList, StyleSheet, Text, View, ViewToken, useWindowDimensions } from 'react-native'
import React, { Fragment, useReducer } from 'react'
import NewsItemContainer from '../NewsItemContainer/NewsItemContainer';
import { DIMEN } from '../../../constants/contants';
import Paginator from '../../Paginator/Paginator';

const LatestNewsContainer = () => {
  const arr = [1, 2, 3, 5];
  const scrollX = React.useRef(new Animated.Value(1)).current;

  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const slidesRef = React.useRef(null);

  const viewableItemsChanged = React.useRef(({ viewableItems }:{viewableItems: ViewToken[]}) => {
    if (viewableItems[0].index !== null) {
      setCurrentIndex(viewableItems[0].index)
    }
  }).current;

  const viewConfig = React.useRef({ viewAreaCoveragePercentThreshold: 50 }).current
  
  const { width } = useWindowDimensions();

  return (
    <View
      style={styles.container}
    >
      <FlatList
        data={arr}
        renderItem={({ item: any, index }) => (
          <NewsItemContainer key={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.toString()}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />

      <Paginator data={arr} scrollX={scrollX} />
    </View>
  );
}

export default LatestNewsContainer;

const styles = StyleSheet.create({
  container: {
    width: DIMEN.SCREENWIDTH,
    // borderWidth: 10,
    marginRight:10
  },
})