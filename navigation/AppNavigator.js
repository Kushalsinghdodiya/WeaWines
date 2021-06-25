import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import WineriesDetail from '../screens/WineriesDetail';
import Home from '../screens/Home';
import Account from '../screens/Account';
import Updates from '../screens/Updates';
const Stack = createStackNavigator();

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerLeft: false,
            title: 'ACCOUNT',
            headerStyle: {
              backgroundColor: '#800101', //Set Header color
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 18,
            },
            headerRight:()=>(
              <Icon name="eye" style={{right:10,bottom:5}} size={25} color="black" />
            )
          }}
        />
       

       {/* <Stack.Screen
          name="Account"
          component={Updates}
          options={{
            title: 'ACCOUNT',
          }}
        /> */}
        <Stack.Screen
          name="WineriesDetais"
          component={WineriesDetail}
          options={{
            title: 'ANTOINE JOBARD',

            headerStyle: {
              backgroundColor: '#800101', //Set Header color
            },

            headerTitleStyle: {
              color: '#fff',
              fontSize: 18,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
