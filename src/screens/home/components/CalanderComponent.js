import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import ES from '../../../styles/ES';
import NormalText from '../../../Components/Text/NormalText';
import {
  backgroundColorWhite,
  fullWhite,
  primaryColor,
} from '../../../Constants/Colours';
import {
  leftArrowCircleIcon,
  rightArrowCircleIcon,
} from '../../../Constants/ImagesAndIcons';
import {redHatDisplaySemiBold} from '../../../Constants/Fonts';

const CustomHeader = ({date, addMonth, subMonth}) => {
  // Convert the date string to a Date object and format it
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <View
      style={[
        {backgroundColor: primaryColor},
        ES.w100,
        ES.flexRow,
        ES.justifyContentSpaceBetween,
        ES.alignItemsCenter,
        ES.px1,
        ES.py06,
        ES.roundedBottom10,
      ]}>
      <TouchableOpacity onPress={() => subMonth()}>
        <Image
          source={leftArrowCircleIcon}
          style={[ES.hs35, ES.ws35, ES.objectFitContain]}
        />
      </TouchableOpacity>
      <NormalText
        color={fullWhite}
        size={16}
        fontFamily={redHatDisplaySemiBold}>
        {formattedDate}
      </NormalText>
      <TouchableOpacity onPress={() => addMonth()}>
        <Image
          source={rightArrowCircleIcon}
          style={[ES.hs35, ES.ws35, ES.objectFitContain]}
        />
      </TouchableOpacity>
    </View>
  );
};

const CalanderCompnent = () => {
  const [dates, setDates] = useState([]);
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(1);

  const [i, setI] = useState(0);
  let lives = {
    '2025-01-11': {selected: true, color: '#00adf5'},
    '2025-01-02': {selected: true, color: '#00adf5'},
    '2025-01-03': {selected: true, color: '#00adf5'},
    '2025-01-04': {selected: true, color: '#ff9800'},
    '2025-01-05': {selected: true, color: '#ff9800'},
    '2025-01-06': {selected: true, color: '#ff9800'},
    '2025-01-07': {selected: true, color: '#8bc34a'},
    '2025-01-08': {selected: true, color: '#8bc34a'},
    '2025-01-13': {selected: true, color: '#D6CE00'},
    '2025-01-17': {selected: true, color: '#D6CE00'},
    '2025-01-22': {selected: true, color: '#D6CE00'},
    '2025-01-29': {selected: true, color: '#D6CE00'},
  };

  const onDateSelect = date => {
    let tempDates = {...dates};
    let temp = {
      [date]: {
        selected: true,
      },
    };

    tempDates = {...tempDates, ...temp};
    setDates(tempDates);
  };

  const addMonth = () => {
    if (month < 12) {
      setMonth(month + 1);
    } else {
      setYear(year + 1);
      setMonth(1);
    }
  };

  const subMonth = () => {
    if (month > 1) {
      setMonth(month - 1);
    } else {
      setYear(year - 1);
      setMonth(12);
    }
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

  return (
    <>
      <View
        style={[
          ES.rounded10,
          ES.overflowHidden,
          ES.shadow1,
          {backgroundColor: backgroundColorWhite},
          ES.px1,
          ES.pb1,
        ]}>
        <View style={[{paddingHorizontal: 15}]}>
          <CustomHeader
            date={`${year}-${month}-01`}
            addMonth={addMonth}
            subMonth={subMonth}
          />
        </View>

        <Calendar
          renderHeader={date => ''}
          hideArrows={true}
          onDayPress={day => {
            onDateSelect(day.dateString);
          }}
          initialDate={`${year}-${month}-01`}
          onMonthChange={month => {
            console.log('month changed: ', month);
          }}
          markingType={'period'}
          markedDates={lives}
          theme={customTheme}
        />
      </View>
    </>
  );
};

export default CalanderCompnent;

const s = StyleSheet.create({
  headerContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
