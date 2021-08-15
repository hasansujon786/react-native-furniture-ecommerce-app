import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator();
const ShopNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Settings" component={SettingsNavigator} /> */}
    </Stack.Navigator>
  )
}

export default ShopNavigator
