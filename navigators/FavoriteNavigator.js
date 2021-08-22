import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'native-base'

import FavoriteScreen from '../screens/FavoriteScreen'
import Colors from '../constants/Colors';
import Icon from '../components/Icon'
import HeaderButtons from '../components/HeaderButtonsWrapper'


const Stack = createStackNavigator();
const FavoriteNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: Colors.defaultBG },
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen name="Favorite" component={FavoriteScreen}
        options={{
          headerLeft: () => <HeaderButtons>
            {() => (
              <IconButton rounded='pill' variant='ghost' colorScheme='light'
                icon={<Icon name='search-outline' size='sm' />}
              />
            )}
          </HeaderButtons>,
          headerRight: () => <HeaderButtons>
            {({ navigation }) => (
              <IconButton onPress={() => navigation.navigate('Cart')} rounded='pill' variant='ghost' colorScheme='light'
                icon={<Icon name='cart-outline' size='sm' />}
              />
            )}
          </HeaderButtons>,
        }}
      />
    </Stack.Navigator>
  )
}

export default FavoriteNavigator
