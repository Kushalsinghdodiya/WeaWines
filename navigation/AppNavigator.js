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
import IconFont from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Account from '../screens/Account';
import WineriesDetail from '../screens/WineriesDetail';
import Filters from '../screens/Filters';
import Profile from '../screens/Profile';
import ChangePassword from '../screens/ChangePassword';
import Address from '../screens/Address'
import MyRewardPoints from '../screens/MyRewardPoints';
import RewardsHistory from '../screens/RewardsHistory';
import MyRewards from '../screens/MyRewards';
import MyOrders from '../screens/MyOrders';
import CartItems from '../screens/CartItems';
import Checkout from '../screens/Checkout'
import TabViewExample from '../screens/scrollabletab';
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
            headerLeft:()=>( <IconFont name="chevron-back" style={{left:20,bottom:5, marginTop:10}} size={27} color="black" />),
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
            name="Cartitems"
            component={CartItems}
            options={{
              headerStyle: {
                backgroundColor: '#800101',
              },
              headerLeft:()=>( <IconFont name="chevron-back"style={{left:20,bottom:5, marginTop:10}} size={25} color="white" />),
              title: 'MY CART',
              headerTitleStyle: {
                color: '#ffffff',
                fontSize: 15,
              },

              headerTintColor: '#ffffff',
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
          name="TabViewExample"
          component={TabViewExample}
          options={{
            headerLeft:()=>( <IconFont name="chevron-back"style={{left:20,bottom:5, marginTop:10}} size={25} color="white" />),
            title: 'MY ORDERS',
            headerStyle: {
              backgroundColor: '#800101', //Set Header color
            },
           
            headerTitleStyle: {
              color: 'white',
              fontSize: 15,
            },
            headerRight:()=>(
              <Icons name="search" style={{right:20,bottom:5, marginTop:10}} size={22} color="white" />
            )
          }}s
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
            headerLeft:()=>( <IconFont name="chevron-back" style={{left:20,bottom:5, marginTop:10}} size={27} color="white" />),
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
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerLeft:()=>( <IconFont name="chevron-back"style={{left:20,bottom:5, marginTop:10}} size={25} color="white" />),
            title: 'PROFILE',
            headerStyle: {
              backgroundColor: '#800101', //Set Header color
            },
           
            headerTitleStyle: {
              color: 'white',
              fontSize: 15,
            },
            headerRight:()=>(
              <EvilIcons name="pencil" style={{right:20,bottom:5, marginTop:10}} size={25} color="white" />
            )
          }}
        />
         <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{
            headerLeft:()=>( <IconFont name="chevron-back"style={{left:20,bottom:5, marginTop:10}} size={25} color="white" />),
            title: 'CHANGE PASSWORD',
            headerStyle: {
              backgroundColor: '#800101', //Set Header color
            },
           
            headerTitleStyle: {
              color: 'white',
              fontSize: 15,
            },
           
          }}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={{
            headerLeft:()=>( <IconFont name="chevron-back"style={{left:20,bottom:5, marginTop:10}} size={25} color="white" />),
            title: 'MANAGE ADDRESS',
            headerStyle: {
              backgroundColor: '#800101', //Set Header color
            },
           
            headerTitleStyle: {
              color: 'white',
              fontSize: 15,
            },
            headerRight:()=>(
              <Icons name="plus" style={{right:20,bottom:5, marginTop:10}} size={25} color="white" />
            )
          }}
        />
         <Stack.Screen
          name="MyRewardPoints"
          component={MyRewardPoints}
          options={{
            headerLeft:()=>( <IconFont name="chevron-back"style={{left:20,bottom:5, marginTop:10}} size={25} color="white" />
            ),
            title: 'MY REWARD ',
            headerStyle: {
              backgroundColor: '#800101', //Set Header color
            },
           
            headerTitleStyle: {
              color: 'white',
              fontSize: 15,
            },
            headerRight:()=>(
              <Icons name="search" style={{right:20,bottom:5, marginTop:10}} size={22} color="white" />
            )
          }}
        />
         <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#800101',
              },
              headerLeft:()=>( <IconFont name="chevron-back"style={{left:20,bottom:5, marginTop:10}} size={25} color="white" />),
              headerTitleStyle: {
                color: '#ffffff',
                fontSize: 15,
              },

              headerTintColor: '#ffffff',
            }}
          />
        <Stack.Screen
          name="RewardsHistory"
          component={RewardsHistory}
          options={{
            
              headerLeft:()=>( <IconFont name="chevron-back"style={{left:20,bottom:5, marginTop:10}} size={25} color="white" />),
            title: 'REWARDS POINTS HISTORY',
            headerStyle: {
              backgroundColor: '#800101', //Set Header color
            },
           
            headerTitleStyle: {
              color: 'white',
              fontSize: 15,
            },
            headerRight:()=>(
              <Icons name="search" style={{right:20,bottom:5, marginTop:10}} size={22} color="white" />
            )
          }}
        />
         <Stack.Screen
          name="MyRewards"
          component={MyRewards}
          options={{
            headerLeft:()=>( <IconFont name="chevron-back"style={{left:20,bottom:5, marginTop:10}} size={25} color="white" />),
            title: 'MY REWARDS',
            headerStyle: {
              backgroundColor: '#800101', //Set Header color
            },
           
            headerTitleStyle: {
              color: 'white',
              fontSize: 15,
            },
            headerRight:()=>(
              <Icons name="search" style={{right:20,bottom:5, marginTop:10}} size={22} color="white" />
            )
          }}
        />
         <Stack.Screen
          name="MyOrders"
          component={MyOrders}
          options={{
            headerLeft:()=>( <IconFont name="chevron-back"style={{left:20,bottom:5, marginTop:10}} size={25} color="white" />),
            title: 'MY ORDERS',
            headerStyle: {
              backgroundColor: '#800101', //Set Header color
            },
           
            headerTitleStyle: {
              color: 'white',
              fontSize: 15,
            },
            headerRight:()=>(
              <Icons name="search" style={{right:20,bottom:5, marginTop:10}} size={22} color="white" />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
