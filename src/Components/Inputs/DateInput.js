import {View, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import ES from '../../styles/ES';
import {
  backgroundColorWhite,
  fullWhite,
  inputBorderColor,
  lightDarkColor,
  lightTextColor,
} from '../../Constants/Colours';
import {eyeIcon} from '../../Constants/ImagesAndIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import NormalText from '../Text/NormalText';

const DateInput = ({
  value,
  setValue,
  placeholder,
  icon,
  hideText,
  keyboardType,
}) => {
  const [secureText, setSecureText] = useState(true);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(value ? value : date);
  }, [value]);

  // Function to format the date into a readable string
  const formatDate = date => {
    if (!date) return placeholder;
    return date.toLocaleDateString(); // You can customize this format as needed
  };

  return (
    <TouchableOpacity onPress={() => setOpen(true)} style={[s.inputContainer]}>
      <View style={[s.iconContainer, s.borderEnd, icon ? null : ES.dNone]}>
        <Image source={icon} style={[ES.hs20, ES.ws20, ES.objectFitContain]} />
      </View>
      <View style={[s.input]}>
        <NormalText color={lightTextColor} size={15}>
          {value ? formatDate(value) : placeholder}
        </NormalText>
      </View>
      <DatePicker
        mode="date"
        modal
        open={open}
        date={value ? value : date}
        onConfirm={date => {
          setOpen(false);
          setValue(date); // Update the value when a date is selected
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <View
        style={[
          s.iconContainer,
          ES.tempBorder,
          ES.pe1,
          hideText ? null : ES.dNone,
        ]}>
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
    </TouchableOpacity>
  );
};

export default DateInput;

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
