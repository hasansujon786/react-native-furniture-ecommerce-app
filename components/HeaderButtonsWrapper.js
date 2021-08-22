import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { HStack } from 'native-base'

const HeaderButtonsWrapper = ({ children }) => {
  const navigation = useNavigation()
  return (
    <HStack px={2}>
      {children({navigation})}
    </HStack>
  )
}

export default HeaderButtonsWrapper
