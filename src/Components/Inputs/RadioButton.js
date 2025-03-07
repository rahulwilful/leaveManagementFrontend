import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  backgroundColor,
  blackTextColor,
  primaryColor,
} from '../../Constants/Colours';
import ES from '../../styles/ES';
import NormalDarkText from '../Text/NormalDarkText';
import {Dropdown} from 'react-native-element-dropdown';

const RadioButton = ({
  selected,
  width,
  method,
  placeholder,
  totalLeaves,
  usedLeaves,
}) => {
  return (
    <>
      <View style={[width ? {width: width} : ES.w100, ES.flexRow, ES.gap1]}>
        <TouchableOpacity
          onPress={() => method()}
          style={[
            {borderRadius: 50},
            ES.hs30,
            ES.ws30,
            ES.centerItems,
            {backgroundColor: backgroundColor},
          ]}>
          <View
            style={[
              selected == true ? null : ES.dNone,
              ES.hs18,
              ES.ws18,
              ES.shadow1,
              {borderRadius: 50, backgroundColor: primaryColor},
            ]}></View>
        </TouchableOpacity>
        <View style={[ES.fx1, ES.justifyContentCenter, ES.px08]}>
          <NormalDarkText capitalize size={20} color={blackTextColor}>
            {placeholder ? placeholder : 'NA'} {'('}
            {usedLeaves ? usedLeaves : 0}/{totalLeaves ? totalLeaves : 0}
            {')'}
          </NormalDarkText>
        </View>
      </View>
    </>
  );
};

export default RadioButton;
