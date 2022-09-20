import { View, StyleSheet, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'

import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem';

export default function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0)

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId).title

    navigation.setOptions({
      title: categoryTitle
    })
  }, [categoryId, navigation])

  function renderMealItem(itemData) {
    return (<MealItem {...itemData.item} />)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(meal) => meal.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})