import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  StatusBar,useWindowDimensions
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Input, Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Entypo';
import SafeAreaView from 'react-native-safe-area-view';
import * as Progress from 'react-native-progress';
import {Card, CardItem, Container} from 'native-base';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
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
      <CardItem style={{flexDirection: 'row',}}>
       
        <View style={{alignSelf: 'center', paddingTop: 10}}>
          <Text
            style={{
              color: '#2e2e2e',
              fontSize: 17,
          marginTop:-5,
              fontWeight: '700',
            }}>
           Reward Title
          </Text>
          <Text style={{color: '#2e2e2e', fontSize: 13, paddingTop:7}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          </Text>
         
         
        </View>
       
      </CardItem>
      <CardItem style={{justifyContent : 'center',backgroundColor:'#f8f8f8',borderBottomWidth:1,borderColor:'white',flexDirection:'row'}}>
      < Text  onPress={() => navigation.navigate('RewardsHistory')} style={{color: '#9b2120', fontSize: 13, }}>
       REDEEM NOW
          </Text>  
          
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
      <CardItem style={{flexDirection: 'row',}}>
       
        <View style={{alignSelf: 'center', paddingTop: 10}}>
          <Text
            style={{
              color: '#2e2e2e',
              fontSize: 17,
          marginTop:-5,
              fontWeight: '700',
            }}>
           Reward Title
          </Text>
          <Text style={{color: '#2e2e2e', fontSize: 13, paddingTop:7}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          </Text>
         
         
        </View>
       
      </CardItem>
      <CardItem style={{justifyContent : 'center',backgroundColor:'#f8f8f8',borderBottomWidth:1,borderColor:'white',flexDirection:'row'}}>
       < Text style={{color: '#a29c9c', fontSize: 13, }}>
       REDEEMED
          </Text>  
          
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
      <CardItem style={{flexDirection: 'row',}}>
       
        <View style={{alignSelf: 'center', paddingTop: 10}}>
          <Text
            style={{
              color: '#2e2e2e',
              fontSize: 17,
          marginTop:-5,
              fontWeight: '700',
            }}>
           Reward Title
          </Text>
          <Text style={{color: '#2e2e2e', fontSize: 13, paddingTop:7}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          </Text>
         
         
        </View>
       
      </CardItem>
      <CardItem style={{marginBottom:5,justifyContent : 'center',backgroundColor:'#f8f8f8',borderBottomWidth:1,borderColor:'white',flexDirection:'row'}}>
       < Text style={{color: '#a29c9c', fontSize: 13, }}>
      EXPIRED
          </Text>  
          
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
export default function MyRewards({route, navigation}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'All' },
    { key: 'second', title: 'Available' },
    { key: 'firsts', title: 'Reedemed' },
    { key: 'seconds', title: 'Expired' },
   
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  sub_container: {
    padding: 10,
    marginTop: 30,
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  col: {
    width: '50%',
  },
  SignupBtn: {
    backgroundColor: '#800101',
    borderRadius: 23,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  SignupText: {
    color: '#fff',
    fontSize: 20,
  },
  option3: {
    alignItems: 'center',
    margin: 5,
    marginTop: 60,
  },
  login: {
    color: '#800101',
    textDecorationLine: 'underline',
  },
  header: {
    display: 'flex',
    paddingLeft: 20,
    marginTop: 50,
  },
  forgetdiv: {
    alignItems: 'flex-end',
    paddingBottom: 30,
    paddingRight: 10,
  },
});
