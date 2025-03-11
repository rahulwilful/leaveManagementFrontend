import {View, Text} from 'react-native';
import React, {useState} from 'react';
import ModalComponent from '../../../Components/ModalComponent';
import HeadingText from '../../../Components/Text/HeadingText';
import InputComponent2 from '../../../Components/Inputs/InputComponent2';
import {
  redHatDisplayRegular,
  redHatDisplaySemiBold,
} from '../../../Constants/Fonts';
import Btn from '../../../Components/Buttons/Btn';
import axiosClient from '../../../../axiosClient';
import {Toast} from '../../../Components/Toast/Toast';

const ChangePasswordModal = ({isModalVisible, closeModal, email}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [buttonLoading, setButtonLoading] = useState(false);

  const varifyInputs = () => {
    if (currentPassword == '') {
      Toast({message: 'Please enter valid password'});
      return false;
    }
    if (newPassword == '') {
      Toast({message: 'Please enter new password'});
      return false;
    }
    if (newPassword != confirmPassword) {
      Toast({message: 'Incorrect confirm password'});
      return false;
    }
    return true;
  };

  const handleResetPassword = async () => {
    if (varifyInputs() == false) return;

    setButtonLoading(true);
    const form = {
      email: email ? email : '',
      old_password: currentPassword,
      password: newPassword,
    };

    console.log('ChangePasswordModal: ', form);

    try {
      const res = await axiosClient.post(`/user/reset/password`, form);
      console.log('ChangePassword Modal: ', res);
      if (res) {
        Toast({message: 'Password changed successfully'});
        closeModal();
        setNewPassword('');
        setCurrentPassword('');
        setConfirmPassword('');
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

  return (
    <>
      <ModalComponent
        isModalVisible={isModalVisible}
        closeModal={() => closeModal()}
        gap={20}
        px={10}
        py={20}
        centerItems
        fx={0}>
        <HeadingText fontFamily={redHatDisplaySemiBold} size={24} textCenter>
          Change Password
        </HeadingText>
        <InputComponent2
          topPlaceHolder={'Current Password'}
          value={currentPassword}
          setValue={setCurrentPassword}
          hideText
        />

        <InputComponent2
          topPlaceHolder={'New Password'}
          value={newPassword}
          setValue={setNewPassword}
          hideText
        />
        <InputComponent2
          topPlaceHolder={'Confirm Password'}
          value={confirmPassword}
          setValue={setConfirmPassword}
          hideText
        />

        <Btn method={() => handleResetPassword()} isLoading={buttonLoading}>
          {' '}
          Change Password{' '}
        </Btn>
      </ModalComponent>
    </>
  );
};

export default ChangePasswordModal;
