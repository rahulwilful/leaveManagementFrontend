import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../Components/Container';
import HeaderComponent from '../../Components/HeaderComponent';
import NormalDarkText from '../../Components/Text/NormalDarkText';
import DepartmentCard from '../../Components/Cards/DepartmentCard';
import ES from '../../styles/ES';
import HeadingText from '../../Components/Text/HeadingText';
import {redHatDisplaySemiBold} from '../../Constants/Fonts';
import {blackTextColor} from '../../Constants/Colours';
import EmployeeCard from '../../Components/Cards/EmployeeCard';
import {useNavigation} from '@react-navigation/native';

const Department = () => {
  const [refreshing, setRefreshing] = useState(false);

  const refreshFunction = () => {
    console.log('refreshFunction called');
    setRefreshing(true);
    const timer = setTimeout(() => {
      console.log('refreshFunction called2');
      setRefreshing(false);
      clearTimeout(timer);
    }, 4000);
  };

  useEffect(() => {
    console.log('refreshing', refreshing);
  }, [refreshing]);

  return (
    <>
      <HeaderComponent>Department</HeaderComponent>
      <Container
        py={5}
        refreshing={refreshing}
        refreshFunction={refreshFunction}>
        <View style={[ES.w100, ES.gap3]}>
          <View style={[ES.flexRow, ES.w100, ES.gap1, ES.px02, ES.my2]}>
            <View style={[ES.fx5, ES.justifyContentCenter]}>
              <HeadingText lineHeight={25} size={22}>
                Team 24 Foods and Beverages
              </HeadingText>
            </View>
            <View style={[ES.fx2]}>
              <DepartmentCard
                fontFamily={redHatDisplaySemiBold}
                width={'100%'}
                totalEmployees={10}
              />
            </View>
          </View>
          <View style={[]}>
            <NormalDarkText center size={18} color={blackTextColor}>
              List Of Employees
            </NormalDarkText>
          </View>

          <View style={[ES.gap2]}>
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
          </View>
        </View>
      </Container>
    </>
  );
};

export default Department;
