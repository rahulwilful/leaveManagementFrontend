import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import ES from '../styles/ES';
import TabNav from './TabNav';
import {useSelector} from 'react-redux';
import UnAuthorisedNav from './UnAuthorisedNav';
import Team24 from '../screens/authorization/Team24';

const Routes = () => {
  const isLoggedIn = useSelector(state => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('isLoggedIn: ', isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(timer);
    }, 3000);
  }, []);
  
  return (
    <>
      {isLoading ? (
        <Team24 />
      ) : (
        <GestureHandlerRootView style={[ES.fx1]}>
          <NavigationContainer>
            {isLoggedIn ? <TabNav /> : <UnAuthorisedNav />}
          </NavigationContainer>
        </GestureHandlerRootView>
      )}
    </>
  );
};

export default Routes;
