import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import ModalComponent from '../../Components/ModalComponent';

import ChangePasswordModal from './components/ChangePasswordModal';
import axiosClient from '../../../axiosClient';

const Profile = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [passwordModal, setPasswordModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  /**
   * @function getCurrentUser
   * @description Gets the current user information
   * @author Team24
   * @version 1
   * @since 1.0.0
   */
  const getCurrentUser = async () => {
    setIsLoading(true);
    try {
      const res = await axiosClient.get(`/user/getcurrentuser`);
      console.log('Profile: ', res);
      if (res?.data?.result) {
        setName(res?.data?.result?.name);
        setOrganisation(res?.data?.result?.department?.name);
        setEmail(res?.data?.result?.email);
        setPhone(res?.data?.result?.mobile_no);
      }
    } catch (error) {}
    setIsLoading(false);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <HeaderComponent hideBackIcon logOut>
        Profile
      </HeaderComponent>

      <ChangePasswordModal
        isModalVisible={passwordModal}
        closeModal={() => setPasswordModal(false)}
        email={email?email:''}
      />

      <Container px={0} pb={0} isLoading={isLoading}>
        <View style={[ES.fx1, ES.justifyContentSpaceBetween]}>
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
                  toString
                />
              </View>
              <BtnOutLine
                method={() => setPasswordModal(true)}
                children={'Change Password'}
              />
            </View>
          </View>
          <View style={[ES.py4, ES.bgLight, ES.centerItems, {padding: 15}]}>
            <Btn method={() => navigation.navigate('AddEmployee')}>
              Add New Employee
            </Btn>
          </View>
        </View>
      </Container>
    </>
  );
};

export default Profile;
