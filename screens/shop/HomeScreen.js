import { StatusBar } from 'expo-status-bar';
import { Box, FlatList } from 'native-base';
import React from 'react';
// components
import ProductPreview from '../../components/ProductPreview'
const PRODUCTS = [
  {
    id: '00',
    title: 'Storage Drawer and Fixed Shelf',
    imgPreview: 'https://m.media-amazon.com/images/I/71ICpn3ZyML._AC_UL320_.jpg',
    longTitle: 'Signature Design by Ashley Tyler Creek Rustic End Table with Storage Drawer and Fixed Shelf, Brown & Black',
    price: 182.99,
    discount: 0,
    quantity: 10,
    isAvalable: true
  },
  {
    id: '01',
    title: 'Storage Drawer and Fixed Shelf',
    imgPreview: 'https://m.media-amazon.com/images/I/71ICpn3ZyML._AC_UL320_.jpg',
    longTitle: 'Signature Design by Ashley Tyler Creek Rustic End Table with Storage Drawer and Fixed Shelf, Brown & Black',
    price: 182.99,
    discount: 0,
    quantity: 10,
    isAvalable: true
  },
  {
    id: '01',
    title: 'Storage Drawer and Fixed Shelf',
    imgPreview: 'https://m.media-amazon.com/images/I/71ICpn3ZyML._AC_UL320_.jpg',
    longTitle: 'Signature Design by Ashley Tyler Creek Rustic End Table with Storage Drawer and Fixed Shelf, Brown & Black',
    price: 182.99,
    discount: 0,
    quantity: 10,
    isAvalable: true
  },
]

export default function HomeScreen({ navigation }) {
  return (
    <Box >
      <FlatList
        pt={4}
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

