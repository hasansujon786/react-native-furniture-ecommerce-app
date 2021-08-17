import React from 'react'
import { IconButton } from 'native-base'

export default ({ size = 'md', icon, ...props }) => {
  return (
    <IconButton
      variant='solid'
      bg='muted.100'
      colorScheme='dark'
      rounded={12}
      size={size}
      icon={icon}
      {...props}
    />
  )
}

