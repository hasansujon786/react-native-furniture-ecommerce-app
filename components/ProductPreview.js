import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Box, Image, Heading, VStack, } from 'native-base'
// componets
import IconButton from './IconButton'
import Icon from './Icon'

const ProductPreview = ({ imageUrl, title, price, onSelect, height = 210, width = '100%', ...props }) => {
  return (
    <TouchableOpacity useForeground onPress={onSelect}>
      <Box width={width} {...props}>
        <Box borderColor='muted.100' bg='white' borderWidth={1} p={4} height={height} rounded={10} overflow='hidden'>
          <Image
            source={{
              uri: imageUrl,
            }}
            resizeMode='contain'
            alt={title}
            width='100%'
            height='100%'
          />
          <Box width={10} position='absolute' bottom={2} right={2}>
            <IconButton
              bg='#00000020'
              _pressed={{ bg: '#00000030' }}
              icon={<Icon size='sm' name='bookmark' color='white' />}
            />
          </Box>
        </Box>
        <VStack mt={1}>
          <Heading fontWeight='normal' size='xs' numberOfLines={2} color='gray.500'>{title}</Heading>
          <Heading fontWeight='bold' size='sm' color='gray.700'>$ {price}</Heading>
        </VStack>
      </Box>
    </TouchableOpacity>
  )
}

export default ProductPreview
