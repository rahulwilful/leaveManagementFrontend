import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ES from '../../styles/ES';
import HeaderComponent from '../../Components/HeaderComponent';
import Container from '../../Components/Container';
import WelcomeCard from '../../Components/Cards/WelcomeCard';
import NormalDarkText from '../../Components/Text/NormalDarkText';
import {darkTextColor} from '../../Constants/Colours';

import HomeLeaveCard from './components/HomeLeaveCard';
import CalanderCompnent from './components/CalanderComponent';
import {redHatDisplaySemiBold} from '../../Constants/Fonts';

const LeaveDot = ({leaveType, color}) => {
  return (
    <View
      style={[
        ES.w47,
        ES.flexRow,
        ES.alignItemsCenter,
        ES.px06,
        ES.py02,
        ES.gap2,
      ]}>
      <View
        style={[
          ES.hs30,
          ES.ws30,
          ES.bgPrimary,
          {borderRadius: 50},
          {backgroundColor: color},
          ES.justifyContentCenter,
          ES.alignItemsCenter,
        ]}
      />
      <NormalDarkText size={15} fontFamily={redHatDisplaySemiBold}>
        {leaveType ? leaveType : 'N/A'}
      </NormalDarkText>
    </View>
  );
};

const Home = ({navigation}) => {
  const [dates, setDates] = useState([]);

  const [i, setI] = useState(0);

  const onDateSelect = date => {
    let tempDates = {...dates};
    let temp = {
      [date]: {
        selected: true,
        color: colors[i],
      },
    };

    tempDates = {...tempDates, ...temp};
    setDates(tempDates);
  };

  return (
    <>
      <HeaderComponent hideBackIcon>Home</HeaderComponent>
      <Container pb={10} pt={10} gap={15} isLoading={false}>
        <WelcomeCard name={'Rahul Patil'} />

        <View style={[ES.gap2]}>
          
          <NormalDarkText textCenter size={18} color={darkTextColor}>
            Number of Leaves Remaining
          </NormalDarkText>

          <View style={[ES.w100, ES.flexRow, ES.flexWrap, ES.gap3]}>
            <HomeLeaveCard
              width={'30%'}
              leaveType={'Casual Leaves'}
              totalLeaves={'5'}
            />

            <HomeLeaveCard
              width={'30%'}
              leaveType={'Sick Leaves'}
              totalLeaves={'7'}
            />

            <HomeLeaveCard
              width={'30%'}
              leaveType={'Earned Leaves'}
              totalLeaves={'9'}
            />
          </View>
        </View>
        <View>
          <CalanderCompnent />
        </View>
        <View
          style={[
            ES.p1,
            ES.bgLight,
            ES.rounded10,
            ES.flexRow,
            ES.flexWrap,
            ES.justifyContentCenter,
            ES.gap1,
            ES.shadow1,
          ]}>
          <LeaveDot color={'#00adf5'} leaveType="Sick Leaves" />
          <LeaveDot color={'#ff9800'} leaveType="Casual Leaves" />
          <LeaveDot color={'#8bc34a'} leaveType="Earned Leaves" />
          <LeaveDot color={'#D6CE00'} leaveType="Comp Off" />
        </View>
      </Container>
    </>
  );
};

export default Home;
