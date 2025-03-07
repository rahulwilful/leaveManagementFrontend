import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import ES from '../../styles/ES';
import {
  darkTextColor,
  lightDarkColor,
  lightTextColor,
  primaryColorOrange,
  primaryTextColor,
} from '../../Constants/Colours';
import {poppinsRegular, redHatDisplaySemiBold} from '../../Constants/Fonts';

const NormalDarkText = ({
  children,
  color,
  size,
  capitalize,
  textCenter,
  baseLine,
  centerItems,
  tempBorder,
  center,
  fontFamily,
  fw,
  px,
  py,
}) => {
  return (
    <Text
      style={[
        py ? {paddingVertical: py} : null,
        px ? {paddingHorizontal: px} : null,
        ES.fx0,
        tempBorder ? ES.tempBorder : null,
        size ? {fontSize: size} : 18,
        fw ? {fontWeight: fw} : ES.fw500,

        color ? {color: color} : {color: darkTextColor},
        center ? ES.textCenter : null,
        textCenter ? ES.textCenter : null,
        capitalize ? ES.capitalize : null,
        baseLine ? ES.alignItemsBaseline : null,
        centerItems ? ES.centerItems : null,
        fontFamily
          ? {fontFamily: fontFamily}
          : {fontFamily: redHatDisplaySemiBold},
      ]}>
      {children}
    </Text>
  );
};

export default NormalDarkText;
