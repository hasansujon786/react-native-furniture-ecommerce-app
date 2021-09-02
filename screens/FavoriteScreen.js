import { StatusBar } from 'expo-status-bar';
import { FlatList, Stack, Box } from 'native-base';
import React, { useEffect, useState } from 'react';

import { PRODUCTS } from '../data/dummy'
import ProductPreviewHStacked from '../components/ProductPreviewHStacked'
import IconButton from '../components/IconButton'
import FatButton from '../components/FatButton'
import Icon from '../components/Icon'
import FullpageSpinner from '../components/FullpageSpinner'

const BUTTON_CONTAINER_HEIGHT = 66

const FavoriteScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const [foundFavoriteItems, setFoundFavoriteItems] = useState([])
  useEffect(() => {
    setFoundFavoriteItems(PRODUCTS)
    setLoading(false)
  }, [])

  return (
    <Box flex={1}>
      <FlatList
        contentContainerStyle={{ paddingBottom: BUTTON_CONTAINER_HEIGHT }}
        data={foundFavoriteItems}
        renderItem={(data) => (
          <ProductPreviewHStacked
            onSelect={() => navigation.navigate('Product', { productId: data.item.id })}
            renderChildrenReversed
            title={data.item.title}
            imageUrl={data.item.imgPreview}
            price={data.item.price}
            topRightElement={
              <Box >
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
                icon={<Icon color='muted.700' name='cart' size='sm' />}
              />
            </Box>
          </ProductPreviewHStacked>
        )}
      />

      <Stack style={{ height: BUTTON_CONTAINER_HEIGHT }}
        justifyContent='flex-start'
        bg='white' right={0} left={0} bottom={0} position='absolute' space={2} px={3}
      >
        <FatButton primary>Add to my cart</FatButton>
      </Stack>
      {loading && <FullpageSpinner />}
      <StatusBar style="auto" />
    </Box>
  )
}

export default FavoriteScreen
