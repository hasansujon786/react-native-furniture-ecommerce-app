import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base'

function AccountScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AccountScreen!</Text>
      <StatusBar style="auto" />
      <Button onPress={() => navigation.navigate('Auth')}>Sign In</Button>
    </View>
  );
}

export default AccountScreen

