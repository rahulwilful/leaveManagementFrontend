import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import RadioButton from '../../Components/Inputs/RadioButton';
import InputComponent from '../../Components/Inputs/InputComponent';
import {calandarIcon} from '../../Constants/ImagesAndIcons';
import CheckBox from '../../Components/Inputs/CheckBox';
import Btn from '../../Components/Buttons/Btn';
import {Dropdown} from 'react-native-element-dropdown';
import SelectInput from '../../Components/Inputs/SelectInput';
import DateInput from '../../Components/Inputs/DateInput';
import KeyboardAvoidingComponent from '../../Components/KeyboardAvoidingComponent';
import axiosClient from '../../../axiosClient';
import {Toast} from '../../Components/Toast/Toast';

const SubmitLeave = () => {
  const [halfDay, setHalfDay] = useState(false);
  const [user, setUser] = useState(null);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [approver, setApprover] = useState(null);
  const [approvers, setApprovers] = useState([]);

  const [leaveType, setLeaveType] = useState(null);
  const [leaveTypes, setLeaveTypes] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('startDate: ', startDate);
    console.log('endDate: ', endDate);
  }, [startDate, endDate]);

  const getCurrent = async () => {
    // console.log('getCurrent called');
    try {
      const res = await axiosClient.get(`/user/getcurrentuser`);
      //console.log(' user: ', res);
      if (res?.data?.result) {
        setUser(res?.data?.result);
      }
    } catch (error) {
      console.log('error: ', error);
      if (error?.response?.data?.message) {
        Toast({message: error?.response?.data?.message});
      } else {
        Toast({message: 'Something went wrong'});
      }
    }
  };

  const getApprovers = async () => {
    //console.log('getApprovers called');
    try {
      const res = await axiosClient.get(`/user/getall/approvers`);
      //console.log('approvers: ', res);
      if (res?.data?.result) {
        setApprovers(res?.data?.result);
      }
    } catch (error) {
      console.log('error: ', error);
      if (error?.response?.data?.message) {
        Toast({message: error?.response?.data?.message});
      } else {
        Toast({message: 'Something went wrong'});
      }
    }
  };

  const getLeaveTypes = async () => {
    //console.log('getLeaveTypes called');
    try {
      const res = await axiosClient.get(`/leave/type/getall`);
      // console.log('leaveTypes: ', res);
      if (res?.data?.result) {
        setLeaveTypes(res?.data?.result);
      }
    } catch (error) {
      console.log('error: ', error);
      if (error?.response?.data?.message) {
        Toast({message: error?.response?.data?.message});
      } else {
        Toast({message: 'Something went wrong'});
      }
    }
  };

  const callFunctions = async () => {
    setIsLoading(true);
    await getCurrent();
    await getApprovers();
    await getLeaveTypes();
    setIsLoading(false);
  };

  useEffect(() => {
    callFunctions();
  }, []);

  const varifyInputs = () => {
    if (!leaveType) {
      Toast({message: 'Please select leave type'});
      return false;
    }
    if (!startDate) {
      Toast({message: 'Please select start date'});
      return false;
    }
    if (!endDate) {
      Toast({message: 'Please select end date'});
      return false;
    }
    if (startDate > endDate) {
      Toast({message: 'Start date should be less than end date'});
      return false;
    }
    if (!approver) {
      Toast({message: 'Please select approver'});
      return false;
    }

    return true;
  };

  const addLeave = async () => {
    if (!varifyInputs()) return;

    const form = {
      employee_id: user?._id,
      start_date: startDate,
      end_date: endDate,
      approver_id: approver?._id,
      leave_type: leaveType?._id,
      half_day: halfDay,
    };

    console.log('form: ', form);

    try {
      const res = await axiosClient.get(`/leave/log/add`);
      console.log('res: ', res);
      if (res?.data?.result) {
        setLeaveTypes(res?.data?.result);
      }
    } catch (error) {
      console.log('error: ', error);
      if (error?.response?.data?.message) {
        Toast({message: error?.response?.data?.message});
      } else {
        Toast({message: 'Something went wrong'});
      }
    }
  };

  return (
    <>
      <HeaderComponent hideBackIcon>Submit Leave</HeaderComponent>
      <Container
        pb={79}
        isLoading={isLoading}
        refreshing={isLoading}
        refreshFunction={callFunctions}>

        <View style={[ES.mt1, leaveTypes.length <= 0 ? ES.dNone : null]}>
          <View style={[ES.bgLight, ES.rounded10, ES.p2, ES.gap3]}>
            <NormalText
              center
              size={20}
              fontFamily={redHatDisplayBold}
              color={primaryColor}>
              select applicable leave type
            </NormalText>
            <View style={[]}>
              <View style={[]}>
                <FlatList
                  data={leaveTypes}
                  contentContainerStyle={[ES.gap3]}
                  renderItem={({item}) => (
                    <RadioButton
                      selected={item?._id == leaveType?._id}
                      method={() => setLeaveType(item)}
                      totalLeaves={0}
                      usedLeaves={0}
                      placeholder={item ? item.name : 'NA'}
                    />
                  )}
                />
              </View>
            </View>
          </View>
        </View>

        <KeyboardAvoidingComponent>
          <View style={[]}>
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
                    <SelectInput
                      options={approvers}
                      lableFeild={'name'}
                      valueFeild={'_id'}
                      value={approver}
                      setValue={setApprover}
                      placeholder={'Approver'}
                    />
                  </View>
                </View>
                <View></View>
              </View>
            </View>

          </View>
        </KeyboardAvoidingComponent>
      </Container>

      <View style={[ES.centerItems, ES.absolute, ES.w100, ES.bottom2]}>
        <Btn method={() => addLeave()} width={'85%'}>
          Submit
        </Btn>
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
