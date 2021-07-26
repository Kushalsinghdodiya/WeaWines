import React, {useState, useEffect} from 'react';
import {
  ToastAndroid,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Fontisto';
import {Input, Button} from 'react-native-elements';
import validator from 'validator';
import Vars from '../utils/Vars';

import oauthSignature from 'oauth-signature'
import WooCommerceAPI from 'react-native-woocommerce-api';
import uuid from "uuid";

export default function SignIn({route, navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const Notify = msg => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
  };

  // var config = {
  //   method: 'get',
  //   url: 'http://18.217.240.195/wp-json/wc/v3/products?consumer_key=ck_234a1d928528af0d9db1cdbd3593ec2fe8bd4826&consumer_secret=cs_446bb534522c3354236068c05a1e3c1103acdec0&oauth_consumer_key=ck_234a1d928528af0d9db1cdbd3593ec2fe8bd4826&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1627112840&oauth_nonce=w8k5XLQh57X&oauth_version=1.0&oauth_signature=MNx0ak7GBpp8zSehed9cGnqOwSk%3D',
  //   headers: { }
  // };
 
 
    
  const UserSessionData = async (dt) => {
    try {
      console.log("this is setting session details",dt)
      await AsyncStorage.setItem('user_details',JSON.stringify(dt));
      
    } catch (error) {
      console.log("login catch",Error);
    }
  };
  

  useEffect(() => {
    // const api = new WooCommerceAPI({
    //   url: "http://18.217.240.195",
    //   consumerKey: "ck_234a1d928528af0d9db1cdbd3593ec2fe8bd4826",
    //   consumerSecret: "cs_446bb534522c3354236068c05a1e3c1103acdec0",
    //   version: "wc/v3"
    // });
    
    // // List products
    // api.get("products", {
    //   per_page: 20, // 20 products per page
    // })
    //   .then((response) => {
    //     // Successful request
    //     console.log("Response Data:", response);
    //   })
    //   .catch((error) => {
    //     // Invalid request, for 4xx and 5xx statuses
    //     //console.log("Response Error:", error.response);
    //   })
    //   .finally(() => {
    //     // Always executed.
    //   });
   

  });

  const handleSubmit = () => {
    const isValid = validator.isEmail(email);

    if (email == '' || password == '') {
      alert('Enter Email and Password');
    } else if (!isValid) {
      let msg = 'Invalid Email';
      Notify(msg);
    } else {
      try {
        var body = {
          user_name: email,
          password: password,
        };

        axios({
          method: 'post',
          url: `${Vars.host}login`,
          data: body,
          headers: {'Content-Type': 'application/json'},
        })
          .then(function (response) {
            if (response.data.status == 1) {
            
              Notify(response.data.message);
              UserSessionData(response.data.userdetails);
              navigation.navigate('bottomNavigator');
            } else {
              Notify(response.data.message);
              return false;
            }
          })
          .catch(function (response) {
            console.log(response);
          });
      } catch (error) {
        Notify(error);
      }
    }
  };

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
          style={{fontSize: 15, marginBottom: -20}}
          rightIcon={
            <Icons
              name="email"
              size={20}
              style={{marginBottom: -20}}
              color="black"
            />
          }
          onChangeText={email => setEmail(email)}
        />

        <Input
          placeholder="Password"
          secureTextEntry={true}
          style={{fontSize: 15, marginBottom: -20}}
          rightIcon={
            <Icon
              name="eye"
              size={20}
              style={{marginBottom: -20}}
              color="black"
            />
          }
          onChangeText={pass => setPassword(pass)}
        />

        <View style={styles.forgetdiv}>
          <TouchableOpacity>
            <Text style={styles.text}>Forget Password ?</Text>
          </TouchableOpacity>
        </View>

        <Button
          buttonStyle={styles.loginBtn}
          onPress={handleSubmit}
          // onPress={() => navigation.navigate('bottomNavigator')}
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
            Don't have an account ?
            <Text
              onPress={() => navigation.navigate('SignUp')}
              style={styles.signup}>
              {' '}
              SignUp
            </Text>{' '}
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
    paddingLeft: 10,
    paddingRight: 10,
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
    paddingBottom: 30,
    paddingRight: 10,
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
