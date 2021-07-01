import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';

import {Input, Button} from 'react-native-elements';

export default function Account({route, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.col1}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{width: 120, height: 120}}
              source={require('../navigation/assets/images/user.png')}
            />
          </View>
        </View>

        <View style={styles.col2}>
          <Text style={{fontSize: 20}}>John Doe</Text>
          <TouchableOpacity>
            <Text style={{fontSize: 15, color: '#800101'}}>Edit Profile</Text>
          </TouchableOpacity>

          <Button
            buttonStyle={styles.loginBtn}
            titleStyle={{fontSize: 12}}
            title="Total Points : 22,364"
          />
        </View>
      </View>

      <View style={styles.subcontain}>
        <TouchableOpacity>
          <View style={{display: 'flex', flexDirection: 'row', padding: 5}}>
            <Text style={styles.options}>My Cart</Text>
            <Icon name="greater-than" size={25} color="black" />
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            marginTop: 10,
            marginBottom: 10,
          }}
        />

        <TouchableOpacity>
          <View style={{display: 'flex', flexDirection: 'row', padding: 5}}>
            <Text style={styles.options}>Manage Address</Text>
            <Icon name="greater-than" size={25} color="black" />
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            marginTop: 10,
            marginBottom: 10,
          }}
        />

        <TouchableOpacity>
          <View style={{display: 'flex', flexDirection: 'row', padding: 5}}>
            <Text style={styles.options}>My Order</Text>
            <Icon name="greater-than" size={25} color="black" />
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            marginTop: 10,
            marginBottom: 10,
          }}
        />

        <TouchableOpacity>
          <View style={{display: 'flex', flexDirection: 'row', padding: 5}}>
            <Text style={styles.options}>My Rewards Points</Text>
            <Icon name="greater-than" size={25} color="black" />
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            marginTop: 10,
            marginBottom: 10,
          }}
        />

        <View style={{display: 'flex', alignSelf: 'center'}}>
          <Button onPress={() => navigation.navigate('SignIn')} buttonStyle={styles.logout} title="LOGOUT" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f3f3f3',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  col1: {
    width: '40%',
    paddingTop: 15,
    marginTop:20
  },
  col2: {
    width: '60%',
    justifyContent: 'center',
    paddingTop: 20,
    marginTop:20
  },

  loginBtn: {
    backgroundColor: '#800101',
    borderRadius: 5,
    height: 35,
    width: '60%',

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  subcontain: {
    padding: 10,
    marginTop:20
  },
  options: {
    fontSize: 16,
    marginTop: 8,
    width: '90%',
    alignItems: 'center',
    color: '#505050',
  },
  logout: {
    backgroundColor: '#800101',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 10,
    width: '100%',
    fontSize:14
  },
});
