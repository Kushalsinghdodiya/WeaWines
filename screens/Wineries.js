import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image,ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import {Container, Header} from 'native-base';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import SafeAreaView from 'react-native-safe-area-view';
import ImageOverlay from 'react-native-image-overlay';
export default function Wineries({route,navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="#800101" />
      <View
        style={{
          flexDirection: 'row',
          width: widthPercentageToDP(100),
          height: heightPercentageToDP(7),
          alignSelf: 'center',
          marginTop: -10,
          backgroundColor: '#800101',
        }}>
        <View
          style={{
            justifyContent: 'flex-start',
            width: widthPercentageToDP(80),
          }}>
          <Text
            style={{
              textTransform: 'uppercase',
              marginLeft: 25,
              color: 'white',
              textAlign: 'left',
              marginTop: 22,
              alignSelf: 'flex-start',
              fontSize: 18,
            }}>
            Wineries
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            marginTop: 22,
            flexDirection: 'row',
          }}>
          <Image source={require('../App/assets/search_black_24dp.png')} />
          <Image
            style={{marginLeft: 10}}
            source={require('../App/assets/shopping_bag_black_24dp.png')}
          />
        </View>
      </View>
      <ScrollView style={{flex:1}}>
      <View style={{justifyContent: 'center', alignSelf: 'center', marginTop:0}}>
     <TouchableOpacity onPress={() => navigation.navigate('WineriesDetais')}>
        <ImageOverlay
          style={{alignSelf: 'center'}}
          source={require('../App/assets/f14ad708-8cd2-4189-a81e-169cf27e3921.png')}
          height={2 * 100}
          title="Burgundy"
          titleStyle={{fontSize: 22, textTransform: 'uppercase'}}
        />
        </TouchableOpacity>
      </View>
      <View style={{height:50, justifyContent:'center'}}>
          <Text style={{marginLeft:10, color:'#505050'}}>Antoine Jobard (Meursault)</Text>
      </View>
      <View style={{justifyContent: 'center', alignSelf: 'center'}}>
        <ImageOverlay
          style={{alignSelf: 'center'}}
          source={require('../App/assets/a0285b0a-5208-415a-b765-0bd6d4f7c441.png')}
          height={2 * 100}
          title="Champagne"
          titleStyle={{fontSize: 22, textTransform: 'uppercase'}}
        />
      </View>
      <View style={{height:50, justifyContent:'center'}}>
          <Text style={{marginLeft:10, color:'#505050'}}>Antoine Bouvet (Mareuil-sur-Ay)</Text>
      </View>
      <View style={{justifyContent: 'center', alignSelf: 'center'}}>
        <ImageOverlay
          style={{alignSelf: 'center'}}
          source={require('../App/assets/70f27a1f-d022-466c-9a8d-53ceb037077d.png')}
          height={2 * 100}
          title="Beaujolais"
          titleStyle={{fontSize: 22, textTransform: 'uppercase'}}
        />
      </View>
      <View style={{height:50, justifyContent:'center'}}>
          <Text style={{marginLeft:10, color:'#505050'}}>Anne-Sophie Dubois (Fleurie)</Text>
      </View>
      <View style={{justifyContent: 'center', alignSelf: 'center'}}>
        <ImageOverlay
          style={{alignSelf: 'center'}}
          source={require('../App/assets/2d165c51-6410-4af1-ac15-7b1e8b32349c.png')}
          height={2 * 100}
          title="RHONE"
          titleStyle={{fontSize: 22, textTransform: 'uppercase'}}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
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

  heading: {
    fontSize: 20,
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
