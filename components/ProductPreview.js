import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Box, Image, Heading, VStack, } from 'native-base'
// componets
import Ratings from './Ratings'

const ProductPreview = ({ imageUrl, title, price, onSelect, imageSize = 100, ...props }) => {
  return (
    <TouchableOpacity useForeground onPress={onSelect}>
      <Box overflow='hidden' rounded={10} borderColor='muted.100' bg='white' borderWidth={1} {...props}>
        <Box height={imageSize - 2} width={imageSize - 2}>
          <Image
            source={{ uri: imageUrl }}
            resizeMode='contain'
            alt={title}
            width='100%'
            height='100%'
          />
        </Box>

        <VStack space={1} px={2} my={2}>
          <Heading fontWeight='normal' size='xs' numberOfLines={2} color='gray.500'>{title}</Heading>
          <Heading mt={1} fontWeight='bold' size='sm' color='gray.700'>$ {price}</Heading>
          <Ratings>(234)</Ratings>
        </VStack>
      </Box>
    </TouchableOpacity>
  )
}

export default ProductPreview
