import {View, Text} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {backgroundTextColor, darkTextColor} from '../../../Constants/Colours';
import ES from '../../../styles/ES';
import NormalText from '../../../Components/Text/NormalText';

const HomeLeaveCard = ({leaveType, totalLeaves, width}) => {
  const navigation = useNavigation();
  return (
    <View style={[width ? {width: width} : ES.w30]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Department')}
        style={[
          ES.w100,
          ES.bgLight,
          ES.gap2,
          ES.shadow1,
          ES.centerItems,
          ES.rounded10,
          ES.hs111,
        ]}>
        <NormalText textCenter size={30} color={backgroundTextColor}>
          {totalLeaves ? totalLeaves : null}
        </NormalText>
        {leaveType && (
          <NormalText textCenter px={2} size={12} color={darkTextColor}>
            {leaveType ? leaveType : null}
          </NormalText>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HomeLeaveCard;
