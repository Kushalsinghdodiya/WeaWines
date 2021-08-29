import React, { useState, useEffect } from 'react';
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
import { SafeAreaView } from 'react-native-safe-area-context';
import CardSilder from 'react-native-cards-slider';
import WineriesDetail from './WineriesDetail';
import ImageOverlay from 'react-native-image-overlay';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Fontisto';
import IconRight from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import WooCommerceAPI from 'react-native-woocommerce-api';
import axios from 'axios';

export default function Home() {
  const [newproductapi, setProductApi] = useState([])
  const [newEvent, setEvents] = useState([])
  const api = new WooCommerceAPI({
    url: "http://18.217.240.195",
    consumerKey: "ck_234a1d928528af0d9db1cdbd3593ec2fe8bd4826",
    consumerSecret: "cs_446bb534522c3354236068c05a1e3c1103acdec0",
    version: "wc/v3"
  });
  useEffect(async () => {


    const res1 = await axios.get('https://weawines.shubhchintak.co/wp-json/wp/v2/posts')
      .then((response) => {
        //  console.log("adsssss", response.data)
        let arr = [];
        arr = [response.data];
        setProductApi(response.data)

      });
    const res2 = await axios.get('https://weawines.shubhchintak.co/wp-json/jet-cct/events')
      .then((response) => {
        //  console.log("adsssss", response.data)
        let arr = [];
        arr = [response.data];
        setEvents(response.data)

      });

  }, []);
  console.log("asd", newEvent)
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="#192125" />
        <View
          style={{
            flexDirection: 'row',
            width: widthPercentageToDP(100),
            height: heightPercentageToDP(7),
            alignSelf: 'center',
            marginTop: -10,
            backgroundColor: '#192125',

          }}>
          <View
            style={{
              justifyContent: 'flex-start',
              width: widthPercentageToDP(80),
            }}>
            <Text
              style={{

                marginLeft: 25,
                color: 'white',
                textAlign: 'left',
                marginTop: 22,
                alignSelf: 'flex-start',
                fontSize: 18,
              }}>
              Hi, John Doe
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
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            width: widthPercentageToDP(100),
            height: heightPercentageToDP(100)
          }}>
          <View style={styles.headerImageWrapper}>
            <ImageBackground
              style={styles.theImageInside}
              source={require('../navigation/assets/images/headerimage.png')}></ImageBackground>
          </View>

          <CardSilder style={styles.headcard}>
            {newproductapi.map((data, index) => {


              return (
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

                      <View
                        style={{
                          width: '50%',
                          height: 150,
                          display: 'flex',
                          justifyContent: 'center',
                          marginLeft: -13,
                        }}>
                        <Text style={styles.heading}>{data.title.rendered}</Text>
                        {/* <Text style={styles.heading}>Release Allocation</Text> */}

                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10
                          }}>
                          <Text style={{ fontSize: 12, color: '#f5f6fa' }}>
                            {'  '}
                            <Icon name="user" size={14} color="white" /> Admin
                          </Text>
                          <Text style={{ fontSize: 12, color: '#f5f6fa' }}>
                            {'   '}
                            <Icon
                              name="calendar-o"
                              size={14}
                              color="white"
                              style={{ marginLeft: 5 }}
                            />
                            {" " + " 19 Jan 2021"}
                          </Text>
                        </View>

                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
                          <Text style={{ fontSize: 11, color: '#f5f6fa' }}>
                            EXPLORE{'  '}
                            <IconRight
                              name="arrowright"
                              style={{ paddingTop: 12 }}
                              size={14}
                              color="white"
                            />
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              );
            })}

          </CardSilder>

          <View style={{ padding: 10, marginTop: -25 }}>
            <Text style={{ fontSize: 16, margin: 10 }}>
              WEA from Home Subscription
            </Text>
          </View>

          <View style={styles.row}>
            <View style={styles.col}>
              <TouchableOpacity>
                <ImageOverlay
                  style={{ alignSelf: 'center' }}
                  containerStyle={{
                    width: 165,
                    borderRadius: 10,
                  }}
                  source={require('../navigation/assets/images/wine.png')}
                  height={1.7 * 100}
                  overlayAlpha={0.6}
                  title="  STARTER TIER"
                  contentPosition="center"
                  titleStyle={{
                    fontSize: 18,
                    textTransform: 'uppercase',
                    margin: 'auto',
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.col}>
              <TouchableOpacity>
                <ImageOverlay
                  style={{ alignSelf: 'center' }}
                  containerStyle={{
                    width: 165,
                    borderRadius: 10,
                  }}
                  source={require('../navigation/assets/images/wines2.png')}
                  height={1.7 * 100}
                  overlayAlpha={0.6}
                  title=" ADVANCED TIER"
                  contentPosition="center"
                  titleStyle={{
                    fontSize: 18,
                    textTransform: 'uppercase',
                    margin: 'auto',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20
            }}>
            <View style={{ width: '50%' }}>
              <Text style={{ fontSize: 16, margin: 10 }}>Events </Text>
            </View>

            <View style={{ width: '50%' }}>
              <TouchableOpacity>
                <Text style={{ textAlign: 'right', marginRight: 30 }}>
                  <IconRight name="arrowright" size={20} color="black" />
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <CardSilder>
            {newEvent.map((data, index) => {


              return (
                <TouchableOpacity>
                  <View style={styles.card}>
                    <ImageOverlay
                      style={{ alignSelf: 'center' }}
                      containerStyle={{
                        width: '100%',
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                        marginLeft: '-2%'
                      }}
                      source={require('../navigation/assets/images/cardiimg.png')}
                      height={1.8 * 100}
                      overlayAlpha={0.6}
                      title={data.title}
                      contentPosition="bottom"
                      titleStyle={{
                        fontSize: 16,
                        textTransform: 'uppercase',
                        marginLeft: 0,
                      }}
                    />

                    <View style={styles.detailContainer}>
                      <Text style={styles.text}>
                        {' '}
                        {data.location}
                      </Text>
                      <Text style={styles.text}> {data.date + " " + data.time}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}

           
          </CardSilder>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#dfe6e9',

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
    padding: 5,
  },
  col: {
    width: '50%',
    height: 160,
    display: 'flex',

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
    width: '70%',
    height: 160,
    position: 'absolute',
    left: '-4%',
    top: 80,
    // bottom:0,
  },
  logoimg: {
    height: 80,
    width: 80,
    marginLeft: 30,
    marginTop: 25,
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
