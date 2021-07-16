import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image,ScrollView,
} from 'react-native';
import {Picker } from '@react-native-picker/picker'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import {Container, Header} from 'native-base';
import IconRight from 'react-native-vector-icons/AntDesign';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import SafeAreaView from 'react-native-safe-area-view';
import ImageOverlay from 'react-native-image-overlay';
const Item = Picker.Item

export default function Wineries({route,navigation}) {
  const [occupationName,setItemSelect]= useState('Burgundy')
  const pickerStyle = {
    inputIOS: {
      color: 'white',
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 12,
    },
    inputAndroid: {
      color: 'white',
      backgroundColor:'white'
    },
 
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#800101" />
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
      <View
                                style={{
                                  // backgroundColor: "#efefef",
                                  marginHorizontal: 16,
                                  marginTop: 6,
                                  width: widthPercentageToDP(98),
                                  borderRadius: 6
                                  
                                ,justifyContent:'center',
                                alignSelf:'center'
                                }}
                              >
                                <Picker
                                dropdownIconColor="black"
                                  mode='dropdown'
                                  itemStyle={{ paddingLeft: 18, backgroundColor:'white'}}
                                  style={pickerStyle}
                                 
                                  selectedValue={occupationName}
                                  onValueChange={(itemValue, itemIndex) =>
                                   setItemSelect(itemValue )
                                  }
                                >
                                 
                                    <Item
                                   
                                      label={"Burgundy"}
                                      value={"Burgundy"}
                                    />
                                    <Item
                                      
                                      label={"Champagne"}
                                      value={"Champagne"}
                                    />
                                    <Item
                                     
                                      label={"Beaujolais"}
                                      value={"Beaujolais"}
                                    />
                                 
                                </Picker>
                              </View>
                            
      <ScrollView style={{flex:1, marginTop:5}}>
      <View style={{justifyContent: 'center', alignSelf: 'center', marginTop:0}}>
     <TouchableOpacity onPress={() => navigation.navigate('WineriesDetais')}>
       {occupationName === 'Burgundy'?
        <ImageOverlay
          style={{alignSelf: 'center'}}
          source={require('../App/assets/f14ad708-8cd2-4189-a81e-169cf27e3921.png')}
          height={2 * 100}
          title="Burgundy"
          titleStyle={{fontSize: 18, textTransform: 'uppercase'}}
        />: null }
        {occupationName === 'Champagne'?
        <ImageOverlay
          style={{alignSelf: 'center'}}
          source={require('../App/assets/a0285b0a-5208-415a-b765-0bd6d4f7c441.png')}
          height={2 * 100}
          title="Champagne"
          titleStyle={{fontSize: 18, textTransform: 'uppercase'}}
        />: null }
        {occupationName === 'Beaujolais'?
        <ImageOverlay
          style={{alignSelf: 'center'}}
          source={require('../App/assets/70f27a1f-d022-466c-9a8d-53ceb037077d.png')}
          height={2 * 100}
          title="Beaujolais"
          titleStyle={{fontSize: 18, textTransform: 'uppercase'}}
        /> : null }
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent:'space-between',marginTop:10}}>
          <Text style={{marginLeft:10, color:'#505050',paddingTop:15}}>Antoine Jobard (Meursault)</Text>
          <Text style={{marginLeft:10, color:'#505050',paddingTop:15}}>Bachelet-Monnot (Maranges)</Text>
          <Text style={{marginLeft:10, color:'#505050',paddingTop:15}}>Ballot-Millot (Meursault)
</Text>
<Text style={{marginLeft:10, color:'#505050',paddingTop:15}}>Bernard Moreau (Chassagne-Montrachet)</Text>
<Text style={{marginLeft:10, color:'#505050',paddingTop:15}}>Berthaut-Gerbet (Fixin)</Text>
<Text style={{marginLeft:10, color:'#505050',paddingTop:15}}>Caroline Morey (Chassagne-Montrachet)</Text>
<Text style={{marginLeft:10, color:'#505050',paddingTop:15}}>David Duband (Chevannes)</Text>
<Text style={{marginLeft:10, color:'#505050',paddingTop:15}}>Duroché (Gevrey-Chambertin)</Text>
<Text style={{marginLeft:10, color:'#505050',paddingTop:15}}>Eleni et Edouard Vocoret (Chablis)</Text>
<Text style={{marginLeft:10, color:'#505050',paddingTop:15}}>Georges Noellat/Maxime Cheurlin (Vosne-Romanee)</Text>
<Text style={{marginLeft:10, color:'#505050',paddingTop:15}}>Guffens-Heynen (Macon)</Text>
<Text style={{marginLeft:10, color:'#505050',paddingTop:15}}>Hubert Lamy (St Aubin)</Text>
<Text style={{marginLeft:10, color:'#505050',paddingTop:15}}>Moreau-Naudet (Chablis)</Text>
<Text style={{marginLeft:10, color:'#505050',paddingTop:15}}>Pierre-Yves Colin-Morey (Chassagne-Montrachet)</Text>
<Text style={{marginLeft:10, color:'#505050',paddingTop:15}}>Maison Verget (Macon)</Text>
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
