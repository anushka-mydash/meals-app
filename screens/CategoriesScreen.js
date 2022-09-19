import { FlatList, StyleSheet } from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data'

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {

    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id
      })
    }

    return <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={pressHandler}
    />
  }

  return (
    <FlatList
      style={styles.screen}
      data={CATEGORIES}
      renderItem={(itemData) => renderCategoryItem(itemData)}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})