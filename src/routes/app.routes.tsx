import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../helpers/colors';

import Doctors from '../pages/Medicos';
import Patients from '../pages/Pacientes';

const Tab = createBottomTabNavigator();

const AuthRoutes: React.FC = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName = '';

        if (route.name === 'Medicos') {
          iconName = focused ? 'medico' : 'medico';
        } else if (route.name === 'Pacientes') {
          iconName = focused ? 'account' : 'account-outline';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.green,
      inactiveTintColor: colors.yellow,
      labelStyle: {fontSize: 14},
    }}>
    <Tab.Screen name="Medicos" component={Doctors} />
    <Tab.Screen name="Pacientes" component={Patients} />
  </Tab.Navigator>
);

export default AuthRoutes;
