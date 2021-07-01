import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import bottomNavigator from './bottomTab';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Updates from '../screens/Updates';
import PriceList from '../screens/Price';
import Icons from 'react-native-vector-icons/Feather';
import Account from '../screens/Account';
import WineriesDetail from '../screens/WineriesDetail';
import Filters from '../screens/Filters';
const Stack = createStackNavigator();

const AppNavigator = props => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
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
           
            headerStyle: {
              backgroundColor: 'transparent', //Set Header color
            },

            headerTitleStyle: {
              color: 'transparent',
              fontSize: 15,
            },
          }}
        />
         <Stack.Screen
          name="bottomNavigator"
          component={bottomNavigator}
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
          name="Updates"
          component={Updates}
          options={{
            headerShown: false,
          
          }}
        />
         <Stack.Screen
          name="PriceList"
          component={PriceList}
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
              fontSize: 15,
            },
            headerRight:()=>(
              <Icons name="shopping-bag" style={{right:20,bottom:5, marginTop:10}} size={25} color="white" />
            )
          }}
        />
           <Stack.Screen
          name="WineriesDetais"
          component={WineriesDetail}
          options={{
            title: 'ANTOINE JOBARD',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#800101', //Set Header color
            },

            headerTitleStyle: {
              color: '#fff',
              fontSize: 15,
            },
          }}
        />

          <Stack.Screen
          name="Filters"
          component={Filters}
          options={{
            title: 'FILTERS',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#800101', //Set Header color
            },

            headerTitleStyle: {
              color: '#fff',
              fontSize: 15,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
