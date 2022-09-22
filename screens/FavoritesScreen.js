import { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FavoritesContext } from '../store/context/favoritesContext'
import MealsList from '../components/MealsList/MealsList'

import { MEALS } from '../data/dummy-data'

export default function FavoritesScreen() {
  const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMealsList = MEALS.filter(meal => favoriteMealsContext.ids.includes(meal.id))

  if (!favoriteMealsList.length)
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    )

  return <MealsList items={favoriteMealsList} />
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})