import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';

import {Input, Button} from 'react-native-elements';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default function Account({route, navigation}) {
  return (
    <View style={styles.container}>
       <View
        style={{
          flexDirection: 'row',
          width: widthPercentageToDP(100),
          height: heightPercentageToDP(7),
          alignSelf: 'center',
          marginTop: -10,
          backgroundColor: '#800101',
        }}>
        <View
          style={{
            justifyContent: 'flex-start',
            width: widthPercentageToDP(80),
          }}>
          <Text
            style={{
              textTransform: 'uppercase',
              marginLeft: 25,
              color: 'white',
              textAlign: 'left',
              marginTop: 22,
              alignSelf: 'flex-start',
              fontSize: 18,
            }}>
          Account
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            marginTop: 22,
            flexDirection: 'row',
          }}>
         
          <Image
            style={{marginLeft: 30}}
            source={require('../App/assets/shopping_bag_black_24dp.png')}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col1}>
          <View style={{ backgroundColor:'#cddbe4',alignItems: 'center',width: 110, height: 110,borderRadius:60,justifyContent:'center'}}>
          <Image style={{alignSelf:'center'}} source={require('../App/assets/cup.png')} />
            {/* <Image
              style={{width: 120, height: 120}}
              source={require('../navigation/assets/images/user.png')}
            /> */}
          </View>
        </View>

        <View style={styles.col2}>
          <Text style={{fontSize: 20}}>John Doe</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={{fontSize: 15, color: '#800101'}}>{" "}Edit Profile</Text>
          </TouchableOpacity>

          <Button
            buttonStyle={styles.loginBtn}
            titleStyle={{fontSize: 12}}
            title="Total Points : 22,364"
          />
        </View>
      </View>

      <View style={styles.subcontain}>
        <TouchableOpacity onPress={() => navigation.navigate('Cartitems')}>
        <View style={{justifyContent:'space-between', flexDirection: 'row', padding: 5}}>
            <Text style={styles.options}>My Cart</Text>
            <Image  source={require('../App/assets/Path153.png')} style={{height:12,width:12,marginTop:10}}/>
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            marginTop: 10,
            marginBottom: 10,
          }}
        />

        <TouchableOpacity  onPress={() => navigation.navigate('Address')}>
        <View style={{justifyContent:'space-between', flexDirection: 'row', padding: 5}}>
            <Text style={styles.options}>Manage Address</Text>
            <Image  source={require('../App/assets/Path153.png')} style={{height:12,width:12,marginTop:10}}/>
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            marginTop: 10,
            marginBottom: 10,
          }}
        />

        <TouchableOpacity  onPress={() => navigation.navigate('TabViewExample')}>
        <View style={{justifyContent:'space-between', flexDirection: 'row', padding: 5}}>
            <Text style={styles.options}>My Order</Text>
          <Image  source={require('../App/assets/Path153.png')} style={{height:12,width:12,marginTop:10}}/>
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            marginTop: 10,
            marginBottom: 10,
          }}
        />

        {/* <TouchableOpacity  onPress={() => navigation.navigate('MyRewardPoints')}>
        <View style={{justifyContent:'space-between', flexDirection: 'row', padding: 5}}>
            <Text style={styles.options}>My Rewards </Text>
            <Image  source={require('../App/assets/Path153.png')} style={{height:12,width:12,marginTop:10}}/>
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            marginTop: 10,
            marginBottom: 10,
          }}
        /> */}
        {/* <TouchableOpacity  onPress={() => navigation.navigate('MyRewards')}>
          <View style={{justifyContent:'space-between', flexDirection: 'row', padding: 5}}>
            <Text style={styles.options}>My Rewards </Text>
            <Image  source={require('../App/assets/Path153.png')} style={{height:12,width:12,marginTop:10}}/>
          </View>
        </TouchableOpacity> */}
        

        <View style={{display: 'flex', alignSelf: 'center'}}>
          <Button onPress={() => navigation.navigate('SignIn')} buttonStyle={styles.logout} title="LOGOUT" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f3f3f3',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  col1: {
    width: '40%',
    paddingTop: 15,
    marginTop:20,
    paddingLeft:15,
   
  },
  col2: {
    width: '60%',
    justifyContent: 'center',
    paddingTop: 20,
    marginTop:20
  },

  loginBtn: {
    backgroundColor: '#800101',
    borderRadius: 5,
    height: 35,
    width: '60%',
    marginLeft:1,

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  subcontain: {
    padding: 10,
    marginTop:20
  },
  options: {
    fontSize: 16,
    marginTop: 8,
    width: '90%',
    alignItems: 'center',
    color: '#505050',
  },
  logout: {
    backgroundColor: '#800101',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 10,
    width: '100%',
    fontSize:14
  },
});
