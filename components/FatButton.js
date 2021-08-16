import { Button } from 'native-base'
import React from 'react'

const FatButton = ({ children, primary, ...props }) => {
  return <Button
    colorScheme='gray'
    variant={primary ? 'solid' : 'ghost'}
    bg={primary ? 'gray.800' : 'transparent'}
    size='lg'
    rounded={10}
    {...props}
  >
    {children}
  </Button>
}

export default FatButton
