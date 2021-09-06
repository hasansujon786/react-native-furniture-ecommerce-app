import React from 'react'
import Ratings from '../components/Ratings'
import { Box, Text, Avatar, Heading, Stack, HStack } from 'native-base'

const ReviewCard = () => {
  return (
    <Box alignItems='center' mt={3}>
      <Avatar zIndex={1} mb={-6}>HM</Avatar>

      <Stack space={1} p={3} pt={8} rounded={10} borderColor='muted.100' bg='white' borderWidth={1}>
        <HStack justifyContent='space-between' alignItems='flex-end'>
          <Heading size='xs' numberOfLines={1} color='gray.500'>Hasan Mahmud</Heading>
          <Text color='muted.400' ml={1} fontSize={10}>23/22/2021</Text>
        </HStack>
        <Ratings size={3}></Ratings>
        <Text lineHeight='20px' mt={1} color='muted.500' ml={1} fontSize='sm'>
          Elit odio ullam natus quos amet? Ratione officia consectetur reprehenderit blanditiis rerum porro. Soluta ipsum sapiente culpa tempore beatae Maxime
          Elit odio ullam natus quos amet? Ratione officia consectetur reprehenderit blanditiis rerum porro. Soluta ipsum sapiente culpa tempore beatae Maxime
        </Text>
      </Stack>
    </Box>
  )
}

export default ReviewCard
