import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import ES from '../../styles/ES';
import LinearGradient from 'react-native-linear-gradient';
import {primaryButtonColor} from '../../Constants/Colours';

import Loader from '../Loader';
import {
  poppinsMedium,
  poppinsRegular,
  poppinsSemiBold,
  redHatDisplayMedium,
  redHatDisplayRegular,
} from '../../Constants/Fonts';

const Btn = ({
  children,
  method,
  color,
  px,
  width,
  bgColor,
  size,
  isLoading,
  height,
  fontFamily,
}) => {
  return (
    <TouchableOpacity
      onPress={method}
      style={[width ? {width: width} : ES.w100]}>
      <LinearGradient
        colors={bgColor ? bgColor : primaryButtonColor}
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
            color ? {color: color} : ES.textLight,
            size ? {fontSize: size} : ES.f18,
            ES.fw700,
            ES.textCenter,
            ES.centerItems,
            ES.capitalize,
          ]}>
          {isLoading ? (
<<<<<<< HEAD
            <Loader isLoading={true} size={'large'} color={'#fff'} />
=======
           
              <Loader size={'large'} color={'#fff'} />
          
>>>>>>> origin/main
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

export default Btn;

const s = StyleSheet.create({
  button: StyleSheet.flatten([ES.rounded10, ES.py04, ES.centerItems]),
});
