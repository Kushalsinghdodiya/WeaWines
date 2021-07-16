import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {Card, CardItem, Input, useColorModeValue} from 'native-base';
import {Button} from 'react-native-elements';

import SafeAreaView from 'react-native-safe-area-view';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
export default function CartItems(route,navigation) {
  const navigate=()=>{
    navigation.navigate('Checkout')
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#800101" />
      <Text style={{color: '#505050', fontSize: 15, paddingLeft:15, marginTop:15 }}>
      Antoine Jobards
            </Text>
      <ScrollView style={{flex: 1, padding: 10,marginTop:-10}}>
        <Card style={{margin: 15, marginTop: 15, borderRadius: 4}}>
          <CardItem style={{display: 'flex', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 15}}>Vintage:2018</Text>
            <Text style={{color: '#800101', fontSize: 15, fontWeight: 'bold'}}>
              x
            </Text>
          </CardItem>
          <CardItem>
            <Text style={{fontSize: 14, flexDirection: 'row', marginTop: -20}}>
              Meursault 1er Blagny
            </Text>

            <View
              style={{
                alignSelf: 'flex-end',
                marginLeft: widthPercentageToDP(30),
                marginTop: -10,
              }}>
              <Text style={{color: 'black', fontSize: 16,fontWeight:'900'}}>$S 148</Text>
            </View>
          </CardItem>
          <CardItem style={{marginBottom: 10}}>
            <Text style={{fontSize: 14, flexDirection: 'row', marginTop: -20}}>
              $$ {''}148
            </Text>
          </CardItem>
        </Card>
        <Card
          style={{borderTopWidth: 1, marginTop: -12, borderColor: '#e1e1e1'}}>
          <CardItem
            style={{
              borderRightWidth: 1,
              width: '100%',
              borderColor: '#e1e1e1',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18}}>-</Text>
            <Text style={{marginLeft: widthPercentageToDP(15), fontSize: 18}}>
              01
            </Text>

            <Text style={{marginLeft: widthPercentageToDP(15), fontSize: 18}}>
              +
            </Text>
          </CardItem>
        </Card>

        <Card style={{margin: 15, marginTop: 15, borderRadius: 4}}>
          <CardItem style={{display: 'flex', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 15}}>Vintage:2018</Text>
            <Text style={{color: '#800101', fontSize: 15, fontWeight: 'bold'}}>
              x
            </Text>
          </CardItem>
          <CardItem>
            <Text style={{fontSize: 14, flexDirection: 'row', marginTop: -20}}>
              Meursault 1er Blagny
            </Text>

            <View
              style={{
                alignSelf: 'flex-end',
                marginLeft: widthPercentageToDP(30),
                marginTop: -10,
                
              }}>
              <Text style={{color: 'black', fontSize: 16,fontWeight:'900'}}>$S 148</Text>
            </View>
          </CardItem>
          <CardItem style={{marginBottom: 10}}>
            <Text style={{fontSize: 14, flexDirection: 'row', marginTop: -20}}>
              $$ {''}148
            </Text>
          </CardItem>
        </Card>
        <Card
          style={{borderTopWidth: 1, marginTop: -12, borderColor: '#e1e1e1'}}>
          <CardItem
            style={{
              borderRightWidth: 1,
              width: '100%',
              borderColor: '#e1e1e1',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18}}>-</Text>
            <Text style={{marginLeft: widthPercentageToDP(15), fontSize: 18}}>
              01
            </Text>

            <Text style={{marginLeft: widthPercentageToDP(15), fontSize: 18}}>
              +
            </Text>
          </CardItem>
        </Card>
        <View>
        <Text style={{margin:10,color:'#505050'}}>Apply Coupon</Text>
       <View  style={{height:heightPercentageToDP(5),flexDirection:'row',justifyContent:'space-between',borderColor:'grey',borderWidth:0.5,borderRadius:50,paddingLeft:20,backgroundColor:'white'}}>
<View>
<Text ></Text>
</View>
<TouchableOpacity style={{marginBottom:5,width:widthPercentageToDP(35),borderRadius:20,marginTop:5,height:heightPercentageToDP(4),marginRight:5, backgroundColor:'#9b2120', justifyContent:'center'}}>
  <Text style={{textTransform:'uppercase', color:'white',textAlign:'center'}}>Apply Coupon</Text>
</TouchableOpacity>
       </View>
        

</View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: 12,
            marginTop: 20,
          }}>
          <View style={{width: '50%', display: 'flex'}}>
            <Text style={{fontSize: 18}}>Item Total</Text>
          </View>

          

          <View style={{width: '50%', display: 'flex', alignItems: 'flex-end'}}>
            <Text style={{textAlign: 'right', fontSize: 20}}> $ 364.00</Text>
          </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', padding: 12,marginTop:-15}}>
          <View style={{width: '50%', display: 'flex'}}>
            <Text style={{fontSize: 16}}>Shipping</Text>
          </View>

          <View style={{width: '50%', display: 'flex', alignItems: 'flex-end'}}>
            <Text style={{textAlign: 'right', fontSize: 16}}> -</Text>
          </View>
        </View>
        <View style={{paddingLeft: 10, paddingRight: 10,marginTop:5}}>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 0.5,
            }}
          />
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: 15,
            marginBottom: 20,
          }}>
          <View style={{width: '50%', display: 'flex'}}>
            <Text style={{fontSize: 16}}>Grand Total</Text>
          </View>

          <View style={{width: '50%', display: 'flex', alignItems: 'flex-end'}}>
            <Text
              style={{textAlign: 'right', fontSize: 20, }}>
              {' '}
              $ 364.00
            </Text>
          </View>
        </View>

        <Button
          buttonStyle={styles.loginBtn}
          onPress={() => navigate()}
          title="Proceed to Checkout "
        />

<View style={styles.option2}>
        
          <TouchableOpacity >
            <Text style={styles.text}>Continue Shopping </Text>
          </TouchableOpacity>
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
    borderRadius: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
 
  option2: {
    alignItems: 'center',
    marginTop:10,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: '#800101',
    textDecorationLine: 'underline',

    marginLeft: 10,
  },
});
