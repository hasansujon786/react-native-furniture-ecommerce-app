import { StatusBar } from 'expo-status-bar';
import { Box, FlatList, } from 'native-base';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated'
import React from 'react';
import { PRODUCTS } from '../../data/dummy'
// components
import ProductPreview from '../../components/ProductPreview'
import AnimatedHeader, { HEADER_MAX_HEIGHT } from '../../components/AnimatedHeader'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

export default function HomeScreen({ navigation }) {
  const scrollYSharedValue = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollYSharedValue.value = event.contentOffset.y
  })

  return (
    <Box flex={1}>
      <AnimatedHeader scrollY={scrollYSharedValue} ></AnimatedHeader>

      <AnimatedFlatList
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT + 12, paddingHorizontal: 6 }}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
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
  )
}

