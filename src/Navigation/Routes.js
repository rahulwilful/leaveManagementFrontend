import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import ES from '../styles/ES';
import TabNav from './TabNav';
import {useDispatch, useSelector} from 'react-redux';
import UnAuthorisedNav from './UnAuthorisedNav';
import Team24 from '../screens/authorization/Team24';

import {MMKV} from 'react-native-mmkv';
import {toggleLogin} from '../Redux/actions/authorizationAction';

const storage = new MMKV();

const Routes = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('isLoggedIn: ', isLoggedIn);
    varifyToken();
  }, [isLoggedIn]);

  const varifyToken = async () => {
    const token = await storage.getString('token');
    console.log('Routes token: ', token && token);
    if (token) {
      dispatch(toggleLogin(true));
    } else {
      dispatch(toggleLogin(false));
    }
  };

  useEffect(() => {
    varifyToken();
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
