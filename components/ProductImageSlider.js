import React, { useRef } from 'react'
import { Box, HStack } from 'native-base'
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import Animated, { useSharedValue, useAnimatedScrollHandler, interpolate, useAnimatedStyle } from 'react-native-reanimated'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const { width: SCREEN_WIDTH } = Dimensions.get('screen')
const SLIDER_IMAGE_WIDTH = SCREEN_WIDTH
const SLIDER_IMAGE_HEIGHT = 400
const DOT_SIZE = 8
const DOT_SPACE = 8
const DOT_INDECATOR_SIZE = DOT_SIZE + DOT_SPACE

const ImageView = ({ uri }) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri }} />
    </View>
  )
}

const ImageSlider = ({images}) => {
  const sliderFLRef = useRef(null)
  const scrollX = useSharedValue(0)
  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x
  })

  const rDotIndicatorStyles = useAnimatedStyle(() => {
    const translateX = interpolate(scrollX.value,
      [0, SLIDER_IMAGE_WIDTH],
      [0, DOT_INDECATOR_SIZE]
    )
    return {
      transform: [
        { translateX }
      ]
    }
  })

  return (
    <Box borderColor='muted.100' borderBottomWidth={1} style={styles.sliderContainer}>
      <AnimatedFlatList
        ref={(node) => (sliderFLRef.current = node)}
        horizontal
        onScroll={handleScroll}
        scrollEventThrottle={16}
        data={images}
        keyExtractor={(_, index) => index.toString()}
        renderItem={(data) => <ImageView uri={data.item} />}
        snapToInterval={SLIDER_IMAGE_WIDTH}
        decelerationRate='fast'
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
      <HStack position='absolute' bottom={3}>
        {images.map((_, index) =>
          <View key={index} style={styles.dot}></View>
        )}
        <Animated.View style={[styles.dotIndecator, rDotIndicatorStyles]} />
      </HStack>
    </Box>
  )
}

export default ImageSlider

const styles = StyleSheet.create({
  sliderContainer: {
    width: SLIDER_IMAGE_WIDTH,
    height: SLIDER_IMAGE_HEIGHT,
    overflow: 'hidden',
    alignItems: 'center',
  },
  imageContainer: {
    width: SLIDER_IMAGE_WIDTH,
    height: SLIDER_IMAGE_HEIGHT
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    marginRight: DOT_SPACE,
    backgroundColor: '#333',
  },
  dotIndecator: {
    width: DOT_INDECATOR_SIZE,
    height: DOT_INDECATOR_SIZE,
    borderRadius: DOT_INDECATOR_SIZE,
    borderColor: '#333',
    borderWidth: 2,
    position: 'absolute',
    left: -DOT_SIZE / 2,
    top: -DOT_SIZE / 2
  },
})

