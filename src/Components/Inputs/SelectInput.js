import {Dropdown} from 'react-native-element-dropdown';

import {View, TextInput, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import ES from '../../styles/ES';
import {
  backgroundColorWhite,
  fullWhite,
  inputBorderColor,
} from '../../Constants/Colours';
import {eyeIcon} from '../../Constants/ImagesAndIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NormalText from '../Text/NormalText';
import {keyBoardDefault} from '../../Constants/Fonts';

const SelectInput = ({
  width,
  value,
  setValue,
  placeholder,
  topPlaceHolder,
  options,
  lableFeild,
  valueFeild,
  icon,
  hideText,
  keyboardType,
}) => {
  
  const [approver, setApprover] = useState(null);

  return (
    <View style={[s.inputContainer, width ? {width: width} : ES.w100]}>
      <Dropdown
        style={[
          {
            width: '100%',
            padding: 0,
          },
        ]}
        placeholderStyle={[ES.f16]}
        selectedTextStyle={[ES.f16]}
        inputSearchStyle={[ES.hs40, ES.f16]}
        iconStyle={{width: 26, height: 26}}
        data={options}
        search
        maxHeight={300}
        labelField={lableFeild}
        valueField={valueFeild}
        placeholder={placeholder ? placeholder : 'Select '}
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item);
        }}
      />
    </View>
  );
};

export default SelectInput;

const s = StyleSheet.create({
  inputContainer: StyleSheet.flatten([
    ES.f20,
    ES.px1,
    ES.rounded5,
    ES.flexRow,
    ES.alignItemsCenter,
    ES.gap1,
    ES.hs54,
    ES.rounded10,
    ES.relative,
    {borderWidth: 1, borderColor: inputBorderColor, backgroundColor: fullWhite},
  ]),
  iconContainer: StyleSheet.flatten([ES.w11, ES.h100, ES.centerItems]),
  borderEnd: StyleSheet.flatten([
    {borderEndWidth: 1, borderColor: inputBorderColor},
  ]),
  input: StyleSheet.flatten([ES.f16, ES.fx1]),
});
