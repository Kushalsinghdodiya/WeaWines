import React , { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {Card, CardItem,Picker} from 'native-base';
import {Input, Button,Checkbox} from 'react-native-elements';
import Vars from '../utils/Vars';
import SafeAreaView from 'react-native-safe-area-view';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import axios from 'axios';

export default function Checkout() {
const [data,setData]=useState([]);
const [total,setTotal]=useState([]);
const [shipping,setShipping]=useState([]);

useEffect(() => {
  
  axios.get(`http://fmw.vxinfosystem.com/wp-json/letscms/v1/checkout`,{
    headers: {
      letscms_token: `${Vars.token}`,
    }
  }).then(response => {
        let res=response.data.data.cart_items;
        let totres=response.data.data.cart_totals;
        let shipdetails=response.data.data.customer;
        console.log("this is the response ", shipdetails);
      
        setData(res);
        setTotal(totres);
        setShipping(shipdetails);
      });  


    

}, [])



  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#800101" />
      <ScrollView style={{flex: 1, padding: 10}}>
        <Text style={{margin: 5, fontSize: 16}}>General Information</Text>
        <Card style={{margin: 15, marginTop: 15, borderRadius: 4}}>
          <CardItem
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              paddingLeft: 10,
              paddingRight: 10,
            }}>
            <Text style={{marginLeft: 15, color: 'grey'}}>Name</Text>
            <Input
              placeholder="Name"
              style={{fontSize: 15, paddingBottom: -5}}
              value="qwerty"
            />

            <Text style={{marginLeft: 15, color: 'grey'}}>Contact No#</Text>
            <Input
              placeholder="Name"
              style={{fontSize: 15, paddingBottom: -5}}
              value="+91123456789"
            />

            <Text style={{marginLeft: 15, color: 'grey'}}>Email</Text>
            <Input
              placeholder="Name"
              style={{fontSize: 15, paddingBottom: -5}}
              value="abc@gmail.com"
            />
          </CardItem>
        </Card>
        <View style={{marginTop: 20}}>
          <Text style={{margin: 5, fontSize: 16}}>Shipping Address</Text>
          <Card style={{margin: 15, marginTop: 15, borderRadius: 4}}>
            <CardItem
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingLeft: 10,
                paddingRight: 10,
              }}>
              <Input
                style={{fontSize: 15, paddingBottom: -5}}
                placeholder="Address# , Street Name"
              />

              <Input
                style={{fontSize: 15, paddingBottom: -5}}
                placeholder="Building (if any)"
              />

              <Input
                placeholder="Postal / Zip Code"
                style={{fontSize: 15, paddingBottom: -5}}
              />

              <View>
                <Text>Same as Biling Address</Text>
              </View>
            </CardItem>
          </Card>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={{margin: 5, fontSize: 16}}>Order Information</Text>
          <Card
            style={{
              margin: 15,
              marginTop: 15,
              marginBottom: 15,
              borderRadius: 4,
            }}>
            <CardItem
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              {/* <View>
                <Text> Vintage 2018</Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <View style={{width: '50%'}}>
                    <Text> Meursault 1er Blagny</Text>
                  </View>
                  <View style={{width: '50%'}}>
                    <Text style={{textAlign: 'right'}}> 1nos x $${''} 148</Text>
                  </View>
                </View>
              </View> */}

              {data.map((data,index)=>{

                
                 return  <View style={{marginTop: 10, marginBottom: 10}} key={data.product_id}>
                          {/* <Text> Vintage 2018</Text> */}
                          <View
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-evenly',
                            }}>
                            <View style={{width: '50%'}}>
                              <Text> {data.product_name}</Text>
                            </View>
                            <View style={{width: '50%'}}>
                              <Text style={{textAlign: 'right'}}> {data.quantity}nos x ${''} {data.product_price}</Text>
                            </View>
                          </View>
                        </View>
              })}

              {/* <View style={{marginTop: 10, marginBottom: 10}}>
                <Text> Vintage 2018</Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <View style={{width: '50%'}}>
                    <Text> Meursault 1er Blagny</Text>
                  </View>
                  <View style={{width: '50%'}}>
                    <Text style={{textAlign: 'right'}}> 1nos x $${''} 148</Text>
                  </View>
                </View>
              </View> */}


              <View style={{marginTop: 10}}>
              
              
                {/* <Text> Vintage 2018</Text> */}
                {/* <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <View style={{width: '50%'}}>
                    <Text> Meursault 1er Blagny</Text>
                  </View>

                  <View style={{width: '50%'}}>
                    <Text style={{textAlign: 'right'}}> 1nos x $${''} 148</Text>
                  </View>
                </View> */}


                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    marginTop: 15,
                    marginBottom: 15,
                  }}
                />


                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginBottom: 10,
                  }}>
                  <View style={{width: '50%'}}>
                    <Text>Shipping</Text>
                  </View>

                  <View style={{width: '50%'}}>
                    <Text
                      style={{
                        textAlign: 'right',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      {''}
                      ${' '}{total.shipping_total}
                    </Text>
                  </View>
                </View>



                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginBottom: 10,
                  }}>
                  <View style={{width: '50%'}}>
                    <Text>Item Total</Text>
                  </View>

                  <View style={{width: '50%'}}>
                    <Text
                      style={{
                        textAlign: 'right',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      {' '}
                      ${' '}{total.cart_contents_total}
                    </Text>
                  </View>
                </View>
              </View>
            </CardItem>



            
            <CardItem
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingLeft: 10,
                paddingRight: 10,
                backgroundColor: '#800101',
              }}>
              <View style={{padding: 5}}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly', 
                  }}>
                  <View style={{width: '50%'}}>
                    <Text style={{fontSize: 16, color: 'white'}}>
                      Grand Total
                    </Text>
                  </View>
                  <View style={{width: '50%'}}>
                    <Text
                      style={{
                        textAlign: 'right',
                        fontSize: 16,
                        color: 'white',
                      }}>
                      {' '}
                      ${' '}{total.cart_contents_total}
                    </Text>
                  </View>
                </View>
              </View>
            </CardItem>
          </Card>

          <Button buttonStyle={styles.checkBtn} title="CheckOut " />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  checkBtn: {
    backgroundColor: '#800101',

    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 20,
  },
});
