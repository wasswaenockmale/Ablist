import React from 'react'
import {
  StyleSheet,
  ScrollView,
} from 'react-native'
import CategoryItem from '../CategoryItem/CategoryItem';

const CategorySection = () => {

  const categories = ['All', 'Top rated', 'web development'];

  const [isActive, setIsActive] = React.useState<boolean[]>([true, false, false]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categorySection}
    >
      {categories.map((category: string, index: number) => (
        <CategoryItem
          key={index}
          name={category}
          isActive={isActive[index]}
        />
      ))}
    </ScrollView>
  );
}

export default CategorySection

const styles = StyleSheet.create({
  categorySection: {
    padding: 5,
    marginVertical:5
  }
})