import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, LayoutAnimation, UIManager, Animated, Button, Easing, useWindowDimensions } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
  PanGestureHandlerGestureEvent
} from 'react-native-gesture-handler';
import { AppContext } from '../../../helper/context/AppContext';
import TipOfTheDay from '../TOTD/TipOfTheDay';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

interface PanGestureHandlerEvent{
  nativeEvent: {
    translateX: number
    translateY: number
  }
};

const StackCodeTips = () => {

  const { width, height } = useWindowDimensions();

  const x = new Animated.Value(0)
  const y = new Animated.Value(-height);
  const xy = new Animated.ValueXY({ x: 0, y: 0 });
  const { codeTips } = React.useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topTranslateY, setTopTranslateY] = useState(0);

  // useEffect(() => {
  //   Animated.timing(y, {
  //     duration: 3000,
  //     easing: Easing.inOut(Easing.ease),
  //     toValue: 0,
  //     useNativeDriver: false
  //   })
  // }, []);

  const panRef = useRef(null);

  const handleSwipeUp = () => {
    if (currentIndex < codeTips.length - 1) {
      // If currentIndex is not the last item, increase it +1
      setCurrentIndex(currentIndex + 1);
      setTopTranslateY(0);
    }
  };

  const handleSwipeDown = () => {
    if (currentIndex > 0) {
      // If currentIndex is not the first item, decrease it -1
      setCurrentIndex(currentIndex - 1);
      setTopTranslateY(0);
    }
  };

  const onGestureEvent = 
    Animated.event(
    [{ nativeEvent: { translationY: topTranslateY } }],
    { useNativeDriver: false }
  );

  const onHandlerStateChange = (event: { nativeEvent: { state: number; translationY: number; }; }) => {
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationY < -50) {
        // Swipe up
        handleSwipeUp();
      } else if (event.nativeEvent.translationY > 50) {
        // Swipe down
        handleSwipeDown();
      }
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      setTopTranslateY(0);
    }
  };

  const renderCodeTip = (
    item: { title: string; content: string; snippet: string; },
    index: number
  ) => {
    const zIndex = index === currentIndex ? 1 : 0;
    const translateStyle = { transform: [{ translateY: topTranslateY }] };
    return (
      <Animated.View
        key={index}
        style={[
          styles.item,
          translateStyle,
          { zIndex },
        ]}
        pointerEvents="box-none"
      >
        <TipOfTheDay
          title={item.title}
          content={item?.description}
          snippet={item.snippet}
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
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StackCodeTips;
