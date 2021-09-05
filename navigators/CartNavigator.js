import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen'

import { headerStyles } from '../constants/globalStyles';

const Stack = createStackNavigator();
const CartNavigator = () => {
  return (
    <Stack.Navigator screenOptions={headerStyles} >
      <Stack.Screen name="MyCart" component={CartScreen} options={{ title: 'My Cart', }} />
    </Stack.Navigator>
  )
}

export default CartNavigator

