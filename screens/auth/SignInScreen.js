import { StatusBar } from 'expo-status-bar';
import { Box, ScrollView, Heading, VStack } from 'native-base'
import { Dimensions } from 'react-native'
import React from 'react';
// componets
import FatButton from '../../components/FatButton'
import FormInput from '../../components/FormInput'

const { height } = Dimensions.get('screen')

function SignInScreen({ navigation }) {
  return (
    <ScrollView>
      <Box minHeight={height} flex={1} px={4} flexDirection='column'>
        <VStack mt={12}>
          <Heading color='muted.400'>Hello!</Heading>
          <Heading color='gray.800'>Welcome back</Heading>
        </VStack>
        <Box flexGrow={1}></Box>
        <VStack space={8} mt={8}>
          <FormInput label='Email' />
          <FormInput
            label='Password'
            type='password'
          />
        </VStack>
        <VStack space={4} mt={4} mb={8}>
          <FatButton >Forgot Password</FatButton>
          <FatButton primary>SIGN IN</FatButton>
          <FatButton onPress={() => navigation.navigate('SignUp')}>SIGN UP</FatButton>
        </VStack>
        <StatusBar style="auto" />
      </Box>
    </ScrollView>
  );
}

export default SignInScreen

