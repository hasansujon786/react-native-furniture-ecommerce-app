import React from 'react'
import { IconButton } from 'native-base'

export default ({ size = 'md', colorScheme = 'dark', icon, ...props }) => {
  return (
    <IconButton
      variant='solid'
      bg={colorScheme == 'dark' ? 'muted.100' : 'gray.800'}
      colorScheme={colorScheme}
      rounded={12}
      size={size}
      icon={icon}
      {...props}
    />
  )
}

