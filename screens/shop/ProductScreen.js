import { StatusBar } from 'expo-status-bar'
import React, { useMemo } from 'react'
import { Box, HStack, ScrollView, Text, Heading, Stack, Link } from 'native-base'
import { PRODUCTS } from '../../data/dummy'

import Icon from '../../components/Icon'
import IconButton from '../../components/IconButton'
import FatButton from '../../components/FatButton'
import ProductImageSlider from '../../components/ProductImageSlider'
import Ratings from '../../components/Ratings'
import BottomActionBar from '../../components/BottomActionBar'
import ReviewList from '../../components/ReviewList'
import Colors from '../../constants/Colors'

const ProductScreen = ({ navigation, route }) => {
  const foundProduct = PRODUCTS.find(pod => pod.id == route.params.productId)

  const foundImages = useMemo(() => {
    return [
      'https://images.unsplash.com/photo-1604176424472-17cd740f74e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      'https://images.unsplash.com/photo-1575032617751-6ddec2089882?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      'https://images.unsplash.com/photo-1548863227-3af567fc3b27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
      'https://images.unsplash.com/photo-1506094543314-3747d5123bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
    ]
  }, [])


  return (
    <Box flex={1}>
      <ScrollView>
        <ProductImageSlider images={foundImages} />
        <Stack space={1} px={3} py={4} bg='white'>
          <HStack justifyContent='space-between' alignItems='center'>
            <Heading color='gray.700' size='lg'>$ {foundProduct.price}</Heading>
            <HStack space={2}>
              <IconButton
                variant='ghost'
                size='sm'
                icon={<Icon size='sm' name='share-social-outline' />}
              />
            </HStack>
          </HStack>
          <Box>
            <Text fontSize='md' lineHeight='24px' color='gray.600'>{foundProduct.title}</Text>
          </Box>
          <HStack mt={2}>
            <Ratings size={3}>(4.3)</Ratings>
          </HStack>
        </Stack>

        <Stack bg='white' mt={2} px={3} py={5}>
          <HStack pb={3} borderColor={Colors.gray50} borderBottomWidth={1} mb={4} justifyContent='space-between' alignItems='center'>
            <Heading size='xs' fontWeight='normal' numberOfLines={1} color='muted.400'>Ratings & Reviews (234)</Heading>
            <Link
              _text={{ fontSize: 'sm', color: 'orange.500' }}
              onPress={() => navigation.navigate('Review')}
            >View All</Link>
          </HStack>

          <ReviewList />
        </Stack>

        <Stack bg='white' mt={2} px={3} py={5}>
          <HStack pb={3} borderColor={Colors.gray50} borderBottomWidth={1} mb={4} justifyContent='space-between' alignItems='center'>
            <Heading size='xs' fontWeight='normal' numberOfLines={1} color='muted.400'>Specifications</Heading>
            <Link
              _text={{ fontSize: 'sm', color: 'orange.500' }}
              onPress={() => navigation.navigate('Review')}
            >View All</Link>
          </HStack>

          <Text lineHeight='22px' color='muted.600' fontSize='md'>
            Lorem sint tenetur ducimus ducimus expedita. Rerum pariatur unde magnam temporibus vel Velit totam earum explicabo commodi blanditiis. Eligendi temporibus.
          </Text>
        </Stack>

        <Box height={24} />
      </ScrollView>

      <BottomActionBar >
        <IconButton
          size='lg'
          icon={<Icon name='bookmark-outline' size='md' />}
        />
        <FatButton flex={1} primary>Add to cart</FatButton>
      </BottomActionBar>
      <StatusBar style='auto' />
    </Box>
  )
}

export default ProductScreen
