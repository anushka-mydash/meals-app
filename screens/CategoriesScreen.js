import { FlatList, StyleSheet } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data'

function renderCategoryItem(itemData) {
  return <CategoryGridTile
    title={itemData.item.title}
    color={itemData.item.color}
  />
}

export default function CategoriesScreen() {
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