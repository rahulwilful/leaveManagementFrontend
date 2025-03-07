import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import ES from '../styles/ES';
import {headerBackgroundColor} from '../Constants/Colours';

const Loader = ({size, color, isLoading, tempBorder}) => {
  return (
    <View
      style={[
        ES.fx1,
        ES.centerItems,
        isLoading ? null : ES.dNone,
        tempBorder ? ES.tempBorder : null,
      ]}>
      <ActivityIndicator
        size={size ? size : 'large'}
        color={color ? color : headerBackgroundColor}
      />
    </View>
  );
};

export default Loader;
