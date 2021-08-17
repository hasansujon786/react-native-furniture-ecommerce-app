import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteScreen from '../screens/FavoriteScreen'
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const FavoriteNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: Colors.defaultBG }
      }}
    >
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
    </Stack.Navigator>
  )
}

export default FavoriteNavigator
