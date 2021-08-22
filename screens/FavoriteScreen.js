import { StatusBar } from 'expo-status-bar';
import { FlatList, Heading, Stack, HStack, Box } from 'native-base';
import React, { useEffect, useState } from 'react';

import Colors from '../constants/Colors'
import { PRODUCTS } from '../data/dummy'
import ProductPreviewHStacked from '../components/ProductPreviewHStacked'
import IconButton from '../components/IconButton'
import FatButton from '../components/FatButton'
import Icon from '../components/Icon'

const FavoriteScreen = ({ navigation }) => {
  const [foundFavoriteItems, setFoundFavoriteItems] = useState([])
  useEffect(() => {
    setFoundFavoriteItems(PRODUCTS)
  }, [])

  return (
    <Box flex={1}>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 100 }}
        data={foundFavoriteItems}
        renderItem={(data) => (
          <ProductPreviewHStacked
            mt={3}
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
            <Box>
              <IconButton
                bg='transparent'
                icon={<Icon color='muted.800' name='cart' size='sm' />}
              />
            </Box>
          </ProductPreviewHStacked>
        )}
      />

      <Stack right={0} left={0} bottom={0} position='absolute' space={2} px={3} pb={3} bg={Colors.defaultBG}>
        <FatButton flex={1} primary>Add to my cart</FatButton>
        {/* <FatButton onPress={() => navigation.navigate('Cart')}>Go to Cart</FatButton> */}
      </Stack>
      <StatusBar style="auto" />
    </Box>
  )
}

export default FavoriteScreen
