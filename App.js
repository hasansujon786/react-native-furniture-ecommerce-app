import React from 'react'
import { NativeBaseProvider } from 'native-base';
import RootNavigator from './navigators/RootNavigator'

export default function App() {
  return (
    <NativeBaseProvider>
      <RootNavigator />
    </NativeBaseProvider>
  )
}
