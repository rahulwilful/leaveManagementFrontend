import {View, Image} from 'react-native';
import React from 'react';
import ES from '../../styles/ES';
import {userIcon} from '../../Constants/ImagesAndIcons';
import NormalText from '../Text/NormalText';
import NormalDarkText from '../Text/NormalDarkText';
import {whiteTextColor} from '../../Constants/Colours';
import Btn from '../Buttons/Btn';
import {useNavigation} from '@react-navigation/native';

const EmployeeCard = ({children, px, name}) => {
  const navigation = useNavigation();
  return (
    <View style={[ES.w100]}>
      <View
        style={[
          ES.flexRow,
          {backgroundColor: '#fff'},
          ES.rounded10,
          ES.px1,
          ES.hs90,
        ]}>
        <View style={[ES.centerItems, ES.px06]}>
          <Image
            source={userIcon}
            style={[ES.hs64, ES.ws64, ES.objectFitContain]}
          />
        </View>
        <View style={[ES.fx8, ES.justifyContentCenter, ES.gap1]}>
          <NormalDarkText size={18}>Rahul Patil</NormalDarkText>
          <NormalText size={16}>BEX Techologies</NormalText>
        </View>
        <View style={[ES.fx7, ES.p04, ES.centerItems]}>
          <Btn
            height={50}
            width={'100%'}
            px={1}
            method={() => navigation.navigate('LeaveReport')}>
            <NormalText color={whiteTextColor} size={16}>
              View Report
            </NormalText>
          </Btn>
        </View>
      </View>
    </View>
  );
};

export default EmployeeCard;
