import * as React from 'react';
// import { useEffect } from 'react';
import { View, useWindowDimensions,ScrollView,Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SafeAreaView from 'react-native-safe-area-view';
import * as Progress from 'react-native-progress';
import {Card, CardItem, Container} from 'native-base';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import WooCommerceAPI from 'react-native-woocommerce-api';

const api = new WooCommerceAPI({
  url: "http://18.217.240.195",
  consumerKey: "ck_234a1d928528af0d9db1cdbd3593ec2fe8bd4826",
  consumerSecret: "cs_446bb534522c3354236068c05a1e3c1103acdec0",
  version: "wc/v3"
});



var order=[];
async function  fetchorders() {
  await api.get("products", {
    per_page: 20, 
  })
    .then((response) => {
     order=[...response]
      console.log("this is respoonse", response);
     console.log("thi sis the array variale ",order);
    })
    .catch((error) => {
    console.log(error); 
    })

}


fetchorders();

const FirstRoute = () => (

<ScrollView contentContainerStyle={{height:heightPercentageToDP(100)}}>
       
       
{order.map((data,index)=>{
  return(
    <View style={{justifyContent: 'center', padding: 15}} key={index}>
          <Card
            style={{
              marginTop: 15,
              height: heightPercentageToDP(16),
              borderRadius: 10,
             
            }}>
            <CardItem style={{flexDirection: 'row',justifyContent : 'space-between'}}>
             
              <View style={{alignSelf: 'center', paddingTop: 10}}>
                <Text
                  style={{
                    color: '#2e2e2e',
                    fontSize: 17,
                marginTop:-5,
                    fontWeight: '700',
                  }}>
                  Antoine Jobard
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, paddingTop:7}}>
                Meursault 1er Blagny
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, }}>
                Vintage: 2018
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, paddingTop:7}}>
                2nos x $S 148
                </Text>
              </View>
              <View style={{ paddingTop: 10,}}>
              <View style={{width:widthPercentageToDP(25),alignSelf:'flex-end',backgroundColor:'#f1c40f',borderRadius:5,}}>
                <Text
                  style={{
                      padding:5,
                    color: 'white',
                    fontSize: 13,
                    
                textAlign:'center',
                    fontWeight: '700',
                    textTransform:'uppercase'
                  }}>
                  Pending
                </Text>
                </View>
                <Text style={{ alignSelf:'flex-end',color: '#2e2e2e', fontSize: 11, paddingTop:5}}>
                Delivered by: 22 May 2021
                </Text>
                <Text style={{alignSelf:'flex-end',color: '#2e2e2e', fontSize: 11, }}>
                Order no#: WEA0012
                </Text>
                
              </View>
            </CardItem>
            <CardItem style={{justifyContent : 'space-between',backgroundColor:'#f8f8f8',borderBottomWidth:1,borderColor:'white',flexDirection:'row'}}>
             < Text style={{color: '#9b2120', fontSize: 13, }}>
             Total: $S 148
                </Text>  
                <View style={{}}>
                < Text style={{color: '#9b2120', fontSize: 13,alignSelf:'flex-end'}}>
             TRACK ORDER
                </Text>  
                </View>
            </CardItem>
          </Card>



        </View>
  );
})}

        


       
      
      </ScrollView>
    
);
const FirstRoutes = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }} />
);
const SecondRoute = () => (
<View style={{ flex: 1, backgroundColor: 'white' }} />
);
const SecondRoutes = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }} />
);
const SecondRoutess = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }} />
);
  
export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'All' },
    
    { key: 'firsts', title: 'Delivered' },
    { key: 'second', title: 'Pending' },
    { key: 'seconds', title: 'Cancelled' },
    
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    firsts: FirstRoutes,
    seconds: SecondRoutes,
    secondss: SecondRoutess,
  });
 const  renderTabBar=(props) =>{
    return (<TabBar
    tabStyle={{width:100}}
      scrollEnabled={true}
    style={{backgroundColor: '#800101', elevation: 0, borderColor: '#800101', borderBottomWidth: 1, height:50,}}
    labelStyle={{color: '#800101', fontSize: 12, }}
    {...props}
    indicatorStyle={{backgroundColor: 'white', height: 2}}
    />
    );
    }
  return (
    <View style={{flex:1}}>
    <TabView
    

      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      
    />
    </View>
  );
}