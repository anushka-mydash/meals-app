import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from './MealItem'

export default function MealsList({ items }) {

  function renderMealItem(itemData) {
    return <MealItem {...itemData.item} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
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