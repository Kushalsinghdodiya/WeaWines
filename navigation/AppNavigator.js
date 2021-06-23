import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

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
          name="DailyTestSeries"
          component={SignUp}
          options={{
            headerShown: false,
            //  headerTitleStyle: {
            //     fontWeight: 'bold',

            //     color: '#000',
            //     fontSize: 18,
            // },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
