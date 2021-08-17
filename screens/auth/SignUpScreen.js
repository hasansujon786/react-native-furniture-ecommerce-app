import { StatusBar } from 'expo-status-bar';
import { Box, Heading, ScrollView, Text, VStack, HStack } from 'native-base'
import { Dimensions } from 'react-native'
import React from 'react';
// componets
import FatButton from '../../components/FatButton'
import FormInput from '../../components/FormInput'

const { height } = Dimensions.get('screen')

function SignUpScreen({ navigation }) {
  return (
    <ScrollView>
      <Box minHeight={height} flex={1} px={4} flexDirection='column'>
        <VStack mt={12}>
          <Heading color='muted.400'>Welcome</Heading>
          <Heading color='gray.800'>Create a new account</Heading>
        </VStack>
        <Box flexGrow={1}></Box>
        <VStack space={8} mt={4}>
          <FormInput label='Name' />
          <FormInput label='Email' />
          <FormInput
            label='Password'
            type='password'
          />
          <FormInput
            label='Confirm Password'
            type='password'
          />
        </VStack>
        <VStack space={4} mt={8} mb={8}>
          <FatButton primary>SIGN UP</FatButton>
          <FatButton onPress={() => navigation.navigate('SignIn')}>
            <HStack justifyContent='center' alignItems='center' space={1}>
              <Text color='muted.400'>Already have an account?</Text>
              <Text fontSize='lg'>SIGN IN</Text>
            </HStack>
          </FatButton>
        </VStack>
        <StatusBar style="auto" />
      </Box>
    </ScrollView>
  );
}

export default SignUpScreen

