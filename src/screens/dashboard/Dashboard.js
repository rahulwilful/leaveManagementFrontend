import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import ES from '../../styles/ES';
import HeaderComponent from '../../Components/HeaderComponent';
import Container from '../../Components/Container';

import {darkTextColor} from '../../Constants/Colours';
import DepartmentCard from '../../Components/Cards/DepartmentCard';
import NormalDarkText from '../../Components/Text/NormalDarkText';
import EmployeeLeaveCard from '../../Components/Cards/EmployeeLeaveCard';

const Dashboard = () => {
  const [password, setPassword] = useState('');

  return (
    <>
      <HeaderComponent hideBackIcon>
        Attendance Monitor <Text style={[ES.uppercase]}>(HR)</Text>
      </HeaderComponent>

      <Container>
        <View style={[ES.gap1]}>
          <View style={[]}>
            <NormalDarkText textCenter size={18} color={darkTextColor}>
              Departments and Employees
            </NormalDarkText>
          </View>
          <View style={[ES.w100, ES.flexRow, ES.flexWrap, ES.gap3]}>
            <DepartmentCard
              department={'Team 24 Foods & Retail'}
              totalEmployees={9}
              employees={9}
            />
            <DepartmentCard
              department={'Team 24 Foods & Retail'}
              totalEmployees={9}
              employees={9}
            />
            <DepartmentCard
              department={'Team 24 Foods & Retail'}
              totalEmployees={9}
              employees={9}
            />
            <DepartmentCard
              department={'Team 24 Foods & Retail'}
              totalEmployees={9}
              employees={9}
            />
            <DepartmentCard
              department={'Team 24 Foods & Retail'}
              totalEmployees={9}
              employees={9}
            />
          </View>

          <View style={[]}>
            <NormalDarkText textCenter size={18} color={darkTextColor}>
              Employees On leave
            </NormalDarkText>
          </View>
          <View style={[ES.gap2, ES.pb2]}>
            <EmployeeLeaveCard />
            <EmployeeLeaveCard />
            <EmployeeLeaveCard />
            <EmployeeLeaveCard />
            <EmployeeLeaveCard />
            <EmployeeLeaveCard />
            <EmployeeLeaveCard />
            <EmployeeLeaveCard />
            <EmployeeLeaveCard />
            <EmployeeLeaveCard />
            <EmployeeLeaveCard />
            <EmployeeLeaveCard />
            <EmployeeLeaveCard />
            <EmployeeLeaveCard />
            <EmployeeLeaveCard />
            <EmployeeLeaveCard />
          </View>
        </View>
      </Container>
    </>
  );
};

export default Dashboard;
