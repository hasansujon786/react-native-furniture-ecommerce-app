import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Box, HStack, ScrollView, Text, Heading, Image, Stack } from 'native-base'
import { PRODUCTS } from '../../data/dummy'
import { Dimensions } from 'react-native'

import Icon from '../../components/Icon'
import IconButton from '../../components/IconButton'
import FatButton from '../../components/FatButton'
import Colors from '../../constants/Colors'

const { width } = Dimensions.get('screen')

const ProductScreen = ({ navigation, route }) => {
  const foundProduct = PRODUCTS.find(pod => pod.id == route.params.productId)

  return (
    <Box flex={1}>
      <ScrollView>
        <HStack>
          <Box flex={1} alignItems='flex-end'>
            <Stack width={12} mt={16} position='relative' right={-20} zIndex={1}>
              <Box>
                <IconButton
                  onPress={() => navigation.goBack()}
                  shadow={0}
                  icon={<Icon name='arrow-back-outline' />}
                />
              </Box>
              {/* <Box mt={8} > */}
              {/*   <Stack space={1} bg='muted.100' shadow={0} rounded='pill'> */}
              {/*     <IconButton */}
              {/*       rounded='pill' */}
              {/*       icon={<Icon name='ellipse-outline' />} */}
              {/*     /> */}
              {/*     <IconButton */}
              {/*       rounded='pill' */}
              {/*       icon={<Icon name='ellipse-outline' />} */}
              {/*     /> */}
              {/*     <IconButton */}
              {/*       rounded='pill' */}
              {/*       icon={<Icon name='ellipse-outline' />} */}
              {/*     /> */}

              {/*   </Stack> */}
              {/* </Box> */}
            </Stack>
          </Box>
          <Box borderWidth={1} borderColor='muted.100' height={400} width={width * 0.90} bg='white' roundedBottomLeft={40} alignItems='flex-end'>
            <Image width='100%' height='100%' resizeMode='contain' alt={foundProduct.title} source={{ uri: foundProduct.imgPreview }} />
          </Box>
        </HStack>

        <Stack px={3} mt={1}>
          <Heading color='gray.600' size='md'>Adipisicing dolor itaque deleniti qui accusamus Optio nulla amet culpa provident nihil Facere</Heading>
          <HStack >
            <Box flex={1}>
              <Heading color='gray.700' size='2xl'>${foundProduct.price}</Heading>
            </Box>
            <HStack alignItems='center' flexBasis={120} justifyContent='space-between'>
              <IconButton
                icon={<Icon name='remove-outline' size='xs' />}
              />
              <Text fontSize='lg'>1</Text>
              <IconButton
                icon={<Icon name='add-outline' size='xs' />}
              />
            </HStack>
          </HStack>
        </Stack>

        <Stack px={3} mt={2}>
          <Text color='gray.600'>Consectetur consequatur quo voluptates adipisci ipsa. Dolorem quaerat veritatis deserunt nihil aliquam Aspernatur dolorum ad autem ipsum iusto officiis Omnis.</Text>
          <Text color='gray.600'>Consectetur consequatur quo voluptates adipisci ipsa. Dolorem quaerat veritatis deserunt nihil aliquam Aspernatur dolorum ad autem ipsum iusto officiis Omnis.</Text>
          <Text color='gray.600'>Consectetur consequatur quo voluptates adipisci ipsa. Dolorem quaerat veritatis deserunt nihil aliquam Aspernatur dolorum ad autem ipsum iusto officiis Omnis.</Text>
          <Text color='gray.600'>Consectetur consequatur quo voluptates adipisci ipsa. Dolorem quaerat veritatis deserunt nihil aliquam Aspernatur dolorum ad autem ipsum iusto officiis Omnis.</Text>
          <Text color='gray.600'>Consectetur consequatur quo voluptates adipisci ipsa. Dolorem quaerat veritatis deserunt nihil aliquam Aspernatur dolorum ad autem ipsum iusto officiis Omnis.</Text>
          <Text color='gray.600'>Consectetur consequatur quo voluptates adipisci ipsa. Dolorem quaerat veritatis deserunt nihil aliquam Aspernatur dolorum ad autem ipsum iusto officiis Omnis.</Text>
        </Stack>
        <Box height={24} />
      </ScrollView>

      <HStack bg={Colors.defaultBG} py={3} right={0} left={0} bottom={0} position='absolute' space={3} px={3}>
        <IconButton
          icon={<Icon name='bookmark-outline' size='md' />}
        />
        <FatButton flex={1} primary>Add to cart</FatButton>
      </HStack>
      <StatusBar style='auto' />
    </Box>
  )
}

export default ProductScreen
