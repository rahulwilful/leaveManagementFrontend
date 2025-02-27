import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import ES from '../../styles/ES';
import LinearGradient from 'react-native-linear-gradient';
import {primaryButtonColor, primaryColor} from '../../Constants/Colours';

import Loader from '../Loader';
import {
  poppinsMedium,
  poppinsRegular,
  poppinsSemiBold,
  redHatDisplayMedium,
  redHatDisplayRegular,
} from '../../Constants/Fonts';

const BtnOutLine = ({
  children,
  method,
  color,
  px,
  width,
  bgColor,
  size,
  buttonLoading,
  height,
  fontFamily,
}) => {
  return (
    <TouchableOpacity
      onPress={method}
      style={[width ? {width: width} : ES.w100]}>
      <LinearGradient
        colors={bgColor ? bgColor : ['rgba(0, 0, 0,0)', 'rgba(0, 0, 0,0)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[
          s.button,
          px ? {paddingHorizontal: px} : ES.px3,
          ES.w100,
          height ? {height: height} : ES.hs54,
        ]}>
        <Text
          style={[
            color ? {color: color} : {color: primaryColor},
            size ? {fontSize: size} : ES.f18,
            ES.fw700,
            ES.textCenter,
            ES.centerItems,
            ES.capitalize,
          ]}>
          {buttonLoading ? (
            <View style={[buttonLoading ? ES.dBlock : ES.dNone, ES.hs30]}>
              <Loader size={'small'} color={'#fff'} />
            </View>
          ) : (
            <Text
              style={[
                fontFamily
                  ? {fontFamily: fontFamily}
                  : {fontFamily: poppinsMedium},
              ]}>
              {children}
            </Text>
          )}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default BtnOutLine;

const s = StyleSheet.create({
  button: StyleSheet.flatten([
    ES.rounded10,
    ES.py04,
    ES.centerItems,
    {borderWidth: 2, borderColor: primaryColor, borderRadius: 10},
  ]),
});
