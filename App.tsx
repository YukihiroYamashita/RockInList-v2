import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { store } from './src/redux';

import theme from './src/global/styles/theme';

import Router from './src/routes/app.routes';

export default function App() {
  const [loaded] = useFonts({ 
    LemonMilkLight: require('./src/assets/fonts/LEMONMILK-Light.otf'),
    LemonMilkBold: require('./src/assets/fonts/LEMONMILK-Bold.otf'),
  });

  if(!loaded) { 
    return <View/>
  }
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <View style={{ backgroundColor: '#1C1C1C', flex: 1, paddingTop: getStatusBarHeight() + 3}}>
            <StatusBar barStyle='light-content' />
            <Router/>
          </View>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );  
}