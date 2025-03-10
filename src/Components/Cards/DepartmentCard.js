<<<<<<< HEAD
import {View, Text, TouchableOpacity} from 'react-native';
=======
import {View, Text} from 'react-native';
>>>>>>> origin/main
import React from 'react';
import ES from '../../styles/ES';
import NormalText from '../Text/NormalText';
import {backgroundTextColor, darkTextColor} from '../../Constants/Colours';
import {useNavigation} from '@react-navigation/native';
<<<<<<< HEAD
=======
import {TouchableOpacity} from 'react-native-gesture-handler';
>>>>>>> origin/main

const DepartmentCard = ({department, totalEmployees, employees, width}) => {
  const navigation = useNavigation();
  return (
    <View style={[width ? {width: width} : ES.w30]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Department')}
        style={[
          ES.w100,
          ES.bgLight,
          ES.gap2,
<<<<<<< HEAD
          ES.centerItems,
          ES.rounded10,
          ES.shadow1,
=======
          ES.shadow1,
          ES.centerItems,
          ES.rounded10,
>>>>>>> origin/main
          ES.hs111,
        ]}>
        <NormalText textCenter size={30} color={backgroundTextColor}>
          {employees ? employees : null} {employees ? '/ ' : null}
          {totalEmployees ? totalEmployees : null}
        </NormalText>
        {department && (
          <NormalText textCenter px={2} size={12} color={darkTextColor}>
            {department ? department : null}
          </NormalText>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DepartmentCard;
