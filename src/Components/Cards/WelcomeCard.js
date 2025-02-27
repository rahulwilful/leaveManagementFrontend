import {View, Text, Image} from 'react-native';
import React from 'react';
import ES from '../../styles/ES';
import {userIcon} from '../../Constants/ImagesAndIcons';
import NormalText from '../Text/NormalText';

const WelcomeCard = ({children, px, name}) => {
  return (
    <View style={[ES.w100]}>
      <View
        style={[
          ES.mt1,
          ES.flexRow,
          {backgroundColor: '#F6F5F5'},
          ES.rounded10,
          px ? {paddingHorizontal: px} : null,
          ES.w100,
          ES.shadow1,
        ]}>
        <View style={[, ES.justifyContentCenter, ES.px2, ES.fx1]}>
          <NormalText capitalize size={22}>
            Welcome
          </NormalText>
          <NormalText capitalize size={26}>
            {name}!
          </NormalText>
        </View>
        <View style={[, ES.p06, ES.hs110, ES.ws110, ES.relative]}>
          <View
            style={[
              ES.p06,
              ES.hs110,
              ES.ws110,
              ES.absolute,
              {top: -15},
              ES.alignItemsCenter,
            ]}>
            <Image
              source={userIcon}
              style={[ES.hs100, ES.ws100, ES.objectFitContain]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomeCard;
