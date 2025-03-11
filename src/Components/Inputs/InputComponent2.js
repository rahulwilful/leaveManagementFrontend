import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ES from '../../styles/ES';
import {
  backgroundColorWhite,
  fullWhite,
  inputBorderColor,
} from '../../Constants/Colours';
import {eyeIcon} from '../../Constants/ImagesAndIcons';
import {} from 'react-native-gesture-handler';
import NormalText from '../Text/NormalText';
import {keyBoardDefault} from '../../Constants/Fonts';

const InputComponent2 = ({
  width,
  value,
  setValue,
  inputPlaceholder,
  topPlaceHolder,
  icon,
  hideText,
  keyboardType,
  toString,
}) => {
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={[s.inputContainer, width ? {width: width} : ES.w100]}>
      <View
        style={[
          ES.absolute,
          {top: -13, backgroundColor: fullWhite},
          ES.left10,
          ES.px04,

          topPlaceHolder ? null : ES.dNone,
        ]}>
        <NormalText size={16}> {topPlaceHolder}</NormalText>
      </View>
      <View style={[s.iconContainer, s.borderEnd, icon ? null : ES.dNone]}>
        <Image source={icon} style={[ES.hs20, ES.ws20, ES.objectFitContain]} />
      </View>

      <TextInput
        value={toString ? value.toString() : value}
        style={[s.input]}
        keyboardType={keyboardType ? keyboardType : keyBoardDefault}
        secureTextEntry={hideText ? secureText : false}
        onChangeText={text => setValue(text)}
        placeholder={inputPlaceholder}
      />
      <View style={[s.iconContainer, ES.pe1, hideText ? null : ES.dNone]}>
        <TouchableOpacity
          onPress={() => {
            setSecureText(!secureText);
            console.log('pressed on icon');
          }}>
          <Image
            source={eyeIcon}
            style={[ES.hs20, ES.ws20, ES.objectFitContain]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputComponent2;

const s = StyleSheet.create({
  inputContainer: StyleSheet.flatten([
    ES.f20,

    ES.rounded5,
    ES.flexRow,
    ES.alignItemsCenter,
    ES.gap1,
    ES.hs54,
    ES.rounded10,
    ES.relative,
    ES.px1,

    {borderWidth: 1, borderColor: inputBorderColor},
  ]),
  iconContainer: StyleSheet.flatten([ES.w11, ES.h100, ES.centerItems]),
  borderEnd: StyleSheet.flatten([
    {borderEndWidth: 1, borderColor: inputBorderColor},
  ]),
  input: StyleSheet.flatten([ES.f16, ES.fx1]),
});
