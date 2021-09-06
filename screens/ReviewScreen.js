import React from 'react'
import { Box } from 'native-base'
import { ScrollView } from 'react-native'
import ReviewCard from '../components/ReviewCard'

const ReviewScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20}}>
      <Box px={3}>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
      </Box>
    </ScrollView>
  )
}

export default ReviewScreen
