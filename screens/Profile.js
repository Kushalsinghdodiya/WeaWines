import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Input, Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Entypo';
export default function Profile({route, navigation}) {
  return (
    <View style={styles.container}>
      {/* <Header
        leftComponent={{ icon: 'menu', color: 'white' }}
       
        /> */}

      <View style={styles.sub_container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={{color: '#505050', padding: 10}}>First Name</Text>
          </View>
          <View style={styles.col}>
            <Text style={{color: '#505050', padding: 10}}>Last Name</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Input
              placeholder="John Doe"
              placeholderTextColor="#505050"
              style={{fontSize: 15, paddingBottom: -5}}
            />
          </View>
          <View style={styles.col}>
            <Input
              placeholder="Williams"
              placeholderTextColor="#505050"
              style={{fontSize: 15, paddingBottom: -5}}
            />
          </View>
        </View>

        <Text style={{color: '#505050', padding: 10}}>Email</Text>
        <Input
          placeholder="johndoe152@gmail.com"
          placeholderTextColor="#505050"
          style={{fontSize: 15, paddingBottom: -5}}
        />
        <Text style={{color: '#505050', padding: 10}}>Contact No#</Text>
        <Input
          placeholder="+65 5685 5685"
          placeholderTextColor="#505050"
          style={{fontSize: 15, paddingBottom: -5}}
        />
        <Text style={{color: '#505050', padding: 10}}>Password</Text>
        <Input
          placeholder="*****"
          secureTextEntry={true}
          placeholderTextColor="#505050"
          style={{fontSize: 15, paddingBottom: -5}}
          rightIcon={<Icon name="eye" size={20} color="black" />}
        />

        <View style={styles.forgetdiv}>
          <TouchableOpacity onPress={()=>navigation.navigate('ChangePassword')}>
            <Text style={{color: '#800101', textDecorationLine: 'underline'}}>
              Change Password{' '}
            </Text>
          </TouchableOpacity>
        </View>
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
