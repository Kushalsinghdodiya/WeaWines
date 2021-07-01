import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CardSilder from 'react-native-cards-slider';
import WineriesDetail from './WineriesDetail';
import ImageOverlay from 'react-native-image-overlay';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export default function Home() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#424242" />
        <ScrollView  
        contentContainerStyle={{justifyContent:'center', width:widthPercentageToDP(100)}} >
          <View style={styles.headerImageWrapper}>
            <ImageBackground
              style={styles.theImageInside}
              source={require('../navigation/assets/images/headerimage.png')}></ImageBackground>
          </View>

          <CardSilder style={styles.headcard}>
            <View>
              <ImageBackground
                imageStyle={{
                  resizeMode: 'cover',
                  overflow: 'hidden',
                }}
                style={styles.theheadercardImg}
                source={require('../navigation/assets/images/cardbackground.jpg')}>
                <View style={styles.row}>
                  <View style={styles.col2}>
                    <View style={styles.logoheader}>
                      <Image
                        style={styles.logoimg}
                        source={require('../navigation/assets/images/logoheader.png')}
                      />
                    </View>
                  </View>

                  <View style={{
                     width: '50%',
                     height: 150,
                     display: 'flex',
                     justifyContent: 'center',
                     marginLeft:-13
                  }}>
                    <Text style={styles.heading}>Champagne Savart New</Text>
                    <Text style={styles.heading}>Release Allocation</Text>

                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{fontSize: 15, color: '#f5f6fa'}}>
                        {'  '}
                        <Icon name="user" size={18} color="black" /> Admin
                      </Text>
                      <Text style={{fontSize: 14, color: '#f5f6fa'}}>
                        {'   '}
                        <Icon name="calendar-o" size={18} color="black" style={{marginLeft:5}} />
                        19 Jan 2021
                      </Text>
                    </View>

                    <TouchableOpacity style={{flexDirection:'row'}}>
                      <Text style={{fontSize: 15, color: '#f5f6fa'}}>
                        EXPLORE{'     '}
                        <Icon
                          name="long-arrow-right"
                          style={{marginLeft:20, marginTop:-5}}
                          size={25}
                          color="black"
                        />
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            </View>

            <View>
              <ImageBackground
                imageStyle={{
                  resizeMode: 'cover',
                  overflow: 'hidden',
                }}
                style={styles.theheadercardImg}
                source={require('../navigation/assets/images/cardbackground.jpg')}>
                <View style={styles.row}>
                  <View style={styles.col2}>
                    <View style={styles.logoheader}>
                      <Image
                        style={styles.logoimg}
                        source={require('../navigation/assets/images/logoheader.png')}
                      />
                    </View>
                  </View>

                  <View style={styles.col2}>
                    <Text style={styles.heading}>Champagne Savart New</Text>
                    <Text style={styles.heading}>Release Allocation</Text>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{fontSize: 15, color: '#f5f6fa'}}>
                        {' '}
                        <Icon name="user" size={18} color="black" /> Admin
                      </Text>
                      <Text style={{fontSize: 14, color: '#f5f6fa'}}>
                        {' '}
                        <Icon name="calendar-o" size={18} color="black" />
                        19 Jan 2021
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <Text style={{fontSize: 15, color: '#f5f6fa'}}>
                        EXPLORE{' '}
                        <Icon
                          name="long-arrow-right"
                          style={{margin: 14}}
                          size={25}
                          color="black"
                        />
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            </View>

            <View>
              <ImageBackground
                imageStyle={{
                  resizeMode: 'cover',
                  overflow: 'hidden',
                }}
                style={styles.theheadercardImg}
                source={require('../navigation/assets/images/cardbackground.jpg')}>
                <View style={styles.row}>
                  <View style={styles.col2}>
                    <View style={styles.logoheader}>
                      <Image
                        style={styles.logoimg}
                        source={require('../navigation/assets/images/logoheader.png')}
                      />
                    </View>
                  </View>

                  <View style={styles.col2}>
                    <Text style={styles.heading}>Champagne Savart New</Text>
                    <Text style={styles.heading}>Release Allocation</Text>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{fontSize: 15, color: '#f5f6fa'}}>
                        {' '}
                        <Icon name="user" size={18} color="black" /> Admin
                      </Text>
                      <Text style={{fontSize: 14, color: '#f5f6fa'}}>
                        {' '}
                        <Icon name="calendar-o" size={18} color="black" />
                        19 Jan 2021
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <Text style={{fontSize: 15, color: '#f5f6fa'}}>
                        EXPLORE{' '}
                        <Icon
                          name="long-arrow-right"
                          style={{margin: 14}}
                          size={25}
                          color="black"
                        />
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </CardSilder>

          <View style={{padding: 10,marginTop:-25}}>
            <Text style={{fontSize: 20, margin: 10}}>
              WEA from Home Subscription
            </Text>
          </View>

          <View style={styles.row}>
            <View style={styles.col}>
              <TouchableOpacity>
                <View style={styles.imageWrapper}>
                  <ImageBackground
                    style={styles.theImage}
                    source={require('../navigation/assets/images/wine.png')}>
                    <View style={styles.overlay}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: '#f3f3f3',
                          fontWeight: 'bold',
                        }}>
                        STARTER TIER
                      </Text>
                    </View>
                  </ImageBackground>
                  
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.col}>
              <TouchableOpacity>
                <View style={styles.imageWrapper}>
                  <ImageBackground
                    style={styles.theImage}
                    source={require('../navigation/assets/images/wines2.png')}>
                    <View style={styles.overlay}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: '#f3f3f3',
                          fontWeight: 'bold',
                        }}>
                        ADVANCED TIER
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{padding: 10}}>
            <Text style={{fontSize: 20, margin: 10}}>Events </Text>
          </View>

          <CardSilder>
            <TouchableOpacity>
              <View style={styles.card}>
              <ImageOverlay
          style={{alignSelf: 'center'}}
          source={require('../navigation/assets/images/cardiimg.png')}
          height={2.2 * 100}
          title="Lorem ipsum dolor sit amet con..."
          contentPosition="bottom"
          titleStyle={{fontSize: 16, textTransform: 'uppercase', marginLeft:-10, }}
        />
                {/* <Image
                  style={styles.image}
                  source={require('../navigation/assets/images/cardiimg.png')}
                /> */}
                <View style={styles.detailContainer}>
                  <Text style={styles.text}>
                    {' '}
                    Le Bon Funk, 29 Club St, Singapore 069414
                  </Text>
                  <Text style={styles.text}>4 Mar 2021, Tue, 6-8pm</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.card}>
                <Image
                  style={styles.image}
                  source={require('../navigation/assets/images/cardiimg.png')}
                />
                <View style={styles.detailContainer}>
                  <Text style={styles.text}>
                    {' '}
                    Le Bon Funk, 29 Club St, Singapore 069414
                  </Text>
                  <Text style={styles.text}>4 Mar 2021, Tue, 6-8pm</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.card}>
                <Image
                  style={styles.image}
                  source={require('../navigation/assets/images/cardiimg.png')}
                />
                <View style={styles.detailContainer}>
                  <Text style={styles.text}>
                    {'   '}
                    Le Bon Funk, 29 Club St, Singapore 069414
                  </Text>
                  <Text style={styles.text}>  {'  '}4 Mar 2021, Tue, 6-8pm</Text>
                </View>
              </View>
            </TouchableOpacity>
          </CardSilder>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#dfe6e9',
    justifyContent:'center'
  },
  subcontain: {
    padding: 10,
  },
  card: {
    borderRadius: 20,
    backgroundColor: '#f5f6fa',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: '#000',
    opacity: 0.8,
  },
  detailContainer: {
    padding: 10,
  },
  text: {
    marginTop: 5,
    fontSize: 14,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  col: {
    width: '50%',
    height: 160,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  imagerow: {
    maxHeight: '100%',
    maxHeight: '100%',
    borderRadius: 20,
    width: 150,
  },
  imageWrapper: {
    height: 160,
    width: 200,
    borderRadius: 20,
    width: 150,
    overflow: 'hidden',
  },
  theImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: '#000',
    opacity: 0.6,
    
  },
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  headerImageWrapper: {
    width: '100%',
    height: 200,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    marginBottom: 80,
  },
  theImageInside: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: '#000',

    overflow: 'hidden',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },

  theheadercardImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: '#000',

    overflow: 'hidden',
    borderRadius: 15,
  },
  headcard: {
    width: '90%',
    height: 160,
    position: 'absolute',
    left: '-2%',
    top: 80,
    // bottom:0,
  },
  logoimg: {
   height:80,
   width:80, 
   marginLeft:30,
   marginTop:25
  },
  logoheader: {
    width: '100%',
    height: 140,
  },
  col2: {
    width: '50%',
    height: 150,
    display: 'flex',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 16,
    color: '#f5f6fa',
  },
});
