import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Input, Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignUp({route,navigation}) {
  return (
    <View style={styles.container}>
      {/* <Header
        leftComponent={{ icon: 'menu', color: 'white' }}
       
        /> */}
      <View style={styles.header}>
        <Text style={{fontSize: 25, marginBottom: 5}}>Create </Text>
        <Text style={{fontSize: 20}}>an account</Text>
      </View>

      <View style={styles.sub_container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Input placeholder="First Name" />
          </View>
          <View style={styles.col}>
            <Input placeholder="Last Name" />
          </View>
        </View>

        <Input placeholder="Contact No#" />
        <Input placeholder="Email" />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          rightIcon={<Icon name="eye" size={24} color="black" />}
        />

        <Input
          placeholder="Confirm Password"
          secureTextEntry={true}
          rightIcon={<Icon name="eye" size={24} color="black" />}
        />

        <Button onPress={()=>navigation.navigate('Home')} buttonStyle={styles.SignupBtn} title="Signup" />
      </View>

      <View style={styles.option3}>
        <Text>
          Don't have an account ? <Text style={styles.login}>Login</Text> here
        </Text>
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

  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  col: {
    width: '50%',
  },
  SignupBtn: {
    backgroundColor: '#800101',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  SignupText: {
    color: '#fff',
    fontSize: 20,
  },
  option3: {
    alignItems: 'center',
    margin: 5,
  },
  login: {
    color: '#800101',
    textDecorationLine: 'underline',
  },
  header: {
    display: 'flex',
    paddingLeft: 20,
  },
});
