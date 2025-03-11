import {View, Text, Image} from 'react-native';
import React from 'react';
import ES from '../../styles/ES';
import {userIcon} from '../../Constants/ImagesAndIcons';
import NormalText from '../Text/NormalText';
import {blackTextColor} from '../../Constants/Colours';

const NameCard = ({children, px, name}) => {
  return (
    <View style={[ES.w100, ES.my1]}>
      <View
        style={[
          ES.mt2,
          ES.flexRow,
          {backgroundColor: '#F6F5F5'},
          ES.rounded10,
          px ? {paddingHorizontal: px} : null,
          ES.w91,
        ]}>
        <View style={[, ES.justifyContentCenter, ES.px2, ES.fx1]}>
          <NormalText color={blackTextColor} capitalize size={18}>
            {name}
          </NormalText>
          <NormalText capitalize size={18}>
            Bex Technologies
          </NormalText>
        </View>
        <View style={[, ES.p06, ES.hs90, ES.ws90, ES.relative]}>
          <View
            style={[
              ES.p06,
              ES.hs120,
              ES.ws120,
              ES.absolute,
              {top: -15},

              ES.centerItems,
            ]}>
            <Image
              source={userIcon}
              style={[ES.hs120, ES.ws120, ES.objectFitContain]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default NameCard;
