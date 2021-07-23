import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {Input, Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import Vars from '../utils/Vars';
export default function Profile({route, navigation}) {
  const [details, setDetails] = useState({});
  const [sessionData, setSessionData] = useState({});
  const [isLoading, SetIsLoading] = useState(false);

  useEffect(() => {
    _retrieveData();
   
  }, []);

  const _retrieveData = async () => {
    try {
     
      const value = await AsyncStorage.getItem('user_details');

      if (value !== null) {
        setSessionData(JSON.parse(value));
        fetchUserDetails();
       
      }
    } catch (error) {
      
    }
  };

  const fetchUserDetails = () => {
    SetIsLoading(true);
    var body = {user_id: sessionData.id};
    axios({
      method: 'post',
      url: `${Vars.host}view_profile`,
      data: body,
      headers: {'Content-Type': 'application/json'},
    })
      .then(function (response) {
        if (response.data.status == 1) {
          setDetails(response.data.userdetails);
          SetIsLoading(false);
        } else {
          return false;
        }
      })
      .catch(function (response) {
        alert('INTERNAL SERVER ERROR 500');
        SetIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loading}>
         
          <ActivityIndicator size="large" color="#800101" />
        </View>
      )}

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
              placeholder="First Name"
              placeholderTextColor="#505050"
              style={{fontSize: 15, paddingBottom: -5}}
              value={details.first_name}
            />
          </View>
          <View style={styles.col}>
            <Input
              placeholder="Last Name"
              placeholderTextColor="#505050"
              style={{fontSize: 15, paddingBottom: -5}}
              value={details.last_name}
            />
          </View>
        </View>

        <Text style={{color: '#505050', padding: 10}}>Email</Text>
        <Input
          placeholder="johndoe152@gmail.com"
          placeholderTextColor="#505050"
          style={{fontSize: 15, paddingBottom: -5}}
          value={details.email}
        />
        <Text style={{color: '#505050', padding: 10}}>Contact No#</Text>
        <Input
          placeholder="Phone Number"
          placeholderTextColor="#505050"
          style={{fontSize: 15, paddingBottom: -5}}
          value={details.mobile_number}
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
          <TouchableOpacity
            onPress={() => navigation.navigate('ChangePassword')}>
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
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
