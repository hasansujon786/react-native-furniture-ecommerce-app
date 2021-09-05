import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen'

import Colors from '../constants/Colors';
import { headerStyle } from '../constants/globalStyles';

const Stack = createStackNavigator();
const CartNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: Colors.defaultBG },
        headerTitleAlign: 'center', headerStyle: headerStyle
      }}
    >
      <Stack.Screen name="MyCart" component={CartScreen} options={{ title: 'My Cart', }} />
    </Stack.Navigator>
  )
}

export default CartNavigator

