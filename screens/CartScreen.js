import { StatusBar } from 'expo-status-bar';
import { ScrollView, Input, Heading, Stack, HStack, Box } from 'native-base';
import React from 'react';

import Colors from '../constants/Colors'
import ProductPreviewHStacked from '../components/ProductPreviewHStacked'
import CountController from '../components/CountController'
import IconButton from '../components/IconButton'
import FatButton from '../components/FatButton'
import Icon from '../components/Icon'

function CartScreen({ navigation }) {
  return (
    <Box flex={1}>
      <ScrollView px={3}>
        <ProductPreviewHStacked
          mt={2}
          title='hello'
          imageUrl='https://m.media-amazon.com/images/I/71ICpn3ZyML._AC_UL320_.jpg'
          price={23}
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
        <ProductPreviewHStacked
          mt={2}
          title='hello'
          imageUrl='https://m.media-amazon.com/images/I/71ICpn3ZyML._AC_UL320_.jpg'
          price={23}
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
        <ProductPreviewHStacked
          mt={2}
          title='hello'
          imageUrl='https://m.media-amazon.com/images/I/71ICpn3ZyML._AC_UL320_.jpg'
          price={23}
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
        <ProductPreviewHStacked
          mt={2}
          title='hello'
          imageUrl='https://m.media-amazon.com/images/I/71ICpn3ZyML._AC_UL320_.jpg'
          price={23}
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
        <ProductPreviewHStacked
          mt={2}
          title='hello'
          imageUrl='https://m.media-amazon.com/images/I/71ICpn3ZyML._AC_UL320_.jpg'
          price={23}
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
        <ProductPreviewHStacked
          mt={2}
          title='hello'
          imageUrl='https://m.media-amazon.com/images/I/71ICpn3ZyML._AC_UL320_.jpg'
          price={23}
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
        <ProductPreviewHStacked
          mt={2}
          title='hello'
          imageUrl='https://m.media-amazon.com/images/I/71ICpn3ZyML._AC_UL320_.jpg'
          price={23}
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
        <ProductPreviewHStacked
          mt={2}
          title='hello'
          imageUrl='https://m.media-amazon.com/images/I/71ICpn3ZyML._AC_UL320_.jpg'
          price={23}
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
        <Box style={{ height: 200 }} />
      </ScrollView>
      <Stack right={0} left={0} bottom={0} position='absolute' space={2}>
        <HStack px={4} space={2} alignItems='center'>
          <Input flex={1} bg={'white'} size='sm' py={2} placeholder='Enter your promo code' />
          <IconButton
            colorScheme='light'
            icon={<Icon color='white' name='chevron-forward-outline' size='md' />}
          />
        </HStack>

        <Stack space={2} bg={Colors.defaultBG} px={3} pb={3}>
          <HStack justifyContent='space-between'>
            <Heading color='muted.400' size='md'>Total:</Heading>
            <Heading color='gray.700' size='md'>$234</Heading>
          </HStack>
          <Box height={12}>
            <FatButton flex={1} primary>Check out</FatButton>
          </Box>
        </Stack>
      </Stack>
      <StatusBar style="auto" />
    </Box>
  );
}

export default CartScreen

