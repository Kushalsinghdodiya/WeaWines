import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Feather';
import { Input, Button } from 'react-native-elements';
import { Card, CardItem, Container, Header } from 'native-base';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import SafeAreaView from 'react-native-safe-area-view';
import ImageOverlay from 'react-native-image-overlay';
import WooCommerceAPI from 'react-native-woocommerce-api';

const api = new WooCommerceAPI({
  url: "http://18.217.240.195",
  consumerKey: "ck_234a1d928528af0d9db1cdbd3593ec2fe8bd4826",
  consumerSecret: "cs_446bb534522c3354236068c05a1e3c1103acdec0",
  version: "wc/v3"
});

export default function PriceList({ route, navigation }) {
  const [subCat, setSubCat] = useState([]);
  const [quantity,setQuantity]=useState(0);
  useEffect(async () => {
   await api.get("products/categories/21", {
      per_page: 20, // 20 products per page
    })
      .then((response) => {

        setSubCat([response]);
        console.log("This is state of subcat ",subCat);
      })
      .catch((error) => {
        console.log("error", error);
      })

  }, [])

  const handleQuantity=text=>{

    
        let val=text;
        switch(val){
            case 'increase': setQuantity(quantity+1)
                              break;
            case 'decrease': if(quantity>=1){
                                 setQuantity(quantity-1);  
                              }
                              break;
            case 'default': console.log("defuat case ");
                           break                       

        }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            Price List
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            marginTop: 22,
            flexDirection: 'row',
          }}>
          <Image source={require('../App/assets/sort_black_24dp.png')} />
          <Image
            style={{ marginLeft: 10 }}
            source={require('../App/assets/shopping_bag_black_24dp.png')}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', width: widthPercentageToDP(100), alignSelf: 'center' }}>
        <View
          style={{
            borderRightWidth: 0.5,
            height: heightPercentageToDP(5),

            width: widthPercentageToDP(50),
            backgroundColor: 'white',
            flexDirection: 'row'
          }}>

          <Text style={{ color: '#2e2e2e', fontSize: 14, paddingTop: 10, paddingLeft: 20 }}>Burgundy</Text>
          <View style={{ marginLeft: widthPercentageToDP(20), paddingTop: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
              <Image

                style={{}}
                source={require('../App/assets/tune_black_24dp.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: heightPercentageToDP(5),
            alignSelf: 'center',
            width: widthPercentageToDP(50),
            backgroundColor: 'white',
            flexDirection: 'row'
          }}>
          <Text style={{ color: '#a29c9c', fontSize: 13, paddingTop: 12, paddingLeft: 20 }}>Search...</Text>
          <View style={{ marginLeft: widthPercentageToDP(22), paddingTop: 10 }}>
            <Icons name="search" size={20} color="black" style={{ marginBottom: -15 }} />
          </View>
        </View>
      </View>
      <Text style={{ fontSize: 16, marginTop: 10, color: '#2e2e2e', paddingLeft: 3 }}>Antoine Jobard</Text>
      <ScrollView style={{ flex: 1 }}>

{subCat.map((data,index)=>{
  return(
    <View key={index}>
          <Card style={{ margin: 15, marginTop: 15, borderRadius: 4 }}>
            <CardItem>
              <Text style={{ fontSize: 15, marginTop: 10 }}>{data.name}</Text>
            </CardItem>
            <CardItem style={{ marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 14, flexDirection: 'row', marginTop: -20 }}>
               {data.slug}
              </Text>
              <View
                style={{
                  alignSelf: 'flex-end',

                  marginTop: -10

                }}>
                <Text style={{ color: 'black', fontSize: 16, }}>$S 148</Text>
              </View>
            </CardItem>




          </Card>

          <Card style={{ flexDirection: 'row', borderTopWidth: 1, marginTop: -12, borderColor: '#e1e1e1' }}>
            <CardItem style={{
              borderRightWidth: 1,
              width: widthPercentageToDP(45),
              borderColor: '#e1e1e1',
              flexDirection: 'row'
            }}>


              <Text style={{ fontSize: 18 }}><TouchableOpacity onPress={()=>handleQuantity("decrease")}><Text>-</Text></TouchableOpacity></Text>
              <Text style={{ marginLeft: widthPercentageToDP(15), fontSize: 18 }}>{quantity}</Text>

              <Text style={{ marginLeft: widthPercentageToDP(15), fontSize: 18 }}><TouchableOpacity onPress={()=>handleQuantity("increase")}><Text>+</Text></TouchableOpacity></Text>



            </CardItem>
            <CardItem style={{
              width: widthPercentageToDP(45),
              justifyContent: 'center',
              flexDirection: 'row'
            }}>

              <Icon
                name="shopping-bag"
                style={{ marginLeft: 5 }}
                size={14}
                color="#800101"
              />
              <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                <Text style={{ color: '#800101', marginLeft: 5 }}>Add to Cart</Text>
              </TouchableOpacity>


            </CardItem>
          </Card>

        </View>
  );
})}
        
        {/* <Card style={{margin: 15, marginTop: 15, borderRadius: 4}}>
          <CardItem>
            <Text style={{fontSize: 15, marginTop: 10}}>Vintage:2018</Text>
          </CardItem>
          <CardItem style={{marginBottom:10,flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize: 14,  flexDirection:'row',marginTop:-20}}>
            Meursault 1er Blagny
            </Text>
            <View
              style={{
                alignSelf: 'flex-end',
               
                marginTop:-10
              
              }}>
              <Text style={{color: 'black', fontSize: 16, }}>$S 148</Text>
            </View>
          </CardItem>
        
         
          
         
        </Card> */}
        {/* <Card style={{flexDirection:'row',borderTopWidth:1, marginTop:-12,borderColor:'#e1e1e1'}}>
        <CardItem style={{borderRightWidth:1,
            width: widthPercentageToDP(45),
            borderColor:'#e1e1e1',
            flexDirection:'row' }}>
          
              
          <Text style={{fontSize:18}}>-</Text>
          <Text style={{marginLeft:widthPercentageToDP(15),fontSize:18}}>0</Text>

          <Text style={{marginLeft:widthPercentageToDP(15),fontSize:18}}>+</Text>

       
        
          </CardItem>
          <CardItem style={{
            width: widthPercentageToDP(45),
        justifyContent:'center',
            flexDirection:'row' }}>
          
          <Icon
                          name="shopping-bag"
                        style={{marginLeft:5}}
                          size={14}
                          color="#800101"
                        />
          <Text style={{color:'#800101',marginLeft:5}}>Add to Cart</Text>
       
        
          </CardItem>
        </Card> */}
        {/* <Card style={{margin: 15, marginTop: 15, borderRadius: 4}}>
          <CardItem>
            <Text style={{fontSize: 15, marginTop: 10}}>Vintage:2018</Text>
          </CardItem>
          <CardItem style={{marginBottom:10,flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize: 14,  flexDirection:'row',marginTop:-20}}>
            Meursault 1er Blagny
            </Text>
            <View
              style={{
                alignSelf: 'flex-end',
               
                marginTop:-10
              
              }}>
              <Text style={{color: 'black', fontSize: 16, }}>$S 148</Text>
            </View>
          </CardItem>
        
         
          
         
        </Card> */}
        {/* <Card style={{flexDirection:'row',borderTopWidth:1, marginTop:-12,borderColor:'#e1e1e1'}}>
        <CardItem style={{borderRightWidth:1,
            width: widthPercentageToDP(45),
            borderColor:'#e1e1e1',
            flexDirection:'row' }}>
          
              
          <Text style={{fontSize:18}}>-</Text>
          <Text style={{marginLeft:widthPercentageToDP(15),fontSize:18}}>0</Text>

          <Text style={{marginLeft:widthPercentageToDP(15),fontSize:18}}>+</Text>

       
        
          </CardItem>
          <CardItem style={{
            width: widthPercentageToDP(45),
        justifyContent:'center',
            flexDirection:'row' }}>
          
          <Icon
                          name="shopping-bag"
                        style={{marginLeft:5}}
                          size={14}
                          color="#800101"
                        />
          <Text style={{color:'#800101',marginLeft:5}}>Add to Cart</Text>
       
        
          </CardItem>
        </Card> */}
        {/* <Card style={{margin: 15, marginTop: 15, borderRadius: 4}}>
          <CardItem>
            <Text style={{fontSize: 15, marginTop: 10}}>Vintage:2018</Text>
          </CardItem>
          <CardItem style={{marginBottom:10,flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize: 14,  flexDirection:'row',marginTop:-20}}>
            Meursault 1er Blagny
            </Text>
            <View
              style={{
                alignSelf: 'flex-end',
               
                marginTop:-10
              
              }}>
              <Text style={{color: 'black', fontSize: 16, }}>$S 148</Text>
            </View>
          </CardItem>
        
         
          
         
        </Card> */}
        {/* <Card style={{flexDirection:'row',borderTopWidth:1, marginTop:-12,borderColor:'#e1e1e1'}}>
        <CardItem style={{borderRightWidth:1,
            width: widthPercentageToDP(45),
            borderColor:'#e1e1e1',
            flexDirection:'row' }}>
          
              
          <Text style={{fontSize:18}}>-</Text>
          <Text style={{marginLeft:widthPercentageToDP(15),fontSize:18}}>0</Text>

          <Text style={{marginLeft:widthPercentageToDP(15),fontSize:18}}>+</Text>

       
        
          </CardItem>
          <CardItem style={{
            width: widthPercentageToDP(45),
        justifyContent:'center',
            flexDirection:'row' }}>
          
          <Icon
                          name="shopping-bag"
                        style={{marginLeft:5}}
                          size={14}
                          color="#800101"
                        />
          <Text style={{color:'#800101',marginLeft:5}}>Add to Cart</Text>
       
        
          </CardItem>
        </Card> */}

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
