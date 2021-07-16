import * as React from 'react';
import { View, useWindowDimensions,ScrollView,Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SafeAreaView from 'react-native-safe-area-view';
import * as Progress from 'react-native-progress';
import {Card, CardItem, Container} from 'native-base';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
const FirstRoute = () => (
  
     <ScrollView contentContainerStyle={{height:heightPercentageToDP(100)}}>
        <View style={{justifyContent: 'center', padding: 15}}>
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
        <View style={{justifyContent: 'center', padding: 15}}>
          <Card
            style={{
              marginTop: 15,
              height: heightPercentageToDP(16),
              borderRadius: 10,
             
            }}>
            <CardItem style={{flexDirection: 'row',justifyContent : 'space-between'}}>
             
              <View style={{paddingTop: 10}}>
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
              <View style={{width:widthPercentageToDP(25),backgroundColor:'#289f5a',borderRadius:5,}}>
                <Text
                  style={{
                      padding:5,
                    color: 'white',
                    fontSize: 13,
                    
                textAlign:'center',
                    fontWeight: '700',
                    textTransform:'uppercase'
                  }}>
                 Delivered
                </Text>
                </View>
                <Text style={{alignSelf:'flex-end',color: '#2e2e2e', fontSize: 11,marginTop:5 }}>
                on 12 Mar 2021
                </Text>
                <Text style={{alignSelf:'flex-end',color: '#2e2e2e', fontSize: 11, }}>
                Order no#: WEA0135
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
        <View style={{justifyContent: 'center', padding: 15}}>
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
              <View style={{width:widthPercentageToDP(25),backgroundColor:'#e74c3c',borderRadius:5,}}>
                <Text
                  style={{
                      padding:5,
                    color: 'white',
                    fontSize: 13,
                    
                textAlign:'center',
                    fontWeight: '700',
                    textTransform:'uppercase'
                  }}>
                 Cancelled
                </Text>
                </View>
                <Text style={{alignSelf:'flex-end',color: '#2e2e2e', fontSize: 11, paddingTop:5}}>
                on 15 Feb 2021
                </Text>
                <Text style={{alignSelf:'flex-end',color: '#2e2e2e', fontSize: 11, }}>
                Order no#: WEA0912
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
        <View style={{justifyContent: 'center', padding: 15}}>
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
              <View style={{width:widthPercentageToDP(25),backgroundColor:'#289f5a',borderRadius:5,}}>
                <Text
                  style={{
                      padding:5,
                    color: 'white',
                    fontSize: 13,
                    
                textAlign:'center',
                    fontWeight: '700',
                    textTransform:'uppercase'
                  }}>
                 Delivered
                </Text>
                </View>
                <Text style={{alignSelf:'flex-end',color: '#2e2e2e', fontSize: 11, paddingTop:5}}>
                on 19 Jan 2021
                </Text>
                <Text style={{alignSelf:'flex-end',color: '#2e2e2e', fontSize: 11, }}>
                Order no#: WEA0865
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