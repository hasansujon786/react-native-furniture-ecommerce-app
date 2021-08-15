import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen'

const Stack = createStackNavigator();
const CartNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Carts" component={CartScreen} />
      {/* <Stack.Screen name="Settings" component={SettingsNavigator} /> */}
    </Stack.Navigator>
  )
}

export default CartNavigator
