import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  ToastAndroid,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Feather';
import {Input, Button} from 'react-native-elements';
import {Card, CardItem, Container, Header} from 'native-base';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Vars from '../utils/Vars';
import SafeAreaView from 'react-native-safe-area-view';
import ImageOverlay from 'react-native-image-overlay';
import WooCommerceAPI from 'react-native-woocommerce-api';
import axios from 'axios';


export default function PriceList({route, navigation}) {

  const [subCat, setSubCat] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [filterset, setfilterset] = useState('Select');
  const [loading,setLoading]=useState(false);
 
  
  const Notify = msg =>{
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
  };

  useEffect(async () => {
    console.log(route);
    setLoading(true);
    if (route.params == undefined || route.params.filterData.length == 0) {
      let msg = 'Select';
      setfilterset(msg);
      axios
        .get(`http://fmw.vxinfosystem.com/wp-json/letscms/v1/products`)
        .then(response => {
          // console.log("this is default fetch",response.data.data.products[0]);

          let dupli = [];
          let original = [...response.data.data.products];
          original.map(function (obj) {
            obj.quantity = '1';
            dupli.push(obj);
          });

          let arr = [];
          arr = [response.data];
          setLoading(false);
          setSubCat(response.data.data.products);
         
        });
    } else {
      setLoading(true);
      const {filterData} = route.params;
      const uniqueSet = Array.from(new Set(filterData));

      console.log('this is params data', uniqueSet.toString());
      setfilterset(uniqueSet.toString());
      axios
        .get(
          `http://fmw.vxinfosystem.com/wp-json/letscms/v1/products?categories=${uniqueSet.toString()}`,
        )
        .then(response => {
          let arr = [];
          arr = [response.data];
          
          let dupli = [];
          let original = [...response.data.data.products];
          original.map(function (obj) {
            obj.quantity = '1';
            dupli.push(obj);
          });

          setLoading(false);
          setSubCat(response.data.data.products);
        });
    }
  }, []);

  const Addtocart = (pid, qty) => {
    setLoading(true);
    var body = {
      product_id: pid,
      quantity: qty,
    };

axios({
      method: 'post',
      url: `${Vars.host}wp-json/letscms/v1/cart/add-item`,
      data: body,
      headers: {
        letscms_token: `${Vars.token}`,
        'Content-Type': 'application/json',
      },
    }).then(function (response) {
        if (response.data.status == true) {
          let msg = response.data.message;
          setLoading(false);
          Notify(msg);
          navigation.navigate('Checkout')
        } else {
          setLoading(false);
        }
      })
      .catch(function (response) {
        console.log(response);
        setLoading(false);
      });

   
  };


const handleQuantity = (text, incprod) => {
  setLoading(true);
    let newCart = JSON.parse(JSON.stringify(subCat));
    let index = newCart.findIndex(obj => obj.id === incprod);
   if (index >= 0) {
      newCart[index].quantity = parseInt(newCart[index].quantity) + 1;
      let msg = 'Product Quanity Increased';
      setLoading(false);
      Notify(msg);
    }
    setLoading(false);
    setSubCat([...newCart]);

};


const  handleDecrease =(text,incprod,actul_val)=>{
  setLoading(true);
  if(actul_val==1){
  let msg = 'Minimum quanity is 1';
  Notify(msg);
  }else{
    let newCart = JSON.parse(JSON.stringify(subCat));
    let index = newCart.findIndex(obj => obj.id === incprod);
    if (index >= 0) {
      newCart[index].quantity = parseInt(newCart[index].quantity) - 1;
      let msg = 'Product Quanity Decreased';
      setLoading(false);
      Notify(msg);
    }
    setSubCat([...newCart]);
}}

  return (

  <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#800101" />
     
     {loading ? (
      <View style={[styles.container_loader,styles.horizontal]}>
         <ActivityIndicator size="large" color="#800101" />
         <View >
            <Text style={{textAlign:'center',fontSize:14,marginTop:10}}>Loading</Text>
         </View>
        
      </View>
     ):(
       <>
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
            style={{marginLeft: 10}}
            source={require('../App/assets/shopping_bag_black_24dp.png')}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: widthPercentageToDP(100),
          alignSelf: 'center',
        }}>
        <View
          style={{
            borderRightWidth: 0.5,
            height: heightPercentageToDP(5),

            width: widthPercentageToDP(50),
            backgroundColor: 'white',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#2e2e2e',
              fontSize: 18,
              paddingTop: 10,
              paddingLeft: 20,
              width:80,
              overflow:'hidden',
             
            }}>
            {filterset}
          </Text>
          <View style={{marginLeft: widthPercentageToDP(20), paddingTop: 10}}>
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
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#a29c9c',
              fontSize: 13,
              paddingTop: 12,
              paddingLeft: 20,
            }}>
            Search...
          </Text>
          <View style={{marginLeft: widthPercentageToDP(22), paddingTop: 10}}>
            <Icons
              name="search"
              size={20}
              color="black"
              style={{marginBottom: -15}}
            />
          </View>
        </View>
      </View>
      <Text
        style={{fontSize: 16, marginTop: 10, color: '#2e2e2e', paddingLeft: 3}}>
        {/* Antoine Jobard */}
      </Text>
      <ScrollView style={{flex: 1}}>
        {(!subCat.length==0)?
          
          subCat.map((data, index) => {
          
          return (
            <View key={index}>
              <Card style={{margin: 15, marginTop: 15, borderRadius: 4}}>
                <CardItem>
                  <Text style={{fontSize: 15, marginTop: 10}}>{data.name}</Text>
                </CardItem>
                <CardItem
                  style={{
                    marginBottom: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      flexDirection: 'row',
                      marginTop: -20,
                    }}>
                    {data.sku}
                  </Text>
                  <View
                    style={{
                      alignSelf: 'flex-end',

                      marginTop: -10,
                    }}>
                    <Text style={{color: 'black', fontSize: 16}}>
                      $S {data.regular_price}
                    </Text>
                  </View>
                </CardItem>
              </Card>

              <Card
                style={{
                  flexDirection: 'row',
                  borderTopWidth: 1,
                  marginTop: -12,
                  borderColor: '#e1e1e1',
                }}>
                <CardItem
                  style={{
                    borderRightWidth: 1,
                    width: widthPercentageToDP(45),
                    borderColor: '#e1e1e1',
                    flexDirection: 'row',
                  }}>
                  <Text style={{fontSize: 18}}>
                    <TouchableOpacity
                      onPress={() => handleDecrease('increase', data.id,data.quantity)}>
                      <Text>-</Text>
                    </TouchableOpacity>
                  </Text>
                  <Text
                    style={{marginLeft: widthPercentageToDP(15), fontSize: 18}}>
                    {data.quantity}
                  </Text>

                  <Text
                    style={{marginLeft: widthPercentageToDP(15), fontSize: 18}}>
                    <TouchableOpacity
                      onPress={() => handleQuantity('increase', data.id)}>
                      <Text>+</Text>
                    </TouchableOpacity>
                  </Text>
                </CardItem>
                <CardItem
                  style={{
                    width: widthPercentageToDP(45),
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Icon
                    name="shopping-bag"
                    style={{marginLeft: 5}}
                    size={14}
                    color="#800101"
                  />
                  <TouchableOpacity
                    onPress={() => Addtocart(data.id, data.quantity)}>
                    <Text style={{color: '#800101', marginLeft: 5}}>
                      Add to Cart
                    </Text>
                  </TouchableOpacity>
                </CardItem>
              </Card>
            </View>
          );
        }) :
        
        <View style={[styles.container_loader,styles.horizontal]}>
        
         <View>
            <Text style={{textAlign:'center',fontSize:14,marginTop:10}}>No Products Found</Text>
         </View>
        
        </View>
        
        }

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
      </>
     )

     }
     
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
  horizontal:{
   flexDirection:'column',
   justifyContent:'center',
   padding:10,
  
  },
  container_loader:{
    flex:1,
    justifyContent:'center'
  }
});
