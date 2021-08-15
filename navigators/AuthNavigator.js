import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen'

const Stack = createStackNavigator();
const AuthNavigator= () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      {/* <Stack.Screen name="Settings" component={SettingsNavigator} /> */}
    </Stack.Navigator>
  )
}

export default AuthNavigator

