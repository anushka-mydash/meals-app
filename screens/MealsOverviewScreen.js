import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'

import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem';

export default function MealsOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0)

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