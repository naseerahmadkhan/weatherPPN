import { View, Text } from 'react-native'
import React from 'react'
import Main from './src/Main'
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'green',
      secondary: 'yellow',
    },
  };

  return (
    <PaperProvider theme={theme}> 
    <Main />
  </PaperProvider>
  )
}