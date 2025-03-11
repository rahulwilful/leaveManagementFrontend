import {View, Text, ToastAndroid} from 'react-native';
import React from 'react';

export const Toast = ({message}) => {
  ToastAndroid.showWithGravity(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );
};
