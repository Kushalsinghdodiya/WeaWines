import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Fontisto';
import {Input, Button} from 'react-native-elements';

export default function SignIn({route, navigation}) {
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
          style={{fontSize:15, paddingBottom:-5}}
          rightIcon={<Icons name="email" size={20} style={{paddingBottom:-5}} color="black" />}
        />

        <Input
          placeholder="Password"
          secureTextEntry={true}
          style={{fontSize:15, paddingBottom:-5}}
          rightIcon={<Icon name="eye" size={20} style={{paddingBottom:-5}}  color="black" />}
        />

        <View style={styles.forgetdiv}>
          <TouchableOpacity>
            <Text style={styles.text}>Forget Password ?</Text>
          </TouchableOpacity>
        </View>

        <Button
          buttonStyle={styles.loginBtn}
          onPress={() => navigation.navigate('bottomNavigator')}
          title="Login"
        />

        <View style={styles.option}>
          <Text style={{fontSize: 15}}>or</Text>
        </View>
        <TouchableOpacity style={styles.social_btn1}>
          <View style={{padding: 15, paddingLeft: 20, width: 150}}>
            <Image
              width={30}
              height={30}
              source={require('../navigation/assets/google.png')}
            />
          </View>
          <Text style={{paddingTop: 15, fontSize: 14}}>Login With Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.social_btn1}>
          <View style={{padding: 15, paddingLeft: 20, width: 147}}>
            <Image
              width={30}
              height={30}
              source={require('../navigation/assets/facebook.png')}
            />
          </View>
          <Text style={{paddingTop: 15, fontSize: 14}}>
            Login With Facebook
          </Text>
        </TouchableOpacity>

        <View style={styles.option2}>
          <View>
            <Image
              width={35}
              height={35}
              style={{marginTop: 3}}
              source={require('../navigation/assets/user.png')}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.text}>Enter as Guest </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.option3}>
          <Text style={{color: '#505050'}}>
            Don't have an account ?<Text  onPress={() => navigation.navigate('SignUp')} style={styles.signup}> SignUp</Text>{' '}
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
  },
  sub_container: {
    padding: 10,
  },

  heading: {
    fontSize: 18,
    color: '#262626',
  },
  loginBtn: {
    backgroundColor: '#800101',
    borderRadius: 23,
    height: 45,
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
   paddingBottom:30,
   paddingRight:10,
   
  },
  text: {
    color: '#800101',
    textDecorationLine: 'underline',
    marginLeft: 10,
  },
  signup: {
    color: '#800101',
    textDecorationLine: 'underline',
  },

  option: {
    alignItems: 'center',
    marginTop: 10,
    color: '#505050',
  },
  option2: {
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  option3: {
    alignItems: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: 60,
  },

  social_btn1: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    height: 45,

    marginTop: 20,
    marginBottom: 5,
    borderColor: '#FFFFFF',
    flexDirection: 'row',
  },
  social_btn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 5,
    borderColor: '#FFFFFF',
  },
  tinyLogo: {
    padding: 25,
    alignItems: 'center',
    marginTop: 50,
  },
});
