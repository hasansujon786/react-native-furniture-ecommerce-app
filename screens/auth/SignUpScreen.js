import { StatusBar } from 'expo-status-bar';
import { Box, Button, FormControl, Heading, Input, ScrollView, Text, VStack, HStack } from 'native-base'
import React from 'react';

function SignUpScreen({ navigation }) {
  return (
    <ScrollView>
      <Box flex={1} px={4} flexDirection='column'>
        <VStack mt={12}>
          <Heading color='gray.800'>Welcome</Heading>
        </VStack>
        <VStack space={8} mt={4}>
          <FormControl>
            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
              Name
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
          <FormControl>
            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
              Confirm Password
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
        <VStack space={2} mt={8} mb={12}>
          <Button colorScheme='gray' bg='gray.800' size='lg' rounded={10}>SIGN UP</Button>
          <Button
            onPress={() => navigation.navigate('SignIn')}
            colorScheme='gray' variant='ghost' size='lg' rounded={10}
          >
            <HStack justifyContent='center' alignItems='center' space={1}>
              <Text color='muted.400'>Already have an account?</Text>
              <Text fontSize='lg'>SIGN IN</Text>
            </HStack>
          </Button>
        </VStack>
        <StatusBar style="auto" />
      </Box>
    </ScrollView>
  );
}

export default SignUpScreen

