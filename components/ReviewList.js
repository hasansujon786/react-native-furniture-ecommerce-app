import React from 'react'
import { HStack, Text, Stack } from 'native-base'
import Ratings from './Ratings'

const Review = () => {
  return (
    <Stack space={2}>
      <HStack justifyContent='space-between' alignItems='flex-end'>
        <Text color='muted.400' fontSize={12}>Hasan M. - 23/02/2021</Text>
        <Ratings></Ratings>
      </HStack>

      <Text lineHeight='18px' color='muted.600' fontSize='sm'>
        Lorem sint tenetur ducimus ducimus expedita. Rerum pariatur unde magnam temporibus vel Velit totam earum explicabo commodi blanditiis. Eligendi temporibus.
      </Text>
    </Stack>
  )
}

const ReviewList = (props) => {
  return (
    <Stack space={6} {...props}>
      <Review></Review>
      <Review></Review>
      <Review></Review>
    </Stack>
  )
}

export default ReviewList
