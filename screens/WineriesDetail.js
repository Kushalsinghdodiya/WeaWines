import React from 'react';
import {StyleSheet,ScrollView, Image, Text, TouchableOpacity, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import {Input, Button} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WineriesDetail({route, navigation}) {
  // const WinerHeader = () => (
  //     <Appbar.Header  style={styles.header} >
  //       <Appbar.BackAction  />
  //     </Appbar.Header>
  // );

  return (
   
    <View style={styles.container}>
    <SafeAreaView>
    <ScrollView>
      <View style={styles.image}>
        <Image
          style={{maxHeight:'100%',maxWidth:'100%'}}
          source={require('../navigation/assets/images/details.jpg')}
        />
      </View>

      <View style={{padding: 10}}>
        <Text style={{fontSize: 20, color: '#000', marginBottom: 10}}>
          What WEA say ?
        </Text>
        <Text style={{fontSize: 13, color: '#000'}}>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or Lorem ipsum, or lipsum as it is sometimes
          known, is dummy text used in graphic or Lorem ipsum, or lipsum as it is sometimes
          known, is dummy text used in graphic or Lorem ipsum, or lipsum as it is sometimes
          known, is dummy text used in 
        .{' '}
        </Text>
      </View>

      <View style={{padding: 10}}>
        <Text style={{fontSize: 20, color: '#000', marginBottom: 10}}>
          What WEA say ?
        </Text>
        <Text style={{fontSize: 13, color: '#000'}}>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or Lorem ipsum, or lipsum as it is sometimes
          known, is dummy text used in laying out print, graphic or web 
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or Lorem ipsum,{' '}
        </Text>
      </View>

      <View style={{padding: 10}}>
        <Text style={{fontSize: 20, color: '#000', marginBottom: 10}}>
          What WEA say ?
        </Text>
        <Text style={{fontSize: 13, color: '#000'}}>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or Lorem ipsum, or lipsum as it is sometimes
          known, is dummy text used in laying out print, graphic or web 
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or Lorem ipsum,{' '}
        </Text>
      </View>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },

  image: {
    width: '100%',
    height:'25%',
  },
});
