import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native'
import React from 'react'

import MealDetails from './MealDetails'

export default function MealItem({ id, title, imageUrl, duration, complexity, affordability, onPress }) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => pressed ? styles.buttonPress : null}
        android_ripple={{ color: '#ccc' }}
        onPress={onPress.bind(this, { mealId: id })}
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