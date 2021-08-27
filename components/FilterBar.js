import React from 'react'
import { Box, ScrollView, IconButton, Center, Text } from 'native-base'

import Icon from './Icon'

function Pill({ selected, label }) {
  return (
    <Center mr={3}>
      <IconButton
        variant='solid'
        bg={selected ? 'gray.800' : 'muted.200'}
        colorScheme={selected ? 'dark' : 'light'}
        rounded={12}
        size='lg'
        icon={<Icon color={selected ? 'white' : 'muted.400'} name='star' size='sm' />}
      />
      <Text color={selected ? 'gray.800' : 'muted.400'} fontSize='xs' mt={0.5}>{label}</Text>
    </Center>
  )
}

const FilterBar = ({ height = 70, ...props }) => {
  return (
    <Box style={{ height }} {...props}>
      <ScrollView contentContainerStyle={{ paddingLeft: 12 }} horizontal showsHorizontalScrollIndicator={false}>
        <Pill selected label='Popular' />
        <Pill label='something' />
        <Pill label='something' />
        <Pill label='something' />
        <Pill label='something' />
        <Pill label='something' />
        <Pill label='something' />
        <Pill label='something' />
        <Pill label='something' />
        <Pill label='something' />
      </ScrollView>
    </Box>
  )
}

export default FilterBar
