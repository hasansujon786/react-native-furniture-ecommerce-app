import { Ionicons as Icon } from '@expo/vector-icons'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';
// navigators
import ShopNavigator from './ShopNavigator'
import FavoriteNavigator from './FavoriteNavigator'
import ProfileNavigator from './ProfileNavigator'
import AuthNavigator from './AuthNavigator'
// screens
import ProductScreen from '../screens/shop/ProductScreen'
import CartScreen from '../screens/CartScreen'

const Tab = createBottomTabNavigator();
const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color, focused }) => {
    let iconName

    switch (route.name) {
      case 'ShopTab':
        iconName = focused ? 'home' : 'home-outline'
        break
      case 'ProfileTab':
        iconName = focused ? 'person' : 'person-outline'
        break
      case 'CartTab':
        iconName = focused ? 'cart' : 'cart-outline'
        break
      case 'FavoriteTab':
        iconName = focused ? 'bookmark' : 'bookmark-outline'
        break
      default:
        iconName = 'reorder-two'
    }

    return <Icon name={iconName} size={22} color={color} />
  },
  tabBarActiveTintColor: 'black',
  tabBarInactiveTintColor: 'gray',
  headerShown: false,
  tabBarShowLabel: false
})

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="ShopTab" component={ShopNavigator} />
      <Tab.Screen name="FavoriteTab" component={FavoriteNavigator} />
      <Tab.Screen name="ProfileTab" component={ProfileNavigator} />
    </Tab.Navigator>
  )
}


const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: Colors.defaultBG }
        }}
      >
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={ProductScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'My Cart', headerShown: true, headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
