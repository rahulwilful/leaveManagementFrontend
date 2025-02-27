import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../../Components/HeaderComponent';
import Container from '../../Components/Container';
import ES from '../../styles/ES';
import NameCard from '../../Components/Cards/NameCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NormalText from '../../Components/Text/NormalText';
import {primaryColor, whiteTextColor} from '../../Constants/Colours';
import {
  leftArrowCircleIcon,
  rightArrowCircleIcon,
} from '../../Constants/ImagesAndIcons';
import LeaveCard from '../../Components/Cards/LeaveCard';
import Btn from '../../Components/Buttons/Btn';

const LeaveReport = () => {
  const [viewYearly, setViewYearly] = useState(false);
  return (
    <>
      <HeaderComponent>Leave Report</HeaderComponent>
      <Container px={0}>
        <View style={[ES.w100, ES.gap3]}>
          <View style={[ES.px08]}>
            <NameCard name={'rahul patil'} />
          </View>
          <View style={[ES.flexRow, ES.w100]}>
            <View style={[ES.fx1]}>
              <TouchableOpacity
                onPress={() => setViewYearly(false)}
                style={[
                  !viewYearly ? {backgroundColor: primaryColor} : ES.bgLight,
                  ES.py1,
                  ES.fx1,
                ]}>
                <NormalText
                  size={18}
                  color={!viewYearly ? whiteTextColor : primaryColor}
                  center>
                  Monthly
                </NormalText>
              </TouchableOpacity>
            </View>
            <View style={[ES.fx1]}>
              <TouchableOpacity
                onPress={() => setViewYearly(true)}
                style={[
                  viewYearly ? {backgroundColor: primaryColor} : ES.bgLight,
                  ES.py1,
                  ES.fx1,
                ]}>
                <NormalText
                  size={18}
                  center
                  color={viewYearly ? whiteTextColor : primaryColor}>
                  Yearly
                </NormalText>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[ES.px1]}>
            <View
              style={[
                {backgroundColor: primaryColor},
                ES.p1,
                ES.flexRow,
                ES.rounded8,
              ]}>
              <Image
                source={leftArrowCircleIcon}
                style={[ES.hs34, ES.ws34, ES.objectFitContain]}
              />
              <View style={[ES.fx1, ES.justifyContentCenter]}>
                <NormalText size={18} color={whiteTextColor} center>
                  January 2025
                </NormalText>
              </View>
              <Image
                source={rightArrowCircleIcon}
                style={[ES.hs34, ES.ws34, ES.objectFitContain]}
              />
            </View>
          </View>
          <View
            style={[
              ES.px1,
              ES.gap2,
              !viewYearly ? null : ES.dNone,
              {paddingBottom: 70},
            ]}>
            <LeaveCard date={' 2025-01-01 to 2025-01-01'} leaves={8} />
            <LeaveCard date={' 2025-01-01 to 2025-01-01'} leaves={8} />
            <LeaveCard date={' 2025-01-01 to 2025-01-01'} leaves={8} />
            <LeaveCard date={' 2025-01-01 to 2025-01-01'} leaves={8} />
            <LeaveCard date={' 2025-01-01 to 2025-01-01'} leaves={8} />
            <LeaveCard date={' 2025-01-01 to 2025-01-01'} leaves={8} />
            <LeaveCard date={' 2025-01-01 to 2025-01-01'} leaves={8} />
            <LeaveCard date={' 2025-01-01 to 2025-01-01'} leaves={8} />
            <LeaveCard date={' 2025-01-01 to 2025-01-01'} leaves={8} />
            <LeaveCard date={' 2025-01-01 to 2025-01-01'} leaves={8} />
            <LeaveCard date={' 2025-01-01 to 2025-01-01'} leaves={8} />
            <LeaveCard date={' 2025-01-01 to 2025-01-01'} leaves={8} />
            <LeaveCard date={' 2025-01-01 to 2025-01-01'} leaves={8} />
          </View>
          <View
            style={[
              ES.px1,
              ES.gap2,
              viewYearly ? null : ES.dNone,
              {paddingBottom: 70},
            ]}>
            <LeaveCard date={' january'} leaves={8} />
            <LeaveCard date={' january'} leaves={8} />
            <LeaveCard date={' january'} leaves={8} />
            <LeaveCard date={' january'} leaves={8} />
            <LeaveCard date={' january'} leaves={8} />
          </View>
        </View>
      </Container>
      <View style={[ES.centerItems, ES.absolute, ES.w100, ES.bottom2]}>
        <Btn width={'90%'}>Download Report</Btn>
      </View>
    </>
  );
};

export default LeaveReport;
