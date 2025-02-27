/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/screens/home/Home';
import SignIn from './src/screens/authorization/SignIn';

import {enableFreeze} from 'react-native-screens';
import Routes from './src/Navigation/Routes';

enableFreeze(true);

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const sampleFunction = () => {
    console.log('sampleFunction called');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Routes />
      {/* 
      <Home /> */}
    </SafeAreaView>
  );
}

export default App;
