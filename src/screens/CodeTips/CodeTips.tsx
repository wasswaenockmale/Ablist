import {
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native'
import React from 'react';
// constants 
import { COLOR } from '../../constants/contants';
// components 
import Header from '../../components/Header/Header';
import CategorySection from '../../components/CodeTips/CategorySection/CategorySection';
import ExpandableListItem from '../../components/CodeTips/ExpandableListItem/ExpandableListItem';

import { AppContext } from '../../helper/context/AppContext';
import TipOfTheDay from '../../components/CodeTips/TOTD/TipOfTheDay';
import StackCodeTips from '../../components/CodeTips/StackCodeTips/StackCodeTips';

const CodeTips = () => {

  const { codeTips } = React.useContext(AppContext);

  return (
    <View
      style={styles.codeTipsContainer}
    >
      <Header
        title='Coding Tips'
        iconName={'code'}
      />

      {/* Section for the user to select a category  */}
      <CategorySection />

      {/* Tip of the day  */}
      <TipOfTheDay
        title={codeTips[0].title}
        content={codeTips[0].description}
        snippet={codeTips[0].snippet}
      />

      <View
        style={styles.contentContainer}
      >
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollableCodeTips}
        >
          {
            codeTips.slice(1).map((codeTip: any, index: number) => (
              <ExpandableListItem
                key={index}
                title={codeTip.title}
                name={codeTip.source.name}
                content={codeTip.description}
                snippet={codeTip.snippet}
                link={codeTip.source.link}
              />
            ))
          }
        </ScrollView>
      </View>
      {/* <StackCodeTips /> */}
    </View>
  );
}

export default CodeTips

const styles = StyleSheet.create({
  codeTipsContainer: {
    flex:1,
    backgroundColor: COLOR.WHITE,
    padding: 10,
  },
  contentContainer: {
    flex:1,
  },
  showCodeTip: {
    flex: 1,
    
  },
  scrollableCodeTips: {
  }
});