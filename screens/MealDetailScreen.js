import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import { useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { MEALS } from '../data/dummy-data'

import MealDetails from '../components/MealDetail/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton'
// import { FavoritesContext } from '../store/context/favoritesContext'
import { addFavorite, removeFavorite } from '../store/redux/favorites'

export default function MealDetailScreen({ route, navigation }) {
  // const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMealsId = useSelector(state => state.favoriteMeals);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  const mealIsFavorite = favoriteMealsId.ids.includes(mealId);

  function favoriteMealsToggle() {
    if (mealIsFavorite)
      dispatch(removeFavorite({ id: mealId }))
    else
      dispatch(addFavorite({ id: mealId }))
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon={mealIsFavorite ? "star" : "star-outline"} color="white" onPress={favoriteMealsToggle} />
      }
    })
  }, [navigation, favoriteMealsToggle])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailText: {
    color: 'white'
  },
  listContainer: {
    width: '80%'
  },
  listOuterContainer: {
    alignItems: 'center'
  }
})