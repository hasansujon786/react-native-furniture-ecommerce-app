import { StatusBar } from 'expo-status-bar';
import { Box, FlatList } from 'native-base';
import React from 'react';
// components
import ProductPreview from '../../components/ProductPreview'
import { PRODUCTS } from '../../data/dummy'

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

