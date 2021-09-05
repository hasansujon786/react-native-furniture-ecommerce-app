import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'native-base'

import AccountScreen from '../screens/AccountScreen'
import Icon from '../components/Icon'
import HeaderButtons from '../components/HeaderButtonsWrapper'
import { headerStyles } from '../constants/globalStyles'

const Stack = createStackNavigator();
const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={headerStyles} >
      <Stack.Screen name="Profile" component={AccountScreen} options={{
        title: 'Profile',
        headerRight: () => <HeaderButtons>
          {({ navigation }) => (
            <IconButton onPress={() => navigation.navigate('Cart')} rounded='pill' variant='ghost' colorScheme='light'
              icon={<Icon name='settings-outline' size='sm' />}
            />
          )}
        </HeaderButtons>,
      }} />
      {/* <Stack.Screen name="Settings" component={SettingsNavigator} /> */}
    </Stack.Navigator>
  )
}

export default ProfileNavigator
