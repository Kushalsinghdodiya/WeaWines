import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors} from 'react-native-elements';

export default function HomeBtn({route, navigation}) {
  return (
    <View style={styles.container}>
      
      <Image
        source={require('../App/assets/centerLogo.png')}
        style={{height: 50, width: 50,}}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderWidth: 10,
    borderRadius: 40,
    height: 75,
    width: 75,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
