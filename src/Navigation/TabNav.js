import {Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import {primaryColor} from '../Constants/Colours';
import SubmitLeave from '../screens/leaves/SubmitLeave';

import {
  activeUserIcon,
  activeDashboardIcon,
  inActiveDashboardIcon,
  activeHomeIcon,
  inActiveHomeIcon,
  activeCalandarIcon,
  inActiveCalandarIcon,
  inActiveUserIcon,
} from '../Constants/ImagesAndIcons';

import ES from '../styles/ES';
import {DashboardStack, ProfileStack} from './StackNav';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: primaryColor,
          shadowColor: '#000000',
          alignItems: 'center',
          paddingTop: 4,
          height: 50,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardStack}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? activeDashboardIcon : inActiveDashboardIcon}
              style={[
                focused ? ES.hs33 : ES.hs25,
                focused ? ES.ws33 : ES.ws25,
                ES.objectFitContain,
                {alignSelf: 'center'},
              ]}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? activeHomeIcon : inActiveHomeIcon}
              style={[
                focused ? ES.hs33 : ES.hs25,
                focused ? ES.ws33 : ES.ws25,
                ES.objectFitContain,
                {alignSelf: 'center'},
              ]}
            />
          ),
        }}
      />

      <Tab.Screen
        name="SubmitLeave"
        component={SubmitLeave}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? activeCalandarIcon : inActiveCalandarIcon}
              style={[
                focused ? ES.hs33 : ES.hs25,
                focused ? ES.ws33 : ES.ws25,
                ES.objectFitContain,
                {alignSelf: 'center'},
              ]}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? activeUserIcon : inActiveUserIcon}
              style={[
                focused ? ES.hs33 : ES.hs25,
                focused ? ES.ws33 : ES.ws25,
                ES.objectFitContain,
                {alignSelf: 'center'},
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
