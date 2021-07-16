import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import PriceList from '../screens/Price';
import SignIn from '../screens/SignIn';
import Updates from '../screens/Updates';
import Wineries from '../screens/Wineries';
import Account from '../screens/Account';
import HomeBtn from './HomeBtn';
const Tab = createBottomTabNavigator();
class bottomNavigator extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="red" barStyle="light-content" />
        <Tab.Navigator
          sceneContainerStyle={{padding: 10}}
          tabBarOptions={{
            activeTintColor: '#800101',
            style: {paddingBottom: '2%', height: 60},
          }}>
          <Tab.Screen
            name="Updates"
            component={Updates}
            options={{
              tabBarLabel: 'Updates',
              tabBarIcon: ({color, size}) => (
                <Image
                  source={require('../App/assets/campaign_black_24dp.png')}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Wineries"
            component={Wineries}
            options={{
              tabBarLabel: 'Wineries',
              tabBarIcon: ({color, size}) => (
                <Image
                  source={require('../App/assets/wine_bar_black_24dp.png')}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: '',
              tabBarIcon: () => <HomeBtn />,
              // tabBarIcon: ({ color, size }) => (
              //     <Image source={require('../App/assets/centerLogo.png', )} style={{height:40,width:40, marginTop:15}}/>
              // ),
            }}
          />
          <Tab.Screen
            name="Price List"
            component={PriceList}
            options={{
              tabBarLabel: 'Price List',

              tabBarIcon: ({color, size}) => (
                <Image
                  source={require('../App/assets/inventory_2_black_24dp.png')}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarLabel: 'Account',

              tabBarIcon: ({color, size}) => (
                <Image
                  source={require('../App/assets/person_outline_black_24dp.png')}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    );
  }
}
export default bottomNavigator;
