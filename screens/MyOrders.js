import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Input, Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Entypo';
import SafeAreaView from 'react-native-safe-area-view';
import * as Progress from 'react-native-progress';
import {Card, CardItem, Container} from 'native-base';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
export default function MyOrders({route, navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#800101" />
      {/* <Header
        leftComponent={{ icon: 'menu', color: 'white' }}
       
        /> */}

      <ScrollView>
        <View style={{justifyContent: 'center', padding: 15}}>
          <Card
            style={{
              marginTop: 15,
              height: heightPercentageToDP(16),
              borderRadius: 10,
             
            }}>
            <CardItem style={{flexDirection: 'row',justifyContent : 'space-between'}}>
             
              <View style={{alignSelf: 'center', paddingTop: 10}}>
                <Text
                  style={{
                    color: '#2e2e2e',
                    fontSize: 17,
                marginTop:-5,
                    fontWeight: '700',
                  }}>
                  Antoine Jobard
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, paddingTop:7}}>
                Meursault 1er Blagny
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, }}>
                Vintage: 2018
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, paddingTop:7}}>
                2nos x $S 148
                </Text>
              </View>
              <View style={{ paddingTop: 10,}}>
              <View style={{width:widthPercentageToDP(25),alignSelf:'flex-end',backgroundColor:'#f1c40f',borderRadius:5,}}>
                <Text
                  style={{
                      padding:5,
                    color: 'white',
                    fontSize: 13,
                    
                textAlign:'center',
                    fontWeight: '700',
                    textTransform:'uppercase'
                  }}>
                  on the way
                </Text>
                </View>
                <Text style={{color: '#2e2e2e', fontSize: 11, paddingTop:5}}>
                Delivered by: 22 May 2021
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 11, }}>
                Order no#: WEA0012
                </Text>
                
              </View>
            </CardItem>
            <CardItem style={{justifyContent : 'space-between',backgroundColor:'#f8f8f8',borderBottomWidth:1,borderColor:'white',flexDirection:'row'}}>
             < Text style={{color: '#9b2120', fontSize: 13, }}>
             Total: $S 148
                </Text>  
                <View style={{}}>
                < Text style={{color: '#9b2120', fontSize: 13,alignSelf:'flex-end'}}>
             TRACK ORDER
                </Text>  
                </View>
            </CardItem>
          </Card>
        </View>
        <View style={{justifyContent: 'center', padding: 15}}>
          <Card
            style={{
              marginTop: 15,
              height: heightPercentageToDP(16),
              borderRadius: 10,
             
            }}>
            <CardItem style={{flexDirection: 'row',justifyContent : 'space-between'}}>
             
              <View style={{paddingTop: 10}}>
                <Text
                  style={{
                    color: '#2e2e2e',
                    fontSize: 17,
                marginTop:-5,
                    fontWeight: '700',
                  }}>
                  Antoine Jobard
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, paddingTop:7}}>
                Meursault 1er Blagny
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, }}>
                Vintage: 2018
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, paddingTop:7}}>
                2nos x $S 148
                </Text>
              </View>
              <View style={{ paddingTop: 10,}}>
              <View style={{width:widthPercentageToDP(25),backgroundColor:'#289f5a',borderRadius:5,}}>
                <Text
                  style={{
                      padding:5,
                    color: 'white',
                    fontSize: 13,
                    
                textAlign:'center',
                    fontWeight: '700',
                    textTransform:'uppercase'
                  }}>
                 Delivered
                </Text>
                </View>
                <Text style={{color: '#2e2e2e', fontSize: 11, paddingTop:5}}>
                on 12 Mar 2021
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 11, }}>
                Order no#: WEA0135
                </Text>
                
              </View>
            </CardItem>
            <CardItem style={{justifyContent : 'space-between',backgroundColor:'#f8f8f8',borderBottomWidth:1,borderColor:'white',flexDirection:'row'}}>
             < Text style={{color: '#9b2120', fontSize: 13, }}>
             Total: $S 148
                </Text>  
                <View style={{}}>
                < Text style={{color: '#9b2120', fontSize: 13,alignSelf:'flex-end'}}>
             TRACK ORDER
                </Text>  
                </View>
            </CardItem>
          </Card>
        </View>
        <View style={{justifyContent: 'center', padding: 15}}>
          <Card
            style={{
              marginTop: 15,
              height: heightPercentageToDP(16),
              borderRadius: 10,
             
            }}>
            <CardItem style={{flexDirection: 'row',justifyContent : 'space-between'}}>
             
              <View style={{alignSelf: 'center', paddingTop: 10}}>
                <Text
                  style={{
                    color: '#2e2e2e',
                    fontSize: 17,
                marginTop:-5,
                    fontWeight: '700',
                  }}>
                  Antoine Jobard
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, paddingTop:7}}>
                Meursault 1er Blagny
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, }}>
                Vintage: 2018
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, paddingTop:7}}>
                2nos x $S 148
                </Text>
              </View>
              <View style={{ paddingTop: 10,}}>
              <View style={{width:widthPercentageToDP(25),backgroundColor:'#e74c3c',borderRadius:5,}}>
                <Text
                  style={{
                      padding:5,
                    color: 'white',
                    fontSize: 13,
                    
                textAlign:'center',
                    fontWeight: '700',
                    textTransform:'uppercase'
                  }}>
                 Cancelled
                </Text>
                </View>
                <Text style={{color: '#2e2e2e', fontSize: 11, paddingTop:5}}>
                on 15 Feb 2021
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 11, }}>
                Order no#: WEA0912
                </Text>
                
              </View>
            </CardItem>
            <CardItem style={{justifyContent : 'space-between',backgroundColor:'#f8f8f8',borderBottomWidth:1,borderColor:'white',flexDirection:'row'}}>
             < Text style={{color: '#9b2120', fontSize: 13, }}>
             Total: $S 148
                </Text>  
                <View style={{}}>
                < Text style={{color: '#9b2120', fontSize: 13,alignSelf:'flex-end'}}>
             TRACK ORDER
                </Text>  
                </View>
            </CardItem>
          </Card>
        </View>
        <View style={{justifyContent: 'center', padding: 15}}>
          <Card
            style={{
              marginTop: 15,
              height: heightPercentageToDP(16),
              borderRadius: 10,
             
            }}>
            <CardItem style={{flexDirection: 'row',justifyContent : 'space-between'}}>
             
              <View style={{alignSelf: 'center', paddingTop: 10}}>
                <Text
                  style={{
                    color: '#2e2e2e',
                    fontSize: 17,
                marginTop:-5,
                    fontWeight: '700',
                  }}>
                  Antoine Jobard
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, paddingTop:7}}>
                Meursault 1er Blagny
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, }}>
                Vintage: 2018
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, paddingTop:7}}>
                2nos x $S 148
                </Text>
              </View>
              <View style={{ paddingTop: 10,}}>
              <View style={{width:widthPercentageToDP(25),backgroundColor:'#a1929a',borderRadius:5,}}>
                <Text
                  style={{
                      padding:5,
                    color: 'white',
                    fontSize: 13,
                    
                textAlign:'center',
                    fontWeight: '700',
                    textTransform:'uppercase'
                  }}>
                  Returned
                </Text>
                </View>
                <Text style={{color: '#2e2e2e', fontSize: 11, paddingTop:5}}>
                on 19 Jan 2021
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 11, }}>
                Order no#: WEA0865
                </Text>
                
              </View>
            </CardItem>
            <CardItem style={{justifyContent : 'space-between',backgroundColor:'#f8f8f8',borderBottomWidth:1,borderColor:'white',flexDirection:'row'}}>
             < Text style={{color: '#9b2120', fontSize: 13, }}>
             Total: $S 148
                </Text>  
                <View style={{}}>
                < Text style={{color: '#9b2120', fontSize: 13,alignSelf:'flex-end'}}>
             TRACK ORDER
                </Text>  
                </View>
            </CardItem>
          </Card>
        </View>
      
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
