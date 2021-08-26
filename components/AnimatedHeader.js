import React from 'react'
import { HStack, IconButton, Stack, Text } from 'native-base';
import { StyleSheet, Platform } from 'react-native'
import Animated, { useAnimatedStyle, interpolate, interpolateColor, Extrapolate } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

import FilterBar from './FilterBar'
import Icon from './Icon'
import Colors from '../constants/Colors'

export const HEADER_MIN_HEIGHT = 80
export const HEADER_MAX_HEIGHT = HEADER_MIN_HEIGHT + 70

const AnimatedHeader = ({ scrollY }) => {
  const navigation = useNavigation()

  const rHeaderStyles = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
      [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      Extrapolate.CLAMP
    )

    const backgroundColor = interpolateColor(
      scrollY.value,
      [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
      [Colors.defaultBG, '#ffffff']
    )

    const elevation = interpolate(
      scrollY.value,
      [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
      [0, 2],
      Extrapolate.CLAMP
    )

    return { height, backgroundColor, elevation }
  })

  const rChildStyles = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT) * 0.66],
      [1, 0],
      Extrapolate.CLAMP
    )

    return { opacity }
  })
  return (
    <Animated.View style={[styles.animatedHeaderContainer, rHeaderStyles]}>
      <HStack style={{ height: HEADER_MIN_HEIGHT }} px={2} pt={8} justifyContent='space-between' alignItems='flex-start'>
        <IconButton
          onPress={() => navigation.navigate('Search')}
          rounded='pill' variant='ghost' colorScheme='light'
          icon={<Icon name='search-outline' size='sm' />}
        />
        <Stack justifyContent='center' alignItems='center'>
          <Text mr={1} fontSize='xs' color='muted.400' fontWeight='bold'>MAKE HOME</Text>
          <Text fontWeight='bold'>BEAUTIFUL</Text>
        </Stack>
        <IconButton
          rounded='pill' variant='ghost' colorScheme='light'
          onPress={() => navigation.navigate('Cart')}
          icon={<Icon name='cart-outline' size='sm' />}
        />
      </HStack>

      <Animated.View style={[rChildStyles]}>
        <FilterBar />
      </Animated.View>
    </Animated.View>
  )
}

export default AnimatedHeader


const styles = StyleSheet.create(
  {
    animatedHeaderContainer: {
      position: 'absolute',
      top: (Platform.OS == 'ios') ? 20 : 0,
      left: 0,
      right: 0,
      zIndex: 100,
      overflow: 'hidden',
    },
  })
