import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableNativeFeedback, ScrollView } from 'react-native'
import { Heading, Text, Avatar, IconButton, Stack, HStack } from 'native-base'

import Colors from '../constants/Colors'
import Icon from '../components/Icon'

const List = ({ title, detail, onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <HStack rounded='lg' bg={Colors.defaultBG} px={3} py={4} alignItems='center' >
        <Stack flex={1} pl={2}>
          <Heading size='sm' color='gray.700'>{title}</Heading>
          <Text fontSize='sm' color='muted.400'>{detail}</Text>
        </Stack>

        <Icon color='muted.300' name='chevron-forward-outline' size='sm' />
      </HStack>
    </TouchableNativeFeedback>
  )
}

function AccountScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <HStack mt={3} px={3} alignItems='center' >
        <Avatar size='xl'>HM</Avatar>
        <Stack flex={1} pl={2}>
          <Heading size='md' color='gray.700'>Hasan Mahmud</Heading>
          <Text fontSize='sm' color='muted.400'>youremail@gmail.com</Text>
        </Stack>
        <IconButton rounded='pill' variant='ghost' colorScheme='light'
          icon={<Icon name='create-outline' size='sm' />}
        />
      </HStack>
      <Stack mt={2}>
        <List title='My Orders' detail='Alrady have 10 orders'></List>
        <List title='Shipping Addresses' detail='3 Addresses'></List>
        <List title='Payment Method' detail='You have 2 cards'></List>
        <List title='My reviews' detail='Reviews for five items'></List>
        <List title='Help Center' detail='FAQ, Contact'></List>
        <List onPress={() => navigation.navigate('Auth')} title='Sign Out' detail='Sign out from your account'></List>
      </Stack>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

export default AccountScreen

