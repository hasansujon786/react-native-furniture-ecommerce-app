import { StatusBar } from 'expo-status-bar';
import { Button } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';

function CartScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cart screen!</Text>
      <Button onPress={() => navigation.navigate('Auth')}>Sign In</Button>
      <StatusBar style="auto" />
    </View>
  );
}

export default CartScreen

