import {View, Text, Image} from 'react-native';
<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../../Components/HeaderComponent';
import Container from '../../Components/Container';
import ES from '../../styles/ES';
=======
import React, {useState} from 'react';
import HeaderComponent from '../../Components/HeaderComponent';
import Container from '../../Components/Container';
import ES from '../../styles/ES';
import NormalText from '../../Components/Text/NormalText';
>>>>>>> origin/main
import {fullWhite} from '../../Constants/Colours';
import {userIcon} from '../../Constants/ImagesAndIcons';
import InputComponent2 from '../../Components/Inputs/InputComponent2';
import BtnOutLine from '../../Components/Buttons/BtnOutLine';
import {Toast} from '../../Components/Toast/Toast';
import {keyBoardPhonePad} from '../../Constants/Fonts';
import Btn from '../../Components/Buttons/Btn';
import {useNavigation} from '@react-navigation/native';
import BtnOutLineLight from '../../Components/Buttons/BtnOutLineLight';
<<<<<<< HEAD
import axiosClient from '../../../axiosClient';
import SelectInputOutline from '../../Components/Inputs/SelectInputOutline';
import CheckBox from '../../Components/Inputs/CheckBox';

const AddEmployee = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('rahul');
  const [organisation, setOrganisation] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('rahul@gmail.com');
  const [phone, setPhone] = useState('1111111111');
  const [password, setPassword] = useState('111111');
  const [approver, setApprover] = useState(false);

  const [depts, setDepts] = useState([]);
  const [roles, setRoles] = useState([]);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    console.log('role: ', role);
  }, [role]);

  const getDepts = async () => {
    try {
      const res = await axiosClient.get(`/department/getall`);
      //console.log('res?.data?.result: ', res?.data?.result);
      if (res?.data?.result) {
        setDepts(res?.data?.result);
      }
    } catch (error) {
      console.log('error: ', error);
      if (error?.response?.data?.message) {
        Toast({message: error?.response?.data?.message});
      } else {
        Toast({message: 'Error in retrieving Departments'});
      }
    }
  };

  const getRoles = async () => {
    try {
      const res = await axiosClient.get(`/role/getall`);
      //console.log('res?.data?.result: ', res?.data?.result);
      if (res?.data?.result) {
        setRoles(res?.data?.result);
      }
    } catch (error) {
      console.log('error: ', error);
      if (error?.response?.data?.message) {
        Toast({message: error?.response?.data?.message});
      } else {
        Toast({message: 'Error in retrieving Roles'});
      }
    }
  };

  useEffect(() => {
    getDepts();
    getRoles();
  }, []);
=======

const AddEmployee = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
>>>>>>> origin/main

  const verifyInputs = () => {
    if (name == '') {
      Toast({message: 'Please enter name'});
      return false;
    }

    if (organisation == '') {
<<<<<<< HEAD
      Toast({message: 'Please select organisation'});
      return false;
    }

    if (role == '') {
      Toast({message: 'Please select role'});
=======
      Toast({message: 'Please enter organisation'});
>>>>>>> origin/main
      return false;
    }

    if (email == '') {
      Toast({message: 'Please enter email'});
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      Toast({message: 'Please enter valid email'});
      return false;
    }

    if (phone == '') {
      Toast({message: 'Please enter phone'});
      return false;
    }
    return true;
  };

<<<<<<< HEAD
  const handleAddEmployee = async () => {
    if (verifyInputs() == false) return;
    setButtonLoading(true);
    const form = {
      name: name,
      email: email,
      mobile_no: phone,
      password: password,
      role_type: role,
      department: organisation,
    };

    try {
      const res = await axiosClient.post(`/user/add`, form);
      //console.log('res: ', res);
      if (res) {
        Toast({message: 'Employee added successfully'});
        navigation.goBack();
      }
    } catch (error) {
      console.log('error: ', error);
      if (error?.response?.data?.message) {
        Toast({message: error?.response?.data?.message});
      } else {
        Toast({message: 'Something went wrong'});
      }
    }
    setButtonLoading(false);
  };

=======
>>>>>>> origin/main
  return (
    <>
      <HeaderComponent>Add Employee</HeaderComponent>
      <Container px={0} pb={40}>
        <View style={[ES.fx1]}>
          <View style={[ES.px08]}>
            <View
              style={[
                ES.relative,
                {
                  backgroundColor: fullWhite,
                  marginTop: 70,
                  paddingHorizontal: 15,
                  paddingBottom: 15,
                },
                ES.py1,
                ES.rounded10,
                ES.gap3,
              ]}>
              <View style={[ES.relative, ES.hs55]}>
                <Image
                  source={userIcon}
                  style={[
                    ES.hs90,
                    ES.ws90,
                    ES.objectFitContain,
                    ES.absolute,
                    ES.left20,
                    {top: -55},
                  ]}
                />
              </View>
              <View style={[ES.gap3]}>
                <InputComponent2
                  topPlaceHolder={'Name'}
                  value={name}
                  setValue={setName}
                />
<<<<<<< HEAD
                <SelectInputOutline
                  topPlaceHolder={'Organisation'}
                  options={depts}
                  value={organisation}
                  setValue={setOrganisation}
                  lableFeild={'name'}
                  valueFeild={'_id'}
                />
                <SelectInputOutline
                  topPlaceHolder={'Role'}
                  options={roles}
                  value={role}
                  setValue={setRole}
                  lableFeild={'name'}
                  valueFeild={'_id'}
=======
                <InputComponent2
                  topPlaceHolder={'Organisation'}
                  value={organisation}
                  setValue={setOrganisation}
>>>>>>> origin/main
                />
                <InputComponent2
                  topPlaceHolder={'Email'}
                  value={email}
                  setValue={setEmail}
                />
                <InputComponent2
                  keyboardType={keyBoardPhonePad}
                  topPlaceHolder="Phone"
                  value={phone}
                  setValue={setPhone}
                />
                <InputComponent2
                  topPlaceHolder="Password"
                  value={password}
                  setValue={setPassword}
                  hideText={true}
                />
<<<<<<< HEAD
                <CheckBox
                  placeholder={'Approver'}
                  selected={approver}
                  method={() => setApprover(!approver)}
                />
              </View>
              <BtnOutLine children={'Save Draft'} />
              <Btn isLoading={buttonLoading} method={() => handleAddEmployee()}>
                Add Employee
              </Btn>
=======
              </View>
              <BtnOutLine
                method={() => verifyInputs()}
                children={'Save Draft'}
              />
              <Btn>Add Employee</Btn>
>>>>>>> origin/main
            </View>
          </View>
          <View style={[ES.py4, ES.centerItems, {padding: 15}]}>
            <BtnOutLineLight
              width={'90%'}
              method={() => navigation.navigate('AddEmployee')}>
              0 Draft
            </BtnOutLineLight>
          </View>
        </View>
      </Container>
    </>
  );
};

export default AddEmployee;
