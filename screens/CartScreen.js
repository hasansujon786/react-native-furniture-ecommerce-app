import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

function CartScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cart screen!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default CartScreen

