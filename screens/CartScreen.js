import { StatusBar } from 'expo-status-bar';
import { FlatList, Heading, Stack, HStack, Box } from 'native-base';
import React, { useEffect, useState } from 'react';

// import Colors from '../constants/Colors'
import { PRODUCTS } from '../data/dummy'
import ProductPreviewHStacked from '../components/ProductPreviewHStacked'
import CountController from '../components/CountController'
import IconButton from '../components/IconButton'
import FatButton from '../components/FatButton'
import FullpageSpinner from '../components/FullpageSpinner'
import Icon from '../components/Icon'

const BUTTON_CONTAINER_HEIGHT = 100

function CartScreen({ navigation }) {
  const [loading, setLoading] = useState(true)
  const [foundCartItems, setFoundCartItems] = useState([])
  useEffect(() => {
    setFoundCartItems(PRODUCTS)
    setLoading(false)
  }, [])

  return (
    <Box flex={1}>
      <FlatList
        contentContainerStyle={{ paddingBottom: BUTTON_CONTAINER_HEIGHT }}
        data={foundCartItems}
        renderItem={(data) => (
          <ProductPreviewHStacked
            height={120}
            onSelect={() => navigation.navigate('Product', { productId: data.item.id })}
            title={data.item.title}
            imageUrl={data.item.imgPreview}
            price={data.item.price}
            topRightElement={
              <Box>
                <IconButton
                  bg='transparent'
                  icon={<Icon color='muted.400' name='close-circle-outline' size='xs' />}
                />
              </Box>
            }
          >
            <CountController />
          </ProductPreviewHStacked>
        )}
      />
      <Stack bg='white' height={BUTTON_CONTAINER_HEIGHT} right={0} left={0} bottom={0} position='absolute' space={2}>
        {/* <HStack px={4} space={2} alignItems='center'> */}
        {/*   <Input flex={1} bg={'white'} size='sm' py={2} placeholder='Enter your promo code' /> */}
        {/*   <IconButton */}
        {/*     colorScheme='light' */}
        {/*     icon={<Icon color='white' name='chevron-forward-outline' size='md' />} */}
        {/*   /> */}
        {/* </HStack> */}

        <Stack space={2} px={3} pb={3}>
          <HStack justifyContent='space-between'>
            <Heading color='muted.400' size='md'>Total:</Heading>
            <Heading color='gray.700' size='md'>$234</Heading>
          </HStack>
          <FatButton primary>Check out</FatButton>
        </Stack>
      </Stack>
      {loading && <FullpageSpinner />}
      <StatusBar style="auto" />
    </Box>
  );
}

export default CartScreen

