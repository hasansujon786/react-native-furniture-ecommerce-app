import React from 'react'
import { Box, Spinner, Center } from 'native-base';

const FullpageSpinner = ({opacity = 0}) => {
  return (
    <Box position='absolute' top={0} right={0} bottom={0} left={0}>
      <Center bg={`rgba(51, 51, 51, ${opacity})`} flex={1}>
        <Spinner />
      </Center>
    </Box>
  )
}

export default FullpageSpinner
