import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import {Card, CardItem, Container, Header} from 'native-base';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import SafeAreaView from 'react-native-safe-area-view';
import ImageOverlay from 'react-native-image-overlay';
export default function Updates() {
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
            Updates
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
      <ScrollView style={{flex: 1}}>
        <Card style={{margin: 15, marginTop: 15, borderRadius: 4}}>
          <CardItem>
            <Text style={{fontSize: 15, marginTop: 10}}>God of Jura</Text>
          </CardItem>
          <CardItem>
            <Text style={{fontSize: 14, marginTop: -10}}>
              x2 2018 Overnoy Arbois Pupillin Rouge Poulsard $699/750ml
            </Text>
          </CardItem>
          <CardItem>
            <Text style={{fontSize: 14, marginTop: -10}}>
              x2 2015 Overnoy Arbois Pupillin Rouge Poulsard $699/750ml
            </Text>
          </CardItem>
          <CardItem>
            <Text style={{fontSize: 14, marginTop: -10}}>
              x2 2015 Overnoy Arbois Pupillin Blanc Chardonnay $699/750ml
            </Text>
          </CardItem>
          <CardItem style={{flexDirection: 'row', marginBottom: 10}}>
            <TouchableOpacity
              style={{
                marginLeft: widthPercentageToDP(27),
                alignSelf: 'center',
                justifyContent: 'center',
                width: widthPercentageToDP(30),
                backgroundColor: '#800101',
                height: heightPercentageToDP(4),
                borderRadius: 20,
               
              }}>
              <Text
                style={{
                  fontSize: 11,
                  textAlign: 'center',
                  color: 'white',
                  textTransform: 'uppercase',
                }}>
                Shop Now
              </Text>
            </TouchableOpacity>
            <View
              style={{
                alignSelf: 'flex-end',
                marginLeft: widthPercentageToDP(17),
              }}>
              <Text style={{color: 'grey', fontSize: 10}}>6.22 PM</Text>
            </View>
          </CardItem>
        </Card>
        <Card style={{margin: 15, marginTop: 15, borderRadius: 4}}>
          <CardItem>
            <Text style={{fontSize: 15, marginTop: 10}}>
              2017 Domaine Baron Thenard Grands Echezeaux Grand Cru $189/750ml
              (Multiples of 3 only)
            </Text>
          </CardItem>

          <CardItem style={{flexDirection: 'row', marginBottom: 10}}>
            <TouchableOpacity
              style={{
                marginLeft: widthPercentageToDP(27),
                alignSelf: 'center',
                justifyContent: 'center',
                width: widthPercentageToDP(30),
                backgroundColor: '#800101',
                height: heightPercentageToDP(4),
                borderRadius: 20,
              }}>
              <Text
                style={{
                  fontSize: 11,
                  textAlign: 'center',
                  color: 'white',
                  textTransform: 'uppercase',
                 
                }}>
                Shop Now
              </Text>
            </TouchableOpacity>
            <View
              style={{
                alignSelf: 'flex-end',
                marginLeft: widthPercentageToDP(17),
              }}>
              <Text style={{color: 'grey', fontSize: 10}}>5.22 PM</Text>
            </View>
          </CardItem>
        </Card>
        <View style={{borderWidth:1,marginTop:25, borderColor:'#807a81', }}>

        </View>
        <View style={{justifyContent:'center', marginTop:-18}}>
        <TouchableOpacity
              style={{
                
                alignSelf: 'center',
                justifyContent: 'center',
                width: widthPercentageToDP(30),
                backgroundColor: 'white',
                height: heightPercentageToDP(4),
                borderRadius: 20,
              }}>
              <Text
                style={{
                  fontSize: 11,
                  textAlign: 'center',
                  color: '#545454',
                 
                 
                }}>
May 18, Wed
              </Text>
            </TouchableOpacity>  
        </View>
        <Card style={{margin: 15, marginTop: 15, borderRadius: 4}}>
          <CardItem>
            <Text style={{fontSize: 15, marginTop: 10}}>
            Great Condition
            </Text>
          </CardItem>
          <CardItem>
            <Text style={{fontSize: 14, marginTop: -10}}>
            Domaine de L'Arlot
x6 1999 Nuits Saint Georges 1er Clos des Forets Saint Georges (monopole) $338/750ml
(Multiples of 2s only)
            </Text>
          </CardItem>

          <CardItem style={{flexDirection: 'row', marginBottom: 10}}>
            <TouchableOpacity
              style={{
                marginLeft: widthPercentageToDP(27),
                alignSelf: 'center',
                justifyContent: 'center',
                width: widthPercentageToDP(30),
                backgroundColor: '#800101',
                height: heightPercentageToDP(4),
                borderRadius: 20,
              }}>
              <Text
                style={{
                  fontSize: 11,
                  textAlign: 'center',
                  color: 'white',
                  textTransform: 'uppercase',
                 
                }}>
                Shop Now
              </Text>
            </TouchableOpacity>
            <View
              style={{
                alignSelf: 'flex-end',
                marginLeft: widthPercentageToDP(17),
              }}>
              <Text style={{color: 'grey', fontSize: 10}}>04:45 PM</Text>
            </View>
          </CardItem>
        </Card>
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
