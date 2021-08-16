import { StatusBar } from 'expo-status-bar';
import { Box, Button, FormControl, Heading, Input, VStack } from 'native-base'
import React from 'react';

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
        <Button colorScheme='gray' variant='ghost' size='lg' rounded={10}>Forgot Password</Button>
        <Button colorScheme='gray' bg='gray.800' size='lg' rounded={10}>SIGN IN</Button>
        <Button onPress={() => navigation.navigate('SignUp')} colorScheme='gray' variant='ghost' size='lg' rounded={10}>SIGN UP</Button>
      </VStack>
      <StatusBar style="auto" />
    </Box>
  );
}

export default SignInScreen

