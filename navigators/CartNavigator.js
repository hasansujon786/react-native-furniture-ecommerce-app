import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen'
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const CartNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: Colors.defaultBG }
      }}
    >
      <Stack.Screen name="Carts" component={CartScreen} />
      {/* <Stack.Screen name="Settings" component={SettingsNavigator} /> */}
    </Stack.Navigator>
  )
}

export default CartNavigator
