import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import ES from '../../styles/ES';
import {primaryColorOrange, primaryTextColor} from '../../Constants/Colours';
import {poppinsBold, poppinsSemiBold} from '../../Constants/Fonts';

const HeadingText = ({
  children,
  color,
  size,
  center,
  textCenter,
  capitalize,
  uppercase,
  tempBorder,
  lineHeight,
  fontFamily,
  fw,
}) => {
  return (
    <View>
      <Text
        style={[
          size ? {fontSize: size} : {fontSize: 26},
          fw ? {fontWeight: fw} : ES.fw700,
          color ? {color: color} : {color: primaryTextColor},
          center ? ES.textCenter : null,
          textCenter ? ES.textCenter : null,
          capitalize ? ES.capitalize : null,
          uppercase ? ES.uppercase : null,
          tempBorder ? ES.tempBorder : null,

          lineHeight ? {lineHeight: lineHeight} : {lineHeight: 40},
        ]}>
        <Text
          style={[
            fontFamily
              ? {fontFamily: fontFamily}
              : {fontFamily: poppinsSemiBold},
          ]}>
          {children}
        </Text>
      </Text>
    </View>
  );
};

export default HeadingText;
