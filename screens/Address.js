import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  StatusBar,

} from 'react-native';
import { CheckBox } from 'react-native-elements'
import {Input, Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Entypo';
import SafeAreaView from 'react-native-safe-area-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Card, CardItem, Container, } from 'native-base';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import axios from 'axios';
export default function Address({route, navigation}) {
  const [address, setAddress] = useState([]);
  useEffect(async () => {
    let token = await AsyncStorage.getItem('user_token',);
    console.log("as",token)
    var config = {
      method: 'get',
      url: 'https://weawines.shubhchintak.co/wp-json/letscms/v1/address/billing',
      headers: { 
        'letscms_token': token
      }
    };
    
    axios(config)
   

      .then((response) => {
        console.log("adsss", response.data.data.address)
        let arr = [];
        arr = [response.data];
        setAddress(response.data.data.address)

      });


  }, [])
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#800101" />
      {/* <Header
        leftComponent={{ icon: 'menu', color: 'white' }}
       
        /> */}

      <ScrollView>
      { address.length > 0 ?
      address.map((data, index) => {
        return (
        <View>
        <View style={{justifyContent: 'center', padding:10}}>
        <Card style={{ marginTop: 15, borderRadius: 10}}>
          <CardItem style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 15,
                fontWeight:'700',
                width: widthPercentageToDP(80),
              }}>
             Shipping Address
            </Text>
            <View style={{marginTop: 15}}>
              <Image
                style={{alignSelf: 'flex-end'}}
                source={require('../App/assets/edit_black_24dp.png')}
              />
            </View>
          </CardItem>
          <CardItem style={{marginTop:5}}>
            <Text style={{fontSize: 14, flexDirection: 'row', marginTop: -20}}>
            No:18, Sample Street,

            </Text>
           
          </CardItem>
          <CardItem style={{marginTop:5}}>
            <Text style={{fontSize: 14, flexDirection: 'row', marginTop: -20}}>
            Sample Building,
            </Text>
           
          </CardItem>
          <CardItem style={{marginTop:5}}>
            <Text style={{fontSize: 14, flexDirection: 'row', marginTop: -20}}>
            Sample City,
            </Text>
           
          </CardItem>
          <CardItem style={{marginTop:5,marginBottom: 15,}}>
            <Text style={{fontSize: 14, flexDirection: 'row', marginTop: -20}}>
            Singapore - 541 056
            </Text>
           
          </CardItem>
        </Card>
        </View>
        <View style={{flexDirection:'row',marginTop:-10}}>
        <CheckBox
        center
       
  style={{paddingTop:-10,backgroundColor:'white'}}
  checked={false}
/>


<Text style={{marginLeft:-15,marginTop:15}}>Same as billing address</Text>
        </View>
        <View style={{justifyContent: 'center', padding:10,marginTop:-10}}>
        <Card style={{ marginTop: 5, borderRadius: 10}}>
          <CardItem style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 15,
                fontWeight:'700',
                width: widthPercentageToDP(80),
              }}>
             Billing Address
            </Text>
            <View style={{marginTop: 15}}>
              <Image
                style={{alignSelf: 'flex-end'}}
                source={require('../App/assets/edit_black_24dp.png')}
              />
            </View>
          </CardItem>
          <CardItem style={{marginTop:5}}>
            <Text style={{fontSize: 14, flexDirection: 'row', marginTop: -20}}>
            No:18, Sample Street,

            </Text>
           
          </CardItem>
          <CardItem style={{marginTop:5}}>
            <Text style={{fontSize: 14, flexDirection: 'row', marginTop: -20}}>
            Sample Building,
            </Text>
           
          </CardItem>
          <CardItem style={{marginTop:5}}>
            <Text style={{fontSize: 14, flexDirection: 'row', marginTop: -20}}>
            Sample City,
            </Text>
           
          </CardItem>
          <CardItem style={{marginTop:5,marginBottom: 15,}}>
            <Text style={{fontSize: 14, flexDirection: 'row', marginTop: -20}}>
            Singapore - 541 056
            </Text>
           
          </CardItem>
        </Card>
        </View>
        </View>)}): <Text style={{marginLeft:15,marginTop:15,fontSize:18}}>No Address Found</Text> }

       
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  sub_container: {
    padding: 10,
    marginTop: 30,
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  col: {
    width: '50%',
  },
  SignupBtn: {
    backgroundColor: '#800101',
    borderRadius: 23,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  SignupText: {
    color: '#fff',
    fontSize: 20,
  },
  option3: {
    alignItems: 'center',
    margin: 5,
    marginTop: 60,
  },
  login: {
    color: '#800101',
    textDecorationLine: 'underline',
  },
  header: {
    display: 'flex',
    paddingLeft: 20,
    marginTop: 50,
  },
  forgetdiv: {
    alignItems: 'flex-end',
    paddingBottom: 30,
    paddingRight: 10,
  },
});
