import React from 'react'
import { HStack, Text } from 'native-base'

import IconButton from './IconButton'
import Icon from './Icon'

const CountController = () => {
  return (
    <HStack alignItems='center' flexBasis={120} justifyContent='space-between'>
      <IconButton
        icon={<Icon name='remove-outline' size='xs' />}
      />
      <Text fontSize='lg'>1</Text>
      <IconButton
        icon={<Icon name='add-outline' size='xs' />}
      />
    </HStack>
  )
}

export default CountController
