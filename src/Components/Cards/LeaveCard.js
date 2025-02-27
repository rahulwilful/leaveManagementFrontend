import {View, Text, Image} from 'react-native';
import React from 'react';
import ES from '../../styles/ES';
import {userIcon} from '../../Constants/ImagesAndIcons';
import NormalText from '../Text/NormalText';
import NormalDarkText from '../Text/NormalDarkText';
import {
  blackTextColor,
  greenBorderColor,
  primaryColor,
  whiteTextColor,
} from '../../Constants/Colours';
import {redHatDisplaySemiBold} from '../../Constants/Fonts';

const LeaveCard = ({children, px, name, date, leaves}) => {
  return (
    <View style={[ES.w100]}>
      <View style={[ES.flexRow, ES.bgLight, ES.p1, ES.rounded10]}>
        <View style={[, ES.fx4, ES.justifyContentCenter]}>
          <NormalDarkText
            size={18}
            fontFamily={redHatDisplaySemiBold}
            color={blackTextColor}>
            {date ? date : 'NA'}
          </NormalDarkText>
        </View>
        <View style={[, ES.centerItems]}>
          <View
            style={[
              ES.hs47,
              ES.ws47,
              ES.centerItems,
              {borderRadius: 50, backgroundColor: primaryColor},
            ]}>
            <NormalText color={whiteTextColor} size={17}>
              {leaves ? leaves : 'NA'}
            </NormalText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LeaveCard;
