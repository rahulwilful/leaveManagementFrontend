import {View, Text, Image} from 'react-native';
import React from 'react';
import ES from '../../styles/ES';
import {userIcon} from '../../Constants/ImagesAndIcons';
import NormalText from '../Text/NormalText';
import NormalDarkText from '../Text/NormalDarkText';
import {greenBorderColor} from '../../Constants/Colours';

const EmployeeLeaveCard = ({children, px, name}) => {
  return (
    <View style={[ES.w100]}>
      <View
        style={[
          ES.flexRow,
          {backgroundColor: '#fff'},
          ES.rounded10,
          ES.p1,
          ES.hs90,
        ]}>
        <View style={[ES.centerItems, ES.px06]}>
          <Image
            source={userIcon}
            style={[ES.hs64, ES.ws64, ES.objectFitContain]}
          />
        </View>
        <View style={[ES.fx8, ES.justifyContentCenter, , ES.gap1]}>
          <NormalDarkText size={18}>Rahul Patil</NormalDarkText>
          <NormalText size={16}>BEX Techologies</NormalText>
        </View>
        <View style={[ES.fx7, ES.p04]}>
          <View
            style={[
              ES.fx1,
              ES.rounded10,
              {borderWidth: 1, borderColor: greenBorderColor},
            ]}>
            <View style={[ES.fx1, ES.justifyContentCenter, ES.px1]}>
              <NormalDarkText textCenter size={12} fw={700}>
                From: 12.01.25
              </NormalDarkText>
            </View>
            <View
              style={[
                {borderTopWidth: 1, borderColor: greenBorderColor},
              ]}></View>
            <View style={[ES.fx1, ES.justifyContentCenter, ES.px1]}>
              <NormalDarkText textCenter size={12} fw={700}>
                To {'      '}: 16.01.25
              </NormalDarkText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EmployeeLeaveCard;
