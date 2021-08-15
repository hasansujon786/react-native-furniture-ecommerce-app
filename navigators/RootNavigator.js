import { Ionicons as Icon } from '@expo/vector-icons'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// navigators
import ShopNavigator from './ShopNavigator'
import UserAccountNavigator from './UserAccountNavigator'
import CartNavigator from './CartNavigator'

const Tab = createBottomTabNavigator();
const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color, focused }) => {
    let iconName

    switch (route.name) {
      case 'Shop':
        iconName = focused ? 'home' : 'home-outline'
        break
      case 'Account':
        iconName = focused ? 'person' : 'person-outline'
        break
      case 'Cart':
        iconName = focused ? 'cart' : 'cart-outline'
        break
      default:
        iconName = 'reorder-two'
    }

    return <Icon name={iconName} size={22} color={color} />
  },
  tabBarActiveTintColor: 'black',
  tabBarInactiveTintColor: 'gray',
  headerShown: false,
})

const RootNavigator = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={tabScreenOptions}>
        <Tab.Screen name="Shop" component={ShopNavigator} />
        <Tab.Screen name="Cart" component={CartNavigator} />
        <Tab.Screen name="Account" component={UserAccountNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
