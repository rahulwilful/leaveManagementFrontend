import {
  View,
  Text,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  BackHandler,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ES from '../styles/ES';
import {
  modalBackgroundColor,
  modalColor,
  primaryColor,
  primaryColorOrange,
  primaryTextColor,
} from '../Constants/Colours';
import LinearGradient from 'react-native-linear-gradient';

import {CrossVectoreIcon} from '../Constants/VectoreIcons';

const ModalComponent = ({
  children,
  isModalVisible,
  closeModal,
  height,
  enableCross,
  centerItems,
  tempBorder,
  padding,
  px,
  py,
  gap,
  fx,
}) => {
  return (
    <>
      <StatusBar
        backgroundColor={'#202020'}
        barStyle="dark-content"
        animated={true}
      />
      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={closeModal}
        transparent={true}>
        <TouchableWithoutFeedback onPress={closeModal} style={[]}>
          <View
            style={[
              ES.fx1,
              ES.centerItems,
              ES.p1,

              {backgroundColor: modalBackgroundColor},
            ]}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <LinearGradient
                colors={modalColor}
                style={[s.modal, height ? {height: height} : null]}>
                <View
                  style={[
                    fx ? {flex: fx} : ES.fx1,
                    ES.p06,
                    tempBorder ? ES.tempBorder : null,
                    centerItems ? ES.centerItems : null,
                    gap ? {gap: gap} : null,

                    px ? {paddingHorizontal: px} : null,
                    py ? {paddingVertical: py} : null,
                  ]}>
                  {children}
                </View>
                <View
                  style={[s.modalClose, enableCross ? ES.dBlock : ES.dNone]}>
                  {/*
                  <TouchableOpacity onPress={closeModal} style={[]}>
                    <CrossVectoreIcon color={primaryTextColor} />
                  </TouchableOpacity>
                   */}
                </View>
              </LinearGradient>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default ModalComponent;

const s = StyleSheet.create({
  header: StyleSheet.flatten([ES.px1, ES.flexRow, ES.centerItems, ES.w100]),

  textInput: StyleSheet.flatten([
    {borderBottomWidth: 1, borderColor: primaryColor, borderRadius: 5},
    ES.w90,
    ES.px1,
    ES.f16,
  ]),
  modal: StyleSheet.flatten([
    ES.w90,

    ES.bgLight,
    ES.bRadius10,
    ES.shadow10,
    ES.overflowHidden,
    ES.flexRow,

    /* {borderWidth: 0.5, borderColor: '#000'}, */
  ]),
  modalClose: StyleSheet.flatten([
    ES.fx0,
    ES.absolute,
    ES.alignItemsEnd,
    ES.pt06,
    ES.pe06,

    ES.right0,
  ]),
});
