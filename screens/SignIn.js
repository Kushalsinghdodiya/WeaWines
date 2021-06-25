import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';

export default function SignIn({route,navigation}) {


  return (
    <View style={styles.container}>
      <View style={styles.tinyLogo}>
        <Image
          width={30}
          height={30}
          source={require('../navigation/assets/images/wea-logo.png')}
        />
      </View>

      <View style={styles.header}>
        <Text style={styles.heading}>LOGIN </Text>
      </View>
      <View style={styles.sub_container}>
        <Input
          placeholder="Email"
          rightIcon={<Icon name="eye" size={24} color="black" />}
        />

        <Input
          placeholder="Password"
          secureTextEntry={true}
          rightIcon={<Icon name="eye" size={24} color="black" />}
        />

        <View style={styles.forgetdiv}>
          <TouchableOpacity>
            <Text style={styles.text}>Forget Password ?</Text>
          </TouchableOpacity>
        </View>

        <Button buttonStyle={styles.loginBtn} onPress={()=>navigation.navigate('Home')} title="Login" />

        <View style={styles.option}>
          <Text style={{fontSize: 15}}>or</Text>
        </View>

        <Button
          buttonStyle={styles.social_btn}
          title="Facebook"
          type="outline"
        />

        <Button buttonStyle={styles.social_btn} title="Google" type="outline" />

        <View style={styles.option2}>
          <TouchableOpacity>
            <Text style={styles.text}>Continue as Guest </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.option3}>
          <Text>
            Don't have an account ?<Text style={styles.signup}>{' '}SignUp</Text>{' '}
            here
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  sub_container: {
    padding: 10,
  },

  heading: {
    fontSize: 20,
  },
  loginBtn: {
    backgroundColor: '#800101',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 20,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  forgetdiv: {
    alignItems: 'flex-end',
    padding: 10,
  },
  text: {
    color: '#800101',
    textDecorationLine: 'underline',
  },
  signup: {
    color: '#800101',
    textDecorationLine: 'underline',
  },

  option: {
    alignItems: 'center',
  },
  option2: {
    alignItems: 'center',
    marginTop: 10,
  },
  option3: {
    alignItems: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: 40,
  },

  social_btn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
    borderColor: '#FFFFFF',
  },
  tinyLogo: {
    padding: 10,
    alignItems: 'center',
  },
});
