import {
  View,
  Text,
  StyleSheet,
  Image,
  ToastAndroid,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
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
import Svg, {Circle, Rect} from 'react-native-svg';
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
import Container from '../../Components/Container';
import {useDispatch} from 'react-redux';
import {toggleLogin} from '../../Redux/actions/authorizationAction';
import {MMKV} from 'react-native-mmkv';
import axios from 'axios';
import axiosClient from '../../../axiosClient';

const screenHeight = Dimensions.get('window').height;

const storage = new MMKV();

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('management@gmail.com');
  const [password, setPassword] = useState('111111');

  const [buttonLoading, setButtonLoading] = useState(false);

  const dispatch = useDispatch();

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

  const handleLogin = async () => {
    //console.log('handleLogin called');
    if (varifyInputs() == false) return;
    setButtonLoading(true);
    const form = {
      email: email,
      password: password,
    };

    try {
      const res = await axiosClient.post(`/user/login`, form);
      if (res) {
        storage.set('token', res?.data?.token);
        dispatch(toggleLogin(true));
      }
    } catch (error) {
      console.log('signin error: ', error);
      if (error?.response?.data?.message) {
        showToast(error?.response?.data?.message);
      } else {
        showToast('Something went wrong');
      }
    }
    setButtonLoading(false);
  };

  return (
    <>
      <Container px={0} pb={0}>
        <View style={[ES.w100, {height: screenHeight}, ES.relative]}>
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
              <HeadingText
                center
                size={30}
                fontFamily={redHatDisplaySemiBold}
                color={lightDarkColor}>
                Login
              </HeadingText>
              <View style={[ES.gap3]}>
                <InputComponent
                  icon={emailIcon}
                  value={email}
                  setValue={text => setEmail(text)}
                  placeholder={'Work Mail ID'}
                />
                <InputComponent
                  hideText
                  icon={padLockIcon}
                  value={password}
                  setValue={text => setPassword(text)}
                  placeholder={'Password'}
                />
              </View>
              <View style={[ES.w100, ES.gap3]}>
                <Btn method={() => handleLogin()} isLoading={buttonLoading}>
                  {' '}
                  LogIn
                </Btn>
                <View style={[]}>
                  <NormalText
                    size={14}
                    fontFamily={redHatDisplayRegular}
                    center>
                    <Text style={[]}>
                      Forgot Password ?{' '}
                      <Text>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('ForgotPassword')}>
                          <Text
                            style={[
                              {
                                color: textColorOrange,
                                textDecorationLine: 'underline',
                              },
                            ]}>
                            Send Reset Link
                          </Text>
                        </TouchableOpacity>
                      </Text>
                    </Text>
                  </NormalText>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Container>
    </>
  );
};

export default SignIn;

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
    {backgroundColor: backgroundColorWhite},
  ]),
  container: StyleSheet.flatten([
    ES.px1,
    ES.w85,
    ES.h85,
    ES.gap6,

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
