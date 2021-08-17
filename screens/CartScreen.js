import { StatusBar } from 'expo-status-bar';
import { ScrollView, Input, Heading, Stack, HStack, Box, Text } from 'native-base';
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
      <ScrollView>
        <ProductPreviewHStacked
          mx={2} mt={2}
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
          mx={2} mt={2}
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
          mx={2} mt={2}
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
          mx={2} mt={2}
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
          mx={2} mt={2}
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
          mx={2} mt={2}
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
      </ScrollView>
      <Stack bg={Colors.defaultBG} py={3} right={0} left={0} bottom={0} position='absolute' space={3} px={3}>
        <HStack space={2}>
          <Box flex={1}>
            <Input size='sm' py={2} placeholder='Enter your promo code' />
          </Box>
          <Box>
            <IconButton
              bg='gray.800'
              icon={<Icon color='white' name='chevron-forward-outline' size='md' />}
            />
          </Box>
        </HStack>
        <HStack justifyContent='space-between'>
          <Heading color='muted.400' size='md'>Total:</Heading>
          <Heading color='gray.700' size='md'>$234</Heading>
        </HStack>
        <FatButton flex={1} primary>Check out</FatButton>
      </Stack>
      <StatusBar style="auto" />
    </Box>
  );
}

export default CartScreen

