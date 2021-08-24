import { Button } from 'native-base'
import React from 'react'

const FatButton = ({ children, primary, ...props }) => {
  return <Button
    _text={{ textTransform: 'uppercase', fontWeight: 'bold' }}
    colorScheme='gray'
    variant={primary ? 'solid' : 'ghost'}
    bg={primary ? 'gray.800' : 'transparent'}
    size='md'
    py={4}
    rounded={10}
    {...props}
  >
    {children}
  </Button>
}

export default FatButton
