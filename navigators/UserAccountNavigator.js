import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen'
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const UserAccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: Colors.defaultBG }
      }}
    >
      <Stack.Screen name="UserAccount" component={AccountScreen} />
      {/* <Stack.Screen name="Settings" component={SettingsNavigator} /> */}
    </Stack.Navigator>
  )
}

export default UserAccountNavigator
