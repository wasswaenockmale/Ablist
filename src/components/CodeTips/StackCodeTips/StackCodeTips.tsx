import React, { useState, useRef } from 'react';
import { View, StyleSheet, LayoutAnimation, UIManager, Animated } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import { AppContext } from '../../../helper/context/AppContext';
import TipOfTheDay from '../TOTD/TipOfTheDay';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

interface sourceType{
  name: string
  link: string
}
  
const StackCodeTips = () => {

  const { codeTips } = React.useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const topTranslateY = new Animated.Value(0);

  const panRef = useRef(null);

  const handleSwipeUp = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      topTranslateY.setValue(0);
    }
  };

  const handleSwipeDown = () => {
    if (currentIndex < codeTips.length - 1) {
      setCurrentIndex(currentIndex + 1);
      topTranslateY.setValue(0);
    }
  };

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: topTranslateY } }],
    { useNativeDriver: false }
  );

  const onHandlerStateChange = (event: { nativeEvent: { state: number; translationY: number; }; }) => {
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationY < -20) {
        // Swipe up
        handleSwipeUp();
      } else if (event.nativeEvent.translationY > 20) {
        // Swipe down
        handleSwipeDown();
      }
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      topTranslateY.setValue(0);
    }
  };

  const renderCodeTip = (
    item: { title: string; description: string; snippet: string, source:sourceType },
    index: number
  ) => {
    const zIndex = index === currentIndex ? 1 : 0;
    
    const widthStyle = {
      width: index === currentIndex ? '100%' : `${100 - index * 5 }%`,
    };

    const topStyle = {
      bottom: index === currentIndex ? 0 : index * 10,
    };

    return (
      <Animated.View
        key={index}
        style={[
          styles.item,
          widthStyle,
          topStyle,
          { zIndex },
        ]}
      >
        <TipOfTheDay
          title={item?.title}
          content={item?.description}
          snippet={item?.snippet}
          sourceName={item?.source.name}
          sourceLink={item?.source.link}
        />
      </Animated.View>
    );
  };




  return (
    <GestureHandlerRootView style={styles.gestureContainer}>
      <PanGestureHandler
        ref={panRef}
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <View style={styles.container}>
          {codeTips.map(renderCodeTip)}
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gestureContainer: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    height:"90%",
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    // padding:5
  },
});

export default StackCodeTips;
