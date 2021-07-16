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
import { CheckBox } from 'react-native-elements'
import {Input, Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Entypo';
import SafeAreaView from 'react-native-safe-area-view';
import * as Progress from 'react-native-progress';
import {Card, CardItem, Container, } from 'native-base';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
export default function MyRewardPoints({route, navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#800101" />
      {/* <Header
        leftComponent={{ icon: 'menu', color: 'white' }}
       
        /> */}
<View style={{width:widthPercentageToDP(100),backgroundColor:'#800101',}}>
<View style={{paddingBottom:10,backgroundColor:'#800101'}}>
<Text style={{textAlign:'center',color:'#ffacac',marginTop:30}}>Total earned</Text>
<Text style={{textAlign:'center',color:'white',marginTop:5,fontSize:27}}>22,364</Text>
<Text style={{textAlign:'center',color:'#ffacac',marginTop:5,}}>reward points</Text>
<Progress.Bar progress={0.8} width={300} height={15} style={{alignSelf:'center',marginTop:20,borderRadius:10 }} color='white' borderColor='white'><Text style={{position:'absolute',marginLeft:widthPercentageToDP(45),fontSize:11}}>22,364</Text></Progress.Bar>
<Text style={{textAlign:'center',color:'white',marginTop:20,marginBottom:20}}>Reach 25,000 points you will get "Premier Cru"</Text>
</View>

</View>
      <ScrollView>
        <View style={{justifyContent: 'center', padding:15,marginTop:10}}>
            <Card style={{ marginTop: 15, backgroundColor:'#e4f2fb',height:heightPercentageToDP(16)}}>
                <CardItem style={{backgroundColor:'#e4f2fb',flexDirection:'row', justifyContent:'center'}}>
                    <View style={{alignSelf:'center',paddingTop:25}}>
                    <Image  source={require('../App/assets/cup.png')} />
                    </View>
                    <View style={{alignSelf:'center',paddingTop:25}}>
                    <Text style={{color:'#084f97',fontSize:20, paddingLeft:10}}>Grand Cru</Text>
                    <Text style={{color:'#084f97',fontSize:14, paddingLeft:10}}>50,000 points</Text>
                    </View>
                </CardItem>
            </Card>
        <Card style={{ marginTop: -5, borderRadius: 2}}>
          <CardItem style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 15,
                fontWeight:'700',
                width: widthPercentageToDP(80),
              }}>
            Benefits
            </Text>
            
          </CardItem>
          <CardItem style={{marginTop:5}}>
            <Text style={{fontSize: 14, flexDirection: 'row', marginTop: -20}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

            </Text>
           
          </CardItem>
          <CardItem style={{marginTop:5, marginBottom:15}}>
            <Text style={{fontSize: 14, flexDirection: 'row', marginTop: -20}}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
           
          </CardItem>
         </Card>
        </View>
        <View style={{justifyContent: 'center', padding:15,marginTop:-15}}>
            <Card style={{ marginTop: 15, backgroundColor:'#e4f2fb',height:heightPercentageToDP(16)}}>
                <CardItem style={{backgroundColor:'#e4f2fb',flexDirection:'row', justifyContent:'center'}}>
                    <View style={{alignSelf:'center',paddingTop:25}}>
                    <Image  source={require('../App/assets/cup.png')} />
                    </View>
                    <View style={{alignSelf:'center',paddingTop:25}}>
                    <Text style={{color:'#084f97',fontSize:20, paddingLeft:10}}>Premier Cru</Text>
                    <Text style={{color:'#084f97',fontSize:14, paddingLeft:10}}>25,000 points</Text>
                    </View>
                </CardItem>
            </Card>
        <Card style={{ marginTop: -5, borderRadius: 2}}>
          <CardItem style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 15,
                fontWeight:'700',
                width: widthPercentageToDP(80),
              }}>
            Benefits
            </Text>
            
          </CardItem>
          <CardItem style={{marginTop:5}}>
            <Text style={{fontSize: 14, flexDirection: 'row', marginTop: -20}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

            </Text>
           
          </CardItem>
          <CardItem style={{marginTop:5, marginBottom:15}}>
            <Text style={{fontSize: 14, flexDirection: 'row', marginTop: -20}}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
           
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
