import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../../Components/HeaderComponent';
import Container from '../../Components/Container';
import ES from '../../styles/ES';
import {
  backgroundColor,
  fullWhite,
  inputBorderColor,
  primaryColor,
} from '../../Constants/Colours';
import NormalText from '../../Components/Text/NormalText';
import {redHatDisplayBold} from '../../Constants/Fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RadioButton from '../../Components/Inputs/RadioButton';
import InputComponent from '../../Components/Inputs/InputComponent';
import {calandarIcon} from '../../Constants/ImagesAndIcons';
import CheckBox from '../../Components/Inputs/CheckBox';
import Btn from '../../Components/Buttons/Btn';
import {Dropdown} from 'react-native-element-dropdown';
import SelectInput from '../../Components/Inputs/SelectInput';
import DateInput from '../../Components/Inputs/DateInput';
import KeyboardAvoidingComponent from '../../Components/KeyboardAvoidingComponent';

const SubmitLeave = () => {
  const [halfDay, setHalfDay] = useState(false);
  const [paidLeave, setPaidLeave] = useState(false);
  const [sickLeave, setSickLeave] = useState(false);
  const [casualLeave, setCasualLeave] = useState(false);
  const [earnedLeave, setEarnedLeave] = useState(false);
  const [compOff, setCompOff] = useState(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const tempApprovers = [
    {
      id: 1,
      name: 'John Doe',
      label: 'John Doe',
      value: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Doe2',
      label: 'Jane Doe2',
      value: 'Jane Doe2',
    },
    {
      id: 3,
      name: 'Jane Doe3',
      label: 'Jane Doe3',
      value: 'Jane Doe3',
    },
  ];

  const [approver, setApprover] = useState(null);

  const selectLeaveType = type => {
    if (type === 'SL') {
      setSickLeave(true);
      setCasualLeave(false);
      setPaidLeave(false);
      setEarnedLeave(false);
      setCompOff(false);
    }
    if (type === 'CL') {
      setSickLeave(false);
      setCasualLeave(true);
      setPaidLeave(false);
      setEarnedLeave(false);
      setCompOff(false);
    }
    if (type === 'PL') {
      setSickLeave(false);
      setCasualLeave(false);
      setPaidLeave(true);
      setEarnedLeave(false);
      setCompOff(false);
    }
    if (type === 'EL') {
      setSickLeave(false);
      setCasualLeave(false);
      setPaidLeave(false);
      setEarnedLeave(true);
      setCompOff(false);
    }

    if (type === 'CF') {
      setSickLeave(false);
      setCasualLeave(false);
      setPaidLeave(false);
      setEarnedLeave(false);
      setCompOff(true);
    }
  };

  return (
    <>
      <HeaderComponent hideBackIcon>Submit Leave</HeaderComponent>
      <Container pb={79}>
        <KeyboardAvoidingComponent>
          <View style={[]}>
            <View style={[ES.mt1]}>
              <View style={[ES.bgLight, ES.rounded10, ES.p2, ES.gap3]}>
                <NormalText
                  center
                  size={20}
                  fontFamily={redHatDisplayBold}
                  color={primaryColor}>
                  select applicable leave type
                </NormalText>
                <View style={[]}>
                  <View style={[, ES.gap3]}>
                    <RadioButton
                      selected={sickLeave}
                      method={() => selectLeaveType('SL')}
                      totalLeaves={9}
                      usedLeaves={0}
                      placeholder={'Sick leave'}
                    />
                    <RadioButton
                      method={() => selectLeaveType('CL')}
                      selected={casualLeave}
                      totalLeaves={9}
                      usedLeaves={1}
                      placeholder={'Casual leave'}
                    />
                    <RadioButton
                      method={() => selectLeaveType('PL')}
                      selected={paidLeave}
                      totalLeaves={9}
                      usedLeaves={8}
                      placeholder={'Paid leave'}
                    />
                    <RadioButton
                      method={() => selectLeaveType('CF')}
                      selected={compOff}
                      totalLeaves={9}
                      usedLeaves={9}
                      placeholder={'comp off '}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={[ES.mt1]}>
              <View style={[ES.bgLight, ES.rounded10, ES.p2, ES.gap3]}>
                <NormalText
                  center
                  size={20}
                  fontFamily={redHatDisplayBold}
                  color={primaryColor}>
                  select applicable leave date
                </NormalText>
                <View style={[]}>
                  <View style={[ES.gap3]}>
                    <DateInput
                      icon={calandarIcon}
                      value={startDate}
                      setValue={setStartDate}
                      placeholder={'Start Date'}
                    />
                    <DateInput
                      icon={calandarIcon}
                      value={endDate}
                      setValue={setEndDate}
                      placeholder={'End Date'}
                    />
                    <CheckBox
                      method={() => setHalfDay(!halfDay)}
                      selected={halfDay}
                      placeholder={'Set as half days'}
                    />
                  </View>
                </View>
                <View></View>
              </View>
            </View>

            <View style={[ES.mt1]}>
              <View style={[ES.bgLight, ES.rounded10, ES.p2, ES.gap3]}>
                <NormalText
                  center
                  size={20}
                  fontFamily={redHatDisplayBold}
                  color={primaryColor}>
                  select the leave approver
                </NormalText>
                <View style={[]}>
                  <View style={[ES.gap3]}>
                    {/*  <InputComponent
                    icon={calandarIcon}
                    placeholder={'Start Date'}
                    /> */}
                    <SelectInput />
                  </View>
                </View>
                <View></View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingComponent>
      </Container>
      <View style={[ES.centerItems, ES.absolute, ES.w100, ES.bottom2]}>
        <Btn width={'85%'}>Submit</Btn>
      </View>
    </>
  );
};

export default SubmitLeave;

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
