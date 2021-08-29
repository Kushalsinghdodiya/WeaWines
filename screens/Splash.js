import React from 'react'
import { View, Text, Image } from 'react-native'
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
import wealogo from '../App/assets/wealogo1.png'
import {Container} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'
class Splash extends React.Component{
    componentDidMount = async () =>{
        let token = await AsyncStorage.getItem('user_token',);
        console.log("asd",token)
        if(token != null ){
            this.props.navigation.navigate('bottomNavigator')
          }else{
            setTimeout(() => {
                this.props.navigation.navigate('SignIn')
          }, 1000);
          }
        
    }
     
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