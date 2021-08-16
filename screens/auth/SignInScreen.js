import { StatusBar } from 'expo-status-bar';
import { Box, Button, FormControl, Heading, Input, VStack } from 'native-base'
import React from 'react';
// componets
import FatButton from '../../components/FatButton'

function SignInScreen({ navigation }) {
  return (
    <Box flex={1} px={4} flexDirection='column'>
      <VStack mt={12}>
        <Heading color='muted.400'>Hello!</Heading>
        <Heading color='gray.800'>Welcome back</Heading>
      </VStack>
      <Box flexGrow={1}></Box>
      <VStack space={8} mt={8}>
        <FormControl>
          <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
            Email
          </FormControl.Label>
          <Input
            px={0}
            py={2}
            borderBottomColor='muted.300'
            variant='outline'
            borderWidth={0}
            borderBottomWidth={1}
            rounded={0}
            _focus={{ borderBottomColor: 'muted.800' }}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
            Password
          </FormControl.Label>
          <Input
            px={0}
            py={2}
            borderBottomColor='muted.300'
            variant='outline'
            borderWidth={0}
            borderBottomWidth={1}
            type='password'
            secureTextEntry={true}
            rounded={0}
            _focus={{ borderBottomColor: 'muted.800' }}
          />
        </FormControl>
      </VStack>
      <VStack space={4} mt={4} mb={4}>
        <FatButton >Forgot Password</FatButton>
        <FatButton primary>SIGN IN</FatButton>
        <FatButton onPress={() => navigation.navigate('SignUp')}>SIGN UP</FatButton>
      </VStack>
      <StatusBar style="auto" />
    </Box>
  );
}

export default SignInScreen

