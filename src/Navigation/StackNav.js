import {View, Text} from 'react-native';
import React from 'react';
import Home from '../screens/home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/authorization/SignIn';
import ForgotPassword from '../screens/authorization/ForgotPassword';
import Department from '../screens/dashboard/Department';
import Dashboard from '../screens/dashboard/Dashboard';
import LeaveReport from '../screens/dashboard/LeaveReport';
import Profile from '../screens/user/Profile';
import AddEmployee from '../screens/user/AddEmployee';

const Stack = createNativeStackNavigator();

export const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="LeaveReport" component={LeaveReport} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Department" component={Department} />
    </Stack.Navigator>
  );
};

export const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AddEmployee" component={AddEmployee} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Department" component={Department} />
    </Stack.Navigator>
  );
};
