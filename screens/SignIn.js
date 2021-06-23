import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input,Button } from 'react-native-elements';

export default function SignIn() {
  return (
    <View style={styles.container}>




      <View >
        <Text style={styles.heading}>LOGIN </Text>
      </View>
      <View style={styles.sub_container}>
        <Input
          placeholder="Email"
          rightIcon={<Icon name="user" size={24} color="black" />}
        />

        <Input
          placeholder="Password"
          secureTextEntry={true}
          rightIcon={<Icon name="user" size={24} color="black" />}
        />

        {/* <Button
        
        title="Login"
        color="white"
        /> */}
        <View style={styles.loginBtn}>
        <TouchableOpacity >
          <Text style={styles.loginText}>Sign In</Text>
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
    justifyContent:'center'
  },
  sub_container:{
      padding:10
  },
 
  heading:{
      fontSize:20
  },
  loginBtn: {
    backgroundColor: '#800101',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 20,
  },
  
});
