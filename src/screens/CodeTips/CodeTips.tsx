import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import React, { useContext } from 'react';
// constants 
import { COLOR } from '../../constants/contants';

// components 
import CategorySection from '../../components/CodeTips/CategorySection/CategorySection';
import ExpandableListItem from '../../components/CodeTips/ExpandableListItem/ExpandableListItem';

import useArticles from '../../helper/hooks/useArticles';
import { AppContext } from '../../helper/context/AppContext';
import Header from '../NewsDetails/helperComponents/Header';

const CodeTips = () => {

  // const { codeTips } = useArticles();
  const { codeTips } = useContext(AppContext);
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(0)


  const handleToggleExpand = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <View
      style={styles.codeTipsContainer}
    >

      <View
        style={styles.contentContainer}
      >
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollableCodeTips}
        >
          {
            codeTips?.map((codeTip: any, index: number) => {
              // if (index !== 0) {
                return (
                  <ExpandableListItem
                    key={index}
                    title={codeTip.title}
                    index={index}
                    sourceName={`Berkeley Boot Camps	`}
                    content={codeTip.description}
                    snippet={codeTip.snippet}
                    sourceLink={codeTip.source.link}
                    expandedIndex={expandedIndex}
                    onToggleExpand={handleToggleExpand}
                  />
                )
              // }
            })
          }
        </ScrollView>
      </View>
    </View>
  );
}

export default CodeTips

const styles = StyleSheet.create({
  codeTipsContainer: {
    flex:1,
    padding:10,
    paddingTop: 10,
    backgroundColor: COLOR.WHITE,
  },
  contentContainer: {
    flex: 1,
    marginTop:10
  },
  showCodeTip: {
    flex: 1,
  },
  scrollableCodeTips: {

  }
});