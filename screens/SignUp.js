import React, { useState, useEffect } from 'react';
import {
  ToastAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Input, Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Entypo';
import validator from 'validator';
import Vars from '../utils/Vars';
import axios from 'axios';

export default function SignUp({ route, navigation }) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [contactNo, setcontactNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpass, setCpass] = useState('');

  const Notify = msg =>
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.BOTTOM);

  const handleSubmit = () => {
    const isValid = validator.isEmail(email);


    if (
      firstname == '' ||
      lastname == '' ||
      contactNo == '' ||
      email == '' ||
      password == ''
    ) {
      let msg = 'All Fields Required*';
      Notify(msg);
    } else if (password !== cpass) {
      let msg = 'Password and Confirm Password Should Be Same';
      Notify(msg);
    } else if (!isValid) {
      let msg = 'Invalid Email';
      Notify(msg);
    } else {
      var body = {
        first_name: firstname,
        last_name : lastname,
        username : firstname+lastname,
        email: email,
        password: password,
        mobile_number: contactNo,
      };

   
      axios({
        method: 'post',
        url: `${Vars.host}/wp-json/letscms/v1/auth/register`,
        data: body,
        headers: { 'Content-Type': 'application/json' },
      })
        .then(function (response) {
          console.log(response.data);
          if (response.data.status == 200) {
            Notify(response.data.message);
            navigation.navigate('SignIn');
          } else {
            Notify(response.data.message);
            return false;
          }
        })
        .catch(function (response) {
          console.log(response);
        });
    }
  };

  return (
    <View style={styles.container}>
      {/* <Header
        leftComponent={{ icon: 'menu', color: 'white' }}
       
        /> */}
      <View style={styles.header}>
        <Text style={{ fontSize: 22, marginBottom: 5, color: '#505050' }}>
          Create{' '}
        </Text>
        <Text style={{ fontSize: 22, color: '#505050' }}>an account</Text>
      </View>

      <View style={styles.sub_container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Input
              onChangeText={txt => setFirstname(txt)}
              placeholder="First Name"
              placeholderTextColor="#505050"
              style={{ fontSize: 15, marginBottom: -10 }}
            />
          </View>
          <View style={styles.col}>
            <Input
              onChangeText={txt => setLastname(txt)}
              placeholder="Last Name"
              placeholderTextColor="#505050"
              style={{ fontSize: 15, marginBottom: -10 }}
            />
          </View>
        </View>

        <Input
          onChangeText={txt => setcontactNo(txt)}
          placeholder="Contact No#"
          placeholderTextColor="#505050"
          style={{ fontSize: 15, marginBottom: -10 }}
        />
        <Input
          onChangeText={txt => setEmail(txt)}
          placeholder="Email"
          placeholderTextColor="#505050"
          style={{ fontSize: 15, marginBottom: -10 }}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#505050"
          onChangeText={txt => setPassword(txt)}
          style={{ fontSize: 15, marginBottom: -15 }}
          rightIcon={
            <Icon
              name="eye"
              size={20}
              color="black"
              style={{ marginBottom: -15 }}
            />
          }
        />

        <Input
          placeholder="Confirm Password"
          secureTextEntry={true}
          placeholderTextColor="#505050"
          onChangeText={txt => setCpass(txt)}
          style={{ fontSize: 15, marginBottom: -15 }}
          rightIcon={
            <Icons
              name="eye-with-line"
              size={20}
              color="black"
              style={{ marginBottom: -15 }}
            />
          }
        />

        <Button
          onPress={handleSubmit}
          buttonStyle={styles.SignupBtn}
          title="Signup"
        />
      </View>

      <View style={styles.option3}>
        <Text>
          Don't have an account ?{' '}
          <Text
            onPress={() => navigation.navigate('SignIn')}
            style={styles.login}>
            Login
          </Text>{' '}
          here
        </Text>
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
    marginTop: 90,
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
});
