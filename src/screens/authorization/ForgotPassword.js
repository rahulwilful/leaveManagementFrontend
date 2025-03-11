import {View, Text, StyleSheet, Image, ToastAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import KeyboardAvoidingComponent from '../../Components/KeyboardAvoidingComponent';
import ES from '../../styles/ES';
import LinearGradient from 'react-native-linear-gradient';
import {
  backgroundColorWhite,
  lightDarkColor,
  textColorOrange,
  whiteTextColor,
} from '../../Constants/Colours';
import {
  emailIcon,
  padLockIcon,
  team24Logo,
} from '../../Constants/ImagesAndIcons';
import HeadingText from '../../Components/Text/HeadingText';
import {
  poppinsBlack,
  poppinsBold,
  poppinsLight,
  poppinsSemiBold,
  poppinsThin,
  redHatDisplayRegular,
  redHatDisplaySemiBold,
} from '../../Constants/Fonts';
import {TextInput} from 'react-native-gesture-handler';
import InputComponent from '../../Components/Inputs/InputComponent';
import Btn from '../../Components/Buttons/Btn';
import NormalText from '../../Components/Text/NormalText';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const showToast = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const varifyInputs = () => {
    if (email === '') {
      showToast('Please enter email');
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter valid email');
      return false;
    }
    if (password == '' || password.length < 6) {
      showToast('Please enter valid password');
      return false;
    }
    return true;
  };

  return (
    <>
      <KeyboardAvoidingComponent>
        <View style={[ES.w100, ES.screenHeight, ES.relative]}>
          <LinearGradient
            colors={['#ffffff', '#2bae9d']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={[s.topHalf]}>
            <View style={[ES.w100, ES.hs180, ES.centerItems]}>
              <Image
                source={team24Logo}
                style={[ES.h80, ES.objectFitContain]}
              />
            </View>
            <View style={[ES.w100, ES.hs100, ES.centerItems, ES.px3]}>
              <HeadingText
                lineHeight={45}
                center
                color={whiteTextColor}
                size={38}>
                Attendance Monitor
              </HeadingText>
            </View>
          </LinearGradient>
          <View style={[s.bottomHalf]}>
            <View style={[s.container]}>
              <View style={[ES.w100, ES.gap2]}>
                <HeadingText
                  center
                  size={30}
                  fontFamily={redHatDisplaySemiBold}
                  color={lightDarkColor}
                >
                  Forgot Password?
                </HeadingText>
                <NormalText center size={14}>
                  Contact your team lead to rest-set your password by sending a
                  request to using your registered email ID
                </NormalText>
              </View>
              <View style={[ES.gap3]}>
                <InputComponent
                  icon={emailIcon}
                  value={email}
                  setValue={text => setEmail(text)}
                  placeholder={'Work Mail ID'}
                />
              </View>
              <View style={[ES.w100, ES.gap3]}>
                <Btn> Send Request</Btn>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingComponent>
    </>
  );
};

export default ForgotPassword;

const s = StyleSheet.create({
  topHalf: StyleSheet.flatten([
    {flex: 0.45},
    ES.centerItems,
    ES.w100,
    ES.py4,
    ES.gap4,
  ]),
  bottomHalf: StyleSheet.flatten([
    ES.absolute,
    ES.centerItems,
    ES.h56,
    ES.w100,
    ES.z10,
    ES.bottom0,

    ES.roundedTop18,
    ES.overflowHidden,
    ES.centerItems,
    ES.pb5,

    {backgroundColor: backgroundColorWhite},
  ]),
  container: StyleSheet.flatten([
    ES.px1,
    ES.w85,
    ES.h85,
    ES.gap5,

    {backgroundColor: backgroundColorWhite},
  ]),
  inpuStyle: StyleSheet.flatten([
    ES.w100,
    ES.f20,
    ES.tempBorder,
    ES.bRadius5,

    ES.px3,
    {backgroundColor: backgroundColorWhite},
  ]),
});
