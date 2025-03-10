<<<<<<< HEAD
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
=======
import {View, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
>>>>>>> origin/main
import {
  backgroundColor,
  blackTextColor,
  primaryColor,
} from '../../Constants/Colours';
import ES from '../../styles/ES';
import NormalDarkText from '../Text/NormalDarkText';
import {checkedIcon} from '../../Constants/ImagesAndIcons';

const CheckBox = ({
  selected,
  width,
  placeholder,
  totalLeaves,
  usedLeaves,
  method,
}) => {
  return (
    <>
      <View style={[width ? {width: width} : ES.w100, ES.flexRow, ES.gap1]}>
        <TouchableOpacity
          onPress={() => method()}
          style={[
            ES.hs25,
            ES.ws25,
            ES.centerItems,
            ES.rounded2,
            {borderWidth: 2, borderColor: primaryColor},
          ]}>
          <View
            style={[
              selected == true ? null : ES.dNone,
              ES.hs25,
              ES.ws25,
              {backgroundColor: '#fff'},
            ]}>
            <Image
              source={checkedIcon}
              style={[ES.hs25, ES.ws25, ES.objectFitContain]}
            />
          </View>
        </TouchableOpacity>
        <View style={[ES.fx1, ES.justifyContentCenter, ES.px08]}>
          <NormalDarkText size={20} color={blackTextColor}>
            {placeholder ? placeholder : 'NA'}
          </NormalDarkText>
        </View>
      </View>
    </>
  );
};

export default CheckBox;
