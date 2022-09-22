import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import MealDetails from '../MealDetail/MealDetails'

export default function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate('MealDetail', { mealId: id })
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => pressed ? styles.buttonPress : null}
        android_ripple={{ color: '#ccc' }}
        onPress={pressHandler}
      >
        <View>
          <View>
            <Image
              style={styles.image}
              source={{ uri: imageUrl }}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    // ios shadow - 
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS == 'android' ? 'hidden' : 'visible'
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  },
  buttonPress: {
    opacity: 0.5
  },
})