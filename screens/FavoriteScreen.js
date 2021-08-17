import React from 'react'
import { Box, Button } from 'native-base'

const FavoriteScreen = ({ navigation }) => {
  return (
    <Box>
      FavoriteScreen
      <Button onPress={() => navigation.navigate('Auth')}>Sign In</Button>
      <Button onPress={() => navigation.navigate('Cart')}>Go to Cart</Button>
    </Box>
  )
}

export default FavoriteScreen
