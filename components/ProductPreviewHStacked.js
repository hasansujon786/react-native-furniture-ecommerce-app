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
            <TouchableOpacity style={{ flex: 1 }} onPress={onSelect}>
              <Heading color='gray.700' noOfLines={3} size='sm' fontWeight='normal'>
                Dolor minima illo maior Elit alias quod ex at mollitia asperiores? Similique facere eum sunt laborum
              </Heading>
            </TouchableOpacity>
            {topRightElement && topRightElement}
          </HStack>

          <HStack alignItems='center'>
            <Heading flex={1} color='gray.700' size='sm' fontWeight='bold'>
              ${price.toFixed(2)}
            </Heading>
            {children}
          </HStack>
        </Stack>
      </HStack>
    </Box>
  )
}

export default ProductPreviewHStacked
