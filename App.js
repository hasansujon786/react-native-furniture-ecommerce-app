import React from 'react'
import { extendTheme, NativeBaseProvider } from "native-base";
import RootNavigator from './navigators/RootNavigator'

const theme = extendTheme({
  components: {
    IconButton: {
      variants: {
        solid: ({ colorScheme }) => {
          return {
            // backgroundColor: colorScheme == 'light' && 'gray.100',
            _pressed: { backgroundColor: colorScheme == 'light' && 'gray.300', }
          }
        }
      },
    }
  }
});


export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <RootNavigator />
    </NativeBaseProvider>
  )
}
