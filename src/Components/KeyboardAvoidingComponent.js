import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ES from '../styles/ES';
import {backgroundColor} from '../Constants/Colours';

const KeyboardAvoidingComponent = ({children, py, tempBorder, bg}) => {
  return (
    <>
      <StatusBar
        backgroundColor={'#fff'}
        barStyle="dark-content"
        animated={true}
      />
      <KeyboardAvoidingView
        style={[
          ES.fx1,
          bg == false
            ? null
            : bg
            ? {backgroundColor: bg}
            : {backgroundColor: backgroundColor},
        ]}>
<<<<<<< HEAD
        <View style={[ES.fx1]}>
=======
        <View style={[ES.fx1, ES.centerItems]}>
>>>>>>> origin/main
          <View style={[ES.w100, py ? {paddingVertical: py} : null]}>
            <ScrollView
              contentContainerStyle={[
                ES.w100,
                ES.centerItems,
                tempBorder ? ES.tempBorder : null,
              ]}>
              {children}
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default KeyboardAvoidingComponent;
