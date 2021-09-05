import React from 'react'
import { IconButton } from 'native-base'
const variants = {
  solid: {
    backgroundColor: 'gray.100'
  }
}

export default ({ size = 'md', variant = 'solid', colorScheme = 'light', icon, ...props }) => {
  return (
    <IconButton
      variant={variant}
      bg={variants[variant] && variants[variant]}
      colorScheme={colorScheme}
      rounded={12}
      size={size}
      icon={icon}
      {...props}
    />
  )
}

