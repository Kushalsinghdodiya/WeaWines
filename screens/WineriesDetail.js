import React, { useState, useEffect } from 'react';
 
import {StyleSheet,ScrollView, Image, Text, TouchableOpacity, View,useWindowDimensions} from 'react-native';
import {Appbar} from 'react-native-paper';
import {Input, Button} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import RenderHtml from 'react-native-render-html';
import WooCommerceAPI from 'react-native-woocommerce-api';
import axios from 'axios';
import { WebView } from 'react-native-webview';
import { widthPercentageToDP } from 'react-native-responsive-screen';
export default function WineriesDetail({route, navigation}) {
  // const WinerHeader = () => (
  //     <Appbar.Header  style={styles.header} >
  //       <Appbar.BackAction  />
  //     </Appbar.Header>
  // );
  const api = new WooCommerceAPI({
    url: "http://18.217.240.195",
    consumerKey: "ck_234a1d928528af0d9db1cdbd3593ec2fe8bd4826",
    consumerSecret: "cs_446bb534522c3354236068c05a1e3c1103acdec0",
    version: "wc/v3"
  });

  const { width } = useWindowDimensions();
  const [newproductapi, setProductApi] = useState()
  const { code } = route.params;
  const { code1 } = route.params;
  const source = {
    html: `${code}`
  };
  const source1 = {
    html: `${code1}`
  };
  
console.log("this is prop", code1);
  
  return (
   
    <View style={styles.container}>
    <SafeAreaView>
    <ScrollView>
      <View style={styles.image}>
        <Image
          style={{maxHeight:'85%',maxWidth:'100%'}}
          source={require('../navigation/assets/images/details.jpg')}
        />
      </View>

      <View style={{padding: 10, marginTop:-20}}>
        <Text style={{fontSize: 16, color: '#000', marginBottom: 10}}>
          What WEA say ?
        </Text>
        <Text style={{fontSize: 13, color: '#505050',letterSpacing:.5}}>
       
        <RenderHtml
          contentWidth={width}
          source={source}
          enableExperimentalMarginCollapsing={true}
        />
      
        </Text>
       
      </View>

      <View style={{padding: 10, marginTop:2}}>
        <Text style={{fontSize: 16, color: '#000', marginBottom: 10}}>
        What do the Critics say?
        </Text>
        <Text style={{fontSize: 16, color: '#000', marginBottom: 10}}>
        Allen Meadows, Burghound #55
        </Text>
        <Text style={{fontSize: 13, color: '#505050',letterSpacing:.5}}>
        <RenderHtml
          contentWidth={width}
          source={source1}
          enableExperimentalMarginCollapsing={true}
        />
        </Text>
      </View>

      
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 flex:1
  },

  image: {
    width: '100%',
    height:'24%',
  },
});
