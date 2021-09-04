import React from 'react'
import { Text, HStack, } from 'native-base'

// componets
import Icon from './Icon'

const Ratings = ({ children, size = 2 }) => {
  return (
    <HStack space={1} alignItems='center'>
      <Icon size={size} color='orange.300' name='star' />
      <Icon size={size} color='orange.300' name='star' />
      <Icon size={size} color='orange.300' name='star' />
      <Icon size={size} color='orange.300' name='star' />
      <Icon size={size} color='orange.300' name='star-outline' />
      <Text color='muted.400' ml={1} fontSize={10}>{children}</Text>
    </HStack>
  )
}

export default Ratings
