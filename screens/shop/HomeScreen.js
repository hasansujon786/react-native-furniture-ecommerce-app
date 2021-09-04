import { StatusBar } from 'expo-status-bar';
import { Box } from 'native-base';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated'
import React from 'react';
import { Dimensions } from 'react-native';
import { PRODUCTS } from '../../data/dummy'
// components
import ProductPreview from '../../components/ProductPreview'
import AnimatedHeader, { HEADER_MAX_HEIGHT } from '../../components/AnimatedHeader'

const { width: SCREEN_WIDTH } = Dimensions.get('screen')
const PROD_CARD_IMAGE_SIZE = (SCREEN_WIDTH - 30) / 2

export default function HomeScreen({ navigation }) {
  const scrollYSharedValue = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollYSharedValue.value = event.contentOffset.y
  })

  return (
    <Box flex={1}>
      <AnimatedHeader scrollY={scrollYSharedValue}></AnimatedHeader>

      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT, paddingBottom: 10 }}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
      >

        {/* Product Grid */}
        <Box flexDirection='row' flexWrap='wrap' style={{ paddingHorizontal: 9, marginTop: 12 }}>
          {PRODUCTS.map(prod => (
            <Box
              key={prod.id}
              style={{
                marginBottom: 6,
                paddingHorizontal: 3,
                width: '50%',
              }}
            >
              <ProductPreview
                imageSize={PROD_CARD_IMAGE_SIZE}
                onSelect={() => navigation.navigate('Product', { productId: prod.id })}
                imageUrl={prod.imgPreview} title={prod.title} price={prod.price}
              />
            </Box>
          ))}
        </Box>
      </Animated.ScrollView>

      <StatusBar style="auto" />
    </Box>
  )
}

