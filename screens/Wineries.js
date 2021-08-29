import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image, ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { Container, Header } from 'native-base';
import IconRight from 'react-native-vector-icons/AntDesign';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import SafeAreaView from 'react-native-safe-area-view';
import ImageOverlay from 'react-native-image-overlay';
import WooCommerceAPI from 'react-native-woocommerce-api';
import axios from 'axios';
const Item = Picker.Item

export default function Wineries({ route, navigation }) {
  const [occupationName, setItemSelect] = useState('')
  const [products, setProducts] = useState([]);
  const [catprod, setcaatprod] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setselectedProduct] = useState(0);
  const [selectedProductName, setselectedProductName] = useState('Different Tshirt');
  const [html, setHtml] = useState('');
  const [newproductapi, setProductApi] = useState([])

  const api = new WooCommerceAPI({
    url: "http://18.217.240.195",
    consumerKey: "ck_234a1d928528af0d9db1cdbd3593ec2fe8bd4826",
    consumerSecret: "cs_446bb534522c3354236068c05a1e3c1103acdec0",
    version: "wc/v3"
  });


  useEffect(async () => {

    

    const res = await axios.get('https://weawines.shubhchintak.co/wp-json/wp/v2/categories')
      .then((response) => {
        console.log("adsss",response.data)
        let arr = [];
        arr = [response.data];
       setProductApi(response.data)
      
    });
    const res1 = await axios.get('https://weawines.shubhchintak.co/wp-json/wp/v2/wineries')
      .then((response) => {
        
        let arr = [];
        arr = [response.data];
        setCategories(response.data)
        setcaatprod(true)
    });
}, []);



  const handleInput = async (val) => {
   
    setselectedProductName(val)
    let sle = val;
    {newproductapi.map((data, index) => {
      if(data.name === val){
      return (
    
      setselectedProduct(data.image)
      );
      }
    })}

    

    let arrdata = [];
    setItemSelect(val);


    await api.get(`products/${val}`, {
      per_page: 20,
    })
      .then((response) => {


        let sds = response.description;
        setHtml(sds);

        response.categories.map(data => {
          arrdata.push(data);
        })

        setcaatprod([...arrdata]);

        setCategories([...response.categories]);
      })
      .catch((error) => {

      })


  }



  const pickerStyle = {
    inputIOS: {
      color: 'white',
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 12,
    },
    inputAndroid: {
      color: 'white',
      backgroundColor: 'white'
    },

  };





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
            style={{ marginLeft: 10 }}
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

          , justifyContent: 'center',
          alignSelf: 'center'
        }}
      >
        <Picker
          dropdownIconColor="black"
          mode='dropdown'
          itemStyle={{ paddingLeft: 18, backgroundColor: 'white' }}
          style={pickerStyle}

          selectedValue={occupationName}
          // onValueChange={(itemValue, itemIndex) => handleInput(itemValue)}
        >

          {newproductapi.map((data, index) => {


            return (
              <Item
                key={index}
                label={data.name}
                value={data.name}
              />
            );
          })}


        </Picker>
      </View>
{catprod === true?
      <ScrollView style={{ flex: 1, marginTop: 5 }}>
        <View style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 0 }}>

          {/*         
        {/* {products.filter(dt=>dt.id==selectedProduct).map(data=>{
          console.log(")
        })} */}


          <TouchableOpacity onPress={() => navigation.navigate('WineriesDetais', { code: categories[0].content.rendered , code1 : categories[0].excerpt.rendered})}>
           
              <ImageOverlay
                style={{ alignSelf: 'center' }}
                source={{uri: selectedProduct}}
                // source={{
                //   uri: 'https://example.com/wp-content/uploads/2017/03/T_2_back-2.jpg',
                // }}
                height={2 * 100}
                title={categories[0].title.rendered}
                titleStyle={{ fontSize: 18, textTransform: 'uppercase' }}
              /> 
           
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'space-between', marginTop: 10 }}>

          {categories.map((data, index) => {

            console.log("categories", data)
            return <Text key={index} style={{ marginLeft: 10, color: '#505050', paddingTop: 15 }}>{data.title.rendered}</Text>
          })}

          {/* <Text style={{ marginLeft: 10, color: '#505050', paddingTop: 15 }}>Bachelet-Monnot (Maranges)</Text>
          <Text style={{ marginLeft: 10, color: '#505050', paddingTop: 15 }}>Ballot-Millot (Meursault)
          </Text>
          <Text style={{ marginLeft: 10, color: '#505050', paddingTop: 15 }}>Bernard Moreau (Chassagne-Montrachet)</Text>
          <Text style={{ marginLeft: 10, color: '#505050', paddingTop: 15 }}>Berthaut-Gerbet (Fixin)</Text>
          <Text style={{ marginLeft: 10, color: '#505050', paddingTop: 15 }}>Caroline Morey (Chassagne-Montrachet)</Text>
          <Text style={{ marginLeft: 10, color: '#505050', paddingTop: 15 }}>David Duband (Chevannes)</Text>
          <Text style={{ marginLeft: 10, color: '#505050', paddingTop: 15 }}>Duroché (Gevrey-Chambertin)</Text>
          <Text style={{ marginLeft: 10, color: '#505050', paddingTop: 15 }}>Eleni et Edouard Vocoret (Chablis)</Text>
          <Text style={{ marginLeft: 10, color: '#505050', paddingTop: 15 }}>Georges Noellat/Maxime Cheurlin (Vosne-Romanee)</Text>
          <Text style={{ marginLeft: 10, color: '#505050', paddingTop: 15 }}>Guffens-Heynen (Macon)</Text>
          <Text style={{ marginLeft: 10, color: '#505050', paddingTop: 15 }}>Hubert Lamy (St Aubin)</Text>
          <Text style={{ marginLeft: 10, color: '#505050', paddingTop: 15 }}>Moreau-Naudet (Chablis)</Text>
          <Text style={{ marginLeft: 10, color: '#505050', paddingTop: 15 }}>Pierre-Yves Colin-Morey (Chassagne-Montrachet)</Text>
          <Text style={{ marginLeft: 10, color: '#505050', paddingTop: 15 }}>Maison Verget (Macon)</Text> */}
        </View>





      </ScrollView>: null }
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
