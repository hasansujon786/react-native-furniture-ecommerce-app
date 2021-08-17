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
        <Box bg='white' height={height} rounded={10} overflow='hidden'>
          <Image
            source={{
              uri: imageUrl,
            }}
            resizeMode='contain'
            alt={title}
            width='100%'
            height='100%'
          />
          <Box width={12} position='absolute' bottom={2} right={2}>
            <IconButton
              bg='#00000020'
              _pressed={{ bg: '#00000040' }}
              icon={<Icon name='cart-outline' color='white' />}
            />
          </Box>
        </Box>
        <VStack mt={1}>
          <Heading size='sm' numberOfLines={2} color='muted.400'>{title}</Heading>
          <Heading size='sm'>$ {price}</Heading>
        </VStack>
      </Box>
    </TouchableOpacity>
  )
}

export default ProductPreview
