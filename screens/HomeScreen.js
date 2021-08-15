import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  console.log(navigation)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreen!</Text>
      <Button title='signin' onPress={() =>  navigation.navigate('Auth')}/>
      <StatusBar style="auto" />
    </View>
  );
}

