import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../../Components/HeaderComponent';
import Container from '../../Components/Container';
import ES from '../../styles/ES';
import NormalText from '../../Components/Text/NormalText';
import {fullWhite} from '../../Constants/Colours';
import {userIcon} from '../../Constants/ImagesAndIcons';
import InputComponent2 from '../../Components/Inputs/InputComponent2';
import BtnOutLine from '../../Components/Buttons/BtnOutLine';
import {Toast} from '../../Components/Toast/Toast';
import {keyBoardPhonePad} from '../../Constants/Fonts';
import Btn from '../../Components/Buttons/Btn';
import {useNavigation} from '@react-navigation/native';
import BtnOutLineLight from '../../Components/Buttons/BtnOutLineLight';

const AddEmployee = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const verifyInputs = () => {
    if (name == '') {
      Toast({message: 'Please enter name'});
      return false;
    }

    if (organisation == '') {
      Toast({message: 'Please enter organisation'});
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
                <InputComponent2
                  topPlaceHolder={'Organisation'}
                  value={organisation}
                  setValue={setOrganisation}
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
              </View>
              <BtnOutLine
                method={() => verifyInputs()}
                children={'Save Draft'}
              />
              <Btn>Add Employee</Btn>
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
