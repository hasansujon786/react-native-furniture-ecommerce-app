import React from 'react'
import { HStack } from 'native-base'

const BottomActionBar = ({ children }) => {
  return (
    <HStack space={3} shadow={2} p={3} bg='white' right={0} left={0} bottom={0} position='absolute' alignItems='center'>
      {children}
    </HStack>
  )
}

export default BottomActionBar
