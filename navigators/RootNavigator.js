import { Ionicons as Icon } from '@expo/vector-icons'
import React from 'react';
import { NavigationContainer, DefaultTheme, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { headerStyles } from '../constants/globalStyles'
import Colors from '../constants/Colors'
// navigators
import ShopNavigator from './ShopNavigator'
import FavoriteNavigator from './FavoriteNavigator'
import ProfileNavigator from './ProfileNavigator'
import AuthNavigator from './AuthNavigator'
import CartNavigator from './CartNavigator'
// screens
import ProductScreen from '../screens/shop/ProductScreen'
import ReviewScreen from '../screens/ReviewScreen'

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


const navTheme = DefaultTheme;
navTheme.colors.background = Colors.defaultBG

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator >
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={CartNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={ProductScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Review" component={ReviewScreen} options={{ ...headerStyles, title: 'Ragitng & Review' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
