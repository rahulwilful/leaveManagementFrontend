import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
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
import DatePicker from 'react-native-modern-datepicker';
import NormalText from '../Text/NormalText';
import ModalComponent from '../ModalComponent';
import {Calendar} from 'react-native-calendars';

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
    console.log('value: ', value);
    console.log('date: ', date);
  }, [value, date]);

  // Function to format the date into a readable string
  const formatDate = date => {
    if (!date) return placeholder;

    // Ensure date is a Date object
    const validDate = date instanceof Date ? date : new Date(date);

    return validDate.toLocaleDateString();
  };

  const consoleDate = d => {
    console.log('date: ', d);
  };
  const customTheme = {
    backgroundColor: backgroundColorWhite,
    calendarBackground: backgroundColorWhite,
    textSectionTitleColor: '#b6c1cd',
    textSectionTitleDisabledColor: '#d9e1e8',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
    textDisabledColor: '#d9e1e8',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: 'orange',
    disabledArrowColor: '#d9e1e8',
    monthTextColor: 'blue',
    indicatorColor: 'blue',
    textDayFontFamily: 'monospace',
    textMonthFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
  };

  const setCalanderDate = date => {
    console.log('setCalanderDate  date: ', date);
    setOpen(false);
    setDate(date);
    setValue(date);
    //setValue(date);
  };

  return (
    <TouchableOpacity onPress={() => setOpen(true)} style={[s.inputContainer]}>
      <View style={[s.iconContainer, s.borderEnd, icon ? null : ES.dNone]}>
        <Image source={icon} style={[ES.hs20, ES.ws20, ES.objectFitContain]} />
      </View>
      <View style={[s.input]}>
        <NormalText color={lightTextColor} size={15}>
          <Text>{date ? formatDate(date) : placeholder}</Text>
        </NormalText>
      </View>
      <ModalComponent isModalVisible={open} closeModal={() => setOpen(false)}>
        <Calendar
          onDayPress={day => {
            setCalanderDate(day.dateString);
          }}
        />
      </ModalComponent>
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
