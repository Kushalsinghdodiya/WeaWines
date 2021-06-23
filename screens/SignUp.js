import React from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SignUp(){
    return(
        <View  style={styles.container}>
                <View>
                    <Text>SIGN UP SCREEN </Text>
                </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    }
  
  });
  