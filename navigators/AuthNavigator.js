import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/auth/SignInScreen'
import SignUpScreen from '../screens/auth/SignUpScreen'
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: Colors.defaultBG }
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: '', headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: '', headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

