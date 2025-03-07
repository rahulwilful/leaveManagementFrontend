import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';

import ES from '../styles/ES';
import {
  darkTextColor,
  headerBackgroundColor,
  primaryColor,
  redButtonColor,
  whiteTextColor,
} from '../Constants/Colours';
import NormalText from './Text/NormalText';
import {useNavigation} from '@react-navigation/native';
import {backArrowIcon, logOutIcon} from '../Constants/ImagesAndIcons';
import {redHatDisplayRegular, redHatDisplaySemiBold} from '../Constants/Fonts';
import {toggleLogin} from '../Redux/actions/authorizationAction';
import {useDispatch} from 'react-redux';
import ModalComponent from './ModalComponent';
import Btn from './Buttons/Btn';
import {MMKV} from 'react-native-mmkv';
const storage = new MMKV();
const screenHeight = Dimensions.get('window').height;

const HeaderComponent = ({children, capitalize, hideBackIcon, logOut}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleLogOut = () => {
    console.log('handleLogout called');
    storage.delete('token');
    dispatch(toggleLogin(false));
  };

  return (
    <>
      <StatusBar
        backgroundColor={'#fff'}
        barStyle="dark-content"
        animated={true}
      />

      <ModalComponent
        isModalVisible={logoutModalVisible}
        closeModal={() => setLogoutModalVisible(false)}
        gap={20}
        px={10}
        py={20}>
        <NormalText textCenter={true} size={20} color={darkTextColor}>
          Confirm Logout ?
        </NormalText>
        <View style={[ES.flexRow, ES.justifyContentCenter, ES.gap1]}>
          <Btn method={() => setLogoutModalVisible(false)} width={'45%'}>
            Cancel
          </Btn>
          <Btn
            method={() => handleLogOut()}
            width={'45%'}
            bgColor={redButtonColor}>
            Log Out
          </Btn>
        </View>
      </ModalComponent>

      <View style={[s.header]}>
        <View style={[s.searchContainer]}>
          <TouchableOpacity
            style={[hideBackIcon ? ES.dNone : null]}
            onPress={() => navigation.goBack()}>
            <Image
              source={backArrowIcon}
              style={[ES.hs19, ES.ws19, ES.objectFitContain]}
            />
          </TouchableOpacity>

          <NormalText
            capitalize
            color={primaryColor}
            fontFamily={redHatDisplaySemiBold}
            size={20}>
            {children}
          </NormalText>
          <View style={[ES.fx1, ES.alignItemsEnd, logOut ? null : ES.dNone]}>
            <TouchableOpacity onPress={() => setLogoutModalVisible(true)}>
              <Image
                source={logOutIcon}
                style={[ES.hs29, ES.ws29, ES.objectFitContain]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default HeaderComponent;

const s = StyleSheet.create({
  header: StyleSheet.flatten([
    ES.py06,
    ES.w100,
    ES.justifyContentSpaceAround,
    ES.gap2,

    {
      backgroundColor: '#fff',
      height: 55,
    },
  ]),
  searchContainer: StyleSheet.flatten([
    ES.fx0,
    ES.gap3,
    ES.px2,
    ES.flexRow,
    ES.alignItemsCenter,
  ]),
});
