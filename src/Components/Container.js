import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  StatusBar,
  Keyboard,
  Image,
  Text,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ES from '../styles/ES';
import {backgroundColor} from '../Constants/Colours';
import Loader from './Loader';

const Container = ({
  children,
  py,
  px,
  pb,
  pt,
  tempBorder,
  bgColor,
  refreshFunction,
  verticalScrollIndicator,
  isLoading,
  gap,
  refreshing,
}) => {
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
          bgColor == false
            ? null
            : bgColor
            ? {backgroundColor: bgColor}
            : {backgroundColor: '#A5DCD5'},
        ]}>
        <Loader tempBorder={true} isLoading={isLoading} />
        <View
          style={[
            ES.fx1,
            ES.w100,
            tempBorder ? ES.tempBorder : null,
            px
              ? {paddingHorizontal: px}
              : px == 0
              ? {paddingHorizontal: 0}
              : {paddingHorizontal: 8},
            isLoading ? ES.dNone : null,
          ]}>
          <ScrollView
            showsVerticalScrollIndicator={
              verticalScrollIndicator ? true : false
            }
            refreshControl={
              <RefreshControl
                refreshing={refreshing ? refreshing : false}
                onRefresh={refreshFunction}
              />
            }
            bounces={true}
            contentContainerStyle={[
              ES.w100,
              ES.minScreenHeight, 
              py ? {paddingVertical: py} : null,
              pb ? {paddingBottom: pb} : null,
              pt ? {paddingTop: pt} : null,
              gap ? {gap: gap} : null,
            ]}>
            {children}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Container;
