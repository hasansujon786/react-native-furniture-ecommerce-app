import { StatusBar } from 'expo-status-bar';
import { Box, FlatList, HStack, IconButton, Stack, Text } from 'native-base';
import React from 'react';
// components
import ProductPreview from '../../components/ProductPreview'
import Icon from '../../components/Icon'
import FilterBar from '../../components/FilterBar'
import { PRODUCTS } from '../../data/dummy'

export default function HomeScreen({ navigation }) {
  return (
    <Box flex={1}>
      <HStack px={2} mt={5} justifyContent='space-between' alignItems='center'>
        <IconButton rounded='pill' variant='ghost' colorScheme='light'
          icon={<Icon name='search-outline' size='sm' />}
        />
        <Stack justifyContent='center' alignItems='center'>
          <Text mr={1} fontSize='xs' color='muted.400' fontWeight='bold'>MAKE HOME</Text>
          <Text fontWeight='bold'>BEAUTIFUL</Text>
        </Stack>
        <IconButton rounded='pill' variant='ghost' colorScheme='light'
          icon={<Icon name='cart-outline' size='sm' />}
        />
      </HStack>

      <FilterBar />

      <FlatList
        pt={2}
        contentContainerStyle={{ paddingHorizontal: 6 }}
        data={PRODUCTS}
        numColumns={2}
        renderItem={(data) => (
          <Box
            style={{
              marginBottom: 12,
              paddingHorizontal: 6,
              width: '50%',
            }}
          >
            <ProductPreview
              onSelect={() => navigation.navigate('Product', { productId: data.item.id })}
              imageUrl={data.item.imgPreview} title={data.item.title} price={data.item.price}
            />
          </Box>
        )}
      />

      <StatusBar style="auto" />
    </Box>
  );
}

