import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Input, Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card, CardItem, Container, } from 'native-base';
import Icons from 'react-native-vector-icons/Entypo';
import { heightPercentageToDP } from 'react-native-responsive-screen';
export default function ChangePassword({route, navigation}) {
  return (
    <View style={styles.container}>
      {/* <Header
        leftComponent={{ icon: 'menu', color: 'white' }}
       
        /> */}

      <View style={styles.sub_container}>
        <View style={styles.row}>
         </View>
        <Input
          placeholder="Old Password"
          secureTextEntry={true}
          placeholderTextColor="#505050"
          style={{fontSize: 15, paddingBottom: -5}}
          rightIcon={<Icon name="eye" size={20} color="black" />}
        />
        <Input
          placeholder="New Password"
          secureTextEntry={true}
          placeholderTextColor="#505050"
          style={{fontSize: 15, paddingBottom: -5}}
          rightIcon={<Icon name="eye" size={20} color="black" />}
        />
        <Input
          placeholder="Confirm Password"
          secureTextEntry={true}
          placeholderTextColor="#505050"
          style={{fontSize: 15, paddingBottom: -5}}
          rightIcon={<Icon name="eye" size={20} color="black" />}
        />

<View style={styles.row}>
<Text style={{color: '#505050', padding: 10, fontWeight:'700'}}>Password Should be:</Text>
         </View>
         <View style={styles.row}>
<Text style={{color: '#505050', padding: 10}}>- Is longer than 7 characters

</Text>
         </View>
         <View style={styles.row}>
<Text style={{color: '#505050', padding: 10}}>- Does not match your old password & username</Text>
         </View>
         <View style={styles.row}>
<Text style={{color: '#505050', padding: 10}}>- Is not a common password</Text>
         </View>
          <Button onPress={()=>navigation.navigate('Address')} buttonStyle={styles.SignupBtn} title="Done" />
       
      </View>
    </View>
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
    marginTop: heightPercentageToDP(25),
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
