import React from 'react'
import { View, Text, Image } from 'react-native'
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
import wealogo from '../App/assets/wealogo1.png'
import {Container} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'
class Splash extends React.Component{
    componentDidMount(){
        
        setTimeout(() => {
            this.getData();
        }, 2000);
    }
     getData = async () => {
         this.props.navigation.navigate('SignIn')
      };
    render(){
        return(
            <Container style={{justifyContent:'center',  flex:1}}>
               <View style={{justifyContent:'center', alignSelf:'center'}}>
                <Image source={wealogo} style={{alignSelf:'center',}}/>
              </View></Container>
        )
    }
}
export default Splash;