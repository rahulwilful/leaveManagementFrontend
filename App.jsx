<<<<<<< HEAD
import './gesture-handler';
=======
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

>>>>>>> origin/main
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
<<<<<<< HEAD
=======
  TouchableOpacity,
>>>>>>> origin/main
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
<<<<<<< HEAD

import ES from './src/styles/ES';
import Routes from './src/Navigation/Routes';

=======
import Home from './src/screens/home/Home';
import SignIn from './src/screens/authorization/SignIn';

import {enableFreeze} from 'react-native-screens';
import Routes from './src/Navigation/Routes';

enableFreeze(true);

>>>>>>> origin/main
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
<<<<<<< HEAD
  };

  const safePadding = '5%';

  return (
    <>
      <SafeAreaView style={[ES.fx1]}>
        <Routes />
      </SafeAreaView>
    </>
=======
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
>>>>>>> origin/main
  );
}

export default App;
