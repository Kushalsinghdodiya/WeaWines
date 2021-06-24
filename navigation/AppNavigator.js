import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import WineriesDetail from '../screens/WineriesDetail';
import Home from '../screens/Home';
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
          name="WineriesDetais"
          component={WineriesDetail}
          options={{
            title: 'ANTOINE JOBARD',

            headerStyle: {
              backgroundColor: '#800101', //Set Header color
            },
            // headerTintColor: '#fff', //Set Header text color

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
