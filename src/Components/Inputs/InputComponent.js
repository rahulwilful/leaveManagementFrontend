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

const InputComponent = ({
  value,
  setValue,
  placeholder,
  icon,
  hideText,
  keyboardType,
}) => {
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={[s.inputContainer]}>
      <View style={[s.iconContainer, s.borderEnd, icon ? null : ES.dNone]}>
        <Image source={icon} style={[ES.hs20, ES.ws20, ES.objectFitContain]} />
      </View>

      <TextInput
        value={value}
        style={[s.input]}
        secureTextEntry={hideText ? secureText : false}
        onChangeText={text => setValue(text)}
        placeholder={placeholder}
      />
      <View style={[s.iconContainer, ES.pe1, hideText ? null : ES.dNone]}>
        <TouchableOpacity
          onPress={() => {
            setSecureText(!secureText);
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

export default InputComponent;

const s = StyleSheet.create({
  inputContainer: StyleSheet.flatten([
    ES.w100,
    ES.f20,

    ES.rounded5,
    ES.flexRow,
    ES.alignItemsCenter,
    ES.gap1,
    ES.hs54,
    ES.rounded10,

    {backgroundColor: fullWhite},
    {borderWidth: 1, borderColor: inputBorderColor},
  ]),
  iconContainer: StyleSheet.flatten([ES.w11, ES.h100, ES.centerItems]),
  borderEnd: StyleSheet.flatten([
    {borderEndWidth: 1, borderColor: inputBorderColor},
  ]),
  input: StyleSheet.flatten([ES.f16, ES.fx1]),
});
