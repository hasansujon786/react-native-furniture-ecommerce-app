import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Box, Heading, HStack, Image, Stack } from 'native-base'

function ProductPreviewHStacked({ title, imageUrl, height = 100, price, onSelect, children, topRightElement, ...props }) {
  return (
    <Box height={height} {...props}>
      <HStack space={2}>
        <TouchableOpacity onPress={onSelect}>
          <Box
            borderColor='muted.100'
            borderWidth={1}
            bg='white'
            rounded='lg'
            overflow='hidden'
            height={height}
            width={height}
          >
            <Image height='100%' width='100%' resizeMode='contain' alt={title} source={{ uri: imageUrl }} />
          </Box>
        </TouchableOpacity>


        <Stack justifyContent='space-between' flex={1} >
          <HStack justifyContent='space-between'>
            <Box flex={1} mt={1}>
              <Heading fontWeight='normal' size='xs' numberOfLines={2} color='gray.500'>{title}</Heading>
            </Box>
            {topRightElement && topRightElement}
          </HStack>

          <HStack alignItems='center'>
            <Heading flex={1} fontWeight='bold' size='sm' color='gray.700'>$ {price.toFixed(2)}</Heading>
            {children}
          </HStack>
        </Stack>
      </HStack>
    </Box>
  )
}

export default ProductPreviewHStacked
