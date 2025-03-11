import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import Container from '../../Components/Container';
import {fullWhite, primaryColor, whiteTextColor} from '../../Constants/Colours';
import ES from '../../styles/ES';
import {team24Logo} from '../../Constants/ImagesAndIcons';
import HeadingText from '../../Components/Text/HeadingText';
import NormalDarkText from '../../Components/Text/NormalDarkText';
import {redHatDisplayRegular} from '../../Constants/Fonts';

const screenHeight = Dimensions.get('window').height;

const Team24 = () => {
  return (
    <>
      <Container bgColor={fullWhite} px={0}>
        <View style={[{height: screenHeight - 50}]}>
          <View style={[ES.fx1, ES.justifyContentCenter, ES.gap2]}>
            <Image
              source={team24Logo}
              style={[ES.h20, ES.w100, ES.objectFitContain]}
            />
            <HeadingText
              lineHeight={45}
              textCenter={true}
              color={primaryColor}
              size={38}>
              Attendance Monitor
            </HeadingText>
          </View>
          <View style={[ES.py1]}>
            <NormalDarkText
              size={18}
              fontFamily={redHatDisplayRegular}
              textCenter={true}>
              © 2025, Team24 Foods and Beverages
            </NormalDarkText>
          </View>
        </View>
      </Container>
    </>
  );
};

export default Team24;
