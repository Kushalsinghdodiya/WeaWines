import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  ToastAndroid,
} from 'react-native';
import {Input, Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card, CardItem, Container} from 'native-base';
import Icons from 'react-native-vector-icons/Entypo';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native';
import axios from 'axios';
import Vars from '../utils/Vars';
export default function ChangePassword({route, navigation}) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [cpass, setCpass] = useState('');
  const [sessionData, setSessionData] = useState({});

  useEffect(() => {
    _retrieveData();
  }, []);

  const Notify = msg =>
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.BOTTOM);

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('user_details');

      if (value !== null) {
        setSessionData(JSON.parse(value));
      }
    } catch (error) {
      return null;
    }
  };

  const ChangePassword = () => {
    let msg;
    if (oldPassword == '' || newPassword == '' || cpass == '') {
      msg = 'All Field Required***';
      Notify(msg);
    } else if (newPassword !== cpass) {
      msg = `Password & Confirm Password Don't Match`;

      Notify(msg);
    } else if (newPassword.length < 7) {
      msg = `Password should be Longer Than 7 Characters`;
      Notify(msg);
    } else {
      var body = {
        user_id: sessionData.id,
        old_password: oldPassword,
        new_password: newPassword,
      };

      axios({
        method: 'post',
        url: `${Vars.host}change_password`,
        data: body,
        headers: {'Content-Type': 'application/json'},
      })
        .then(function (response) {
          console.log(response.data);
          if (response.data.status == 1) {
            Notify(response.data.message);
          } else {
            Notify(response.data.message);
            return false;
          }
        })
        .catch(function (response) {
          alert('INTERNAL SERVER ERROR 500');
        });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Header
        leftComponent={{ icon: 'menu', color: 'white' }}
       
        /> */}

        <View style={styles.sub_container}>
          <View style={styles.row}></View>
          <Input
            placeholder="Old Password"
            secureTextEntry={true}
            placeholderTextColor="#505050"
            style={{fontSize: 15, paddingBottom: -5}}
            rightIcon={<Icon name="eye" size={20} color="black" />}
            onChangeText={txt => setOldPassword(txt)}
          />
          <Input
            placeholder="New Password"
            secureTextEntry={true}
            placeholderTextColor="#505050"
            style={{fontSize: 15, paddingBottom: -5}}
            rightIcon={<Icon name="eye" size={20} color="black" />}
            onChangeText={txt => setNewPassword(txt)}
          />
          <Input
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="#505050"
            style={{fontSize: 15, paddingBottom: -5}}
            rightIcon={<Icon name="eye" size={20} color="black" />}
            onChangeText={txt => setCpass(txt)}
          />

          <View style={styles.row}>
            <Text style={{color: '#505050', padding: 10, fontWeight: '700'}}>
              Password Should be:
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={{color: '#505050', padding: 10}}>
              - Is longer than 7 characters
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={{color: '#505050', padding: 10}}>
              - Does not match your old password & username
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={{color: '#505050', padding: 10}}>
              - Is not a common password
            </Text>
          </View>
          <Button
            onPress={ChangePassword}
            buttonStyle={styles.SignupBtn}
            title="Done"
          />
        </View>
      </ScrollView>
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
