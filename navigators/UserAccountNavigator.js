import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen'

const Stack = createStackNavigator();
const UserAccountNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="UserAccount" component={AccountScreen} />
      {/* <Stack.Screen name="Settings" component={SettingsNavigator} /> */}
    </Stack.Navigator>
  )
}

export default UserAccountNavigator
