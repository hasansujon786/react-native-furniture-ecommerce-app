import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Box, HStack, IconButton, ScrollView, Text, Heading, Image, Stack } from 'native-base'
import { PRODUCTS } from '../../data/dummy'
import { Dimensions } from 'react-native'

import Icon from '../../components/Icon'
import IconButtonM from '../../components/IconButton'
import FatButton from '../../components/FatButton'
import CountController from '../../components/CountController'
import Colors from '../../constants/Colors'

const { width } = Dimensions.get('screen')

const ProductScreen = ({ navigation, route }) => {
  const foundProduct = PRODUCTS.find(pod => pod.id == route.params.productId)

  return (
    <Box flex={1}>
      <ScrollView>
        <HStack>
          <Box flex={1} alignItems='flex-end'>
            <Stack width={12} mt={12} position='relative' right={-20} zIndex={1}>
              <IconButton
                rounded={12}
                bg='white'
                colorScheme='dark'
                variant='solid'
                onPress={() => navigation.goBack()}
                shadow={0}
                icon={<Icon name='chevron-back-outline' mr={1} />}
              />

              <Stack mt={8} space={1} bg='white' shadow={0} rounded='pill'>
                <IconButton
                  colorScheme='light'
                  rounded='pill'
                  icon={<Icon name='ellipse-outline' />}
                />
                <IconButton
                  colorScheme='light'
                  rounded='pill'
                  icon={<Icon name='ellipse-outline' />}
                />
                <IconButton
                  colorScheme='light'
                  rounded='pill'
                  icon={<Icon name='ellipse-outline' />}
                />
              </Stack>
            </Stack>
          </Box>
          <Box borderWidth={1} borderColor='muted.100' height={400} width={width * 0.90} bg='white' roundedBottomLeft={40} alignItems='flex-end'>
            <Image width='100%' height='100%' resizeMode='contain' alt={foundProduct.title} source={{ uri: foundProduct.imgPreview }} />
          </Box>
        </HStack>

        <Stack space={2} px={3} mt={3}>
          <Box>
            <Heading lineHeight='28px' fontWeight='normal' size='md' color='gray.700'>{foundProduct.title}</Heading>
          </Box>
          <HStack >
            <Heading flex={1} color='gray.700' size='xl'>$ {foundProduct.price}</Heading>
            <CountController />
          </HStack>
        </Stack>

        <Stack px={3} mt={3}>
          <Text fontSize='md' lineHeight='24px' color='gray.500'>Consectetur consequatur quo voluptates adipisci ipsa. Dolorem quaerat veritatis deserunt nihil aliquam Aspernatur dolorum ad autem ipsum iusto officiis Omnis.</Text>
          <Text fontSize='md' lineHeight='24px' color='gray.500'>Consectetur consequatur quo voluptates adipisci ipsa. Dolorem quaerat veritatis deserunt nihil aliquam Aspernatur dolorum ad autem ipsum iusto officiis Omnis.</Text>
          <Text fontSize='md' lineHeight='24px' color='gray.500'>Consectetur consequatur quo voluptates adipisci ipsa. Dolorem quaerat veritatis deserunt nihil aliquam Aspernatur dolorum ad autem ipsum iusto officiis Omnis.</Text>
          <Text fontSize='md' lineHeight='24px' color='gray.500'>Consectetur consequatur quo voluptates adipisci ipsa. Dolorem quaerat veritatis deserunt nihil aliquam Aspernatur dolorum ad autem ipsum iusto officiis Omnis.</Text>
          <Text fontSize='md' lineHeight='24px' color='gray.500'>Consectetur consequatur quo voluptates adipisci ipsa. Dolorem quaerat veritatis deserunt nihil aliquam Aspernatur dolorum ad autem ipsum iusto officiis Omnis.</Text>
          <Text fontSize='md' lineHeight='24px' color='gray.500'>Consectetur consequatur quo voluptates adipisci ipsa. Dolorem quaerat veritatis deserunt nihil aliquam Aspernatur dolorum ad autem ipsum iusto officiis Omnis.</Text>
        </Stack>
        <Box height={24} />
      </ScrollView>

      <HStack space={3} shadow={3} p={3} bg={Colors.defaultBG} right={0} left={0} bottom={0} position='absolute'>
        <IconButtonM
          size='lg'
          icon={<Icon name='bookmark-outline' size='md' />}
        />
        <FatButton flex={1} primary>Add to cart</FatButton>
      </HStack>
      <StatusBar style='auto' />
    </Box>
  )
}

export default ProductScreen
