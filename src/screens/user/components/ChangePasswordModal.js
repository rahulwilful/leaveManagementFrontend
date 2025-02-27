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

const ChangePasswordModal = ({isModalVisible, closeModal}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
        <Btn method={() => closeModal()}> Change Password </Btn>
      </ModalComponent>
    </>
  );
};

export default ChangePasswordModal;
