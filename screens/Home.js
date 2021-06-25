import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CardSilder from 'react-native-cards-slider';
import {Icon} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import WineriesDetail from './WineriesDetail';

export default function Home() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          {/* <View style={styles.headerImageWrapper}>
            <ImageBackground
              style={styles.theImageInside}
              source={require('../navigation/assets/images/headerimage.png')}>
             
            </ImageBackground>
          </View> */}

          <View style={styles.headerImageWrapper}>
         
            <Image
              style={styles.theImageInside}
              source={require('../navigation/assets/images/headerimage.png')}

            />
          </View>

          <View style={{padding: 10}}>
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
            <Text style={{fontSize: 20, margin: 10}}>WEA from Home </Text>
          </View>

          <CardSilder>
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
  },
  subcontain: {
    padding: 10,
  },
  card: {
    borderRadius: 15,
    backgroundColor: '#f5f6fa',
    marginBottom:20
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
    opacity: 0.8,
  },
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  headerImageWrapper:{
    width:'100%',
    height:150,
    borderBottomRightRadius:50,
    borderBottomLeftRadius:50,

  },
  theImageInside:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: '#000',
   
    borderBottomRightRadius:50,
    borderBottomLeftRadius:50,
 
  }
});
