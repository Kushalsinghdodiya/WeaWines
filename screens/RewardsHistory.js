import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Input, Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Entypo';
import SafeAreaView from 'react-native-safe-area-view';
import * as Progress from 'react-native-progress';
import {Card, CardItem, Container} from 'native-base';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
export default function RewardsHistory({route, navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#800101" />
      {/* <Header
        leftComponent={{ icon: 'menu', color: 'white' }}
       
        /> */}

      <ScrollView>
        <View style={{justifyContent: 'center', padding: 15}}>
          <Card
            style={{
              marginTop: 15,
              height: heightPercentageToDP(16),
              borderRadius: 10,
            }}>
            <CardItem style={{flexDirection: 'row'}}>
              <View style={{alignSelf: 'center', paddingTop: 20}}>
                <View
                  style={{
                    alignSelf: 'center',
                    backgroundColor: '#f5f5f5',
                    padding: 10,
                    height: 77,
                    width: 83,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#27ae60',
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    500
                  </Text>
                  <Text
                    style={{
                      color: '#2e2e2e',
                      fontSize: 14,
                      textAlign: 'center',
                    }}>
                    Points
                  </Text>
                </View>
              </View>
              <View style={{alignSelf: 'center', paddingTop: 25}}>
                <Text
                  style={{
                    color: '#2e2e2e',
                    fontSize: 15,
                    paddingLeft: 10,
                    fontWeight: '700',
                  }}>
                  Rewards Points for Purchase
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, paddingLeft: 10}}>
                  Order no#: WEA00125
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 14, paddingLeft: 10}}>
                  Date: 15 Feb 2020
                </Text>
              </View>
            </CardItem>
          </Card>
        </View>
        <View style={{justifyContent: 'center', padding: 15, marginTop: -20}}>
          <Card
            style={{
              marginTop: 15,
              height: heightPercentageToDP(16),
              borderRadius: 10,
            }}>
            <CardItem style={{flexDirection: 'row'}}>
              <View style={{alignSelf: 'center', paddingTop: 20}}>
                <View
                  style={{
                    alignSelf: 'center',
                    backgroundColor: '#f5f5f5',
                    padding: 10,
                    height: 77,
                    width: 83,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#27ae60',
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    3000
                  </Text>
                  <Text
                    style={{
                      color: '#2e2e2e',
                      fontSize: 14,
                      textAlign: 'center',
                    }}>
                    Points
                  </Text>
                </View>
              </View>
              <View style={{alignSelf: 'center', paddingTop: 25}}>
                <Text
                  style={{
                    color: '#2e2e2e',
                    fontSize: 15,
                    paddingLeft: 10,
                    fontWeight: '700',
                  }}>
                  Rewards Points for Purchase
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, paddingLeft: 10}}>
                  Order no#: WEA00125
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 14, paddingLeft: 10}}>
                  Date: 15 Feb 2020
                </Text>
              </View>
            </CardItem>
          </Card>
        </View>
        <View style={{justifyContent: 'center', padding: 15, marginTop: -20}}>
          <Card
            style={{
              marginTop: 15,
              height: heightPercentageToDP(16),
              borderRadius: 10,
            }}>
            <CardItem style={{flexDirection: 'row'}}>
              <View style={{alignSelf: 'center', paddingTop: 20}}>
                <View
                  style={{
                    alignSelf: 'center',
                    backgroundColor: '#f5f5f5',
                    padding: 10,
                    height: 77,
                    width: 83,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#27ae60',
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    3000
                  </Text>
                  <Text
                    style={{
                      color: '#2e2e2e',
                      fontSize: 14,
                      textAlign: 'center',
                    }}>
                    Points
                  </Text>
                </View>
              </View>
              <View style={{alignSelf: 'center', paddingTop: 25}}>
                <Text
                  style={{
                    color: '#2e2e2e',
                    fontSize: 15,
                    paddingLeft: 10,
                    fontWeight: '700',
                  }}>
                  Rewards Points for Purchase
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, paddingLeft: 10}}>
                  Order no#: WEA00125
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 14, paddingLeft: 10}}>
                  Date: 15 Feb 2020
                </Text>
              </View>
            </CardItem>
          </Card>
        </View>
        <View style={{justifyContent: 'center', padding: 15, marginTop: -20}}>
          <Card
            style={{
              marginTop: 15,
              height: heightPercentageToDP(16),
              borderRadius: 10,
            }}>
            <CardItem style={{flexDirection: 'row'}}>
              <View style={{alignSelf: 'center', paddingTop: 20}}>
                <View
                  style={{
                    alignSelf: 'center',
                    backgroundColor: '#f5f5f5',
                    padding: 10,
                    height: 77,
                    width: 83,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#27ae60',
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    3000
                  </Text>
                  <Text
                    style={{
                      color: '#2e2e2e',
                      fontSize: 14,
                      textAlign: 'center',
                    }}>
                    Points
                  </Text>
                </View>
              </View>
              <View style={{alignSelf: 'center', paddingTop: 25}}>
                <Text
                  style={{
                    color: '#2e2e2e',
                    fontSize: 15,
                    paddingLeft: 10,
                    fontWeight: '700',
                  }}>
                  Rewards Points for Purchase
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, paddingLeft: 10}}>
                  Order no#: WEA00125
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 14, paddingLeft: 10}}>
                  Date: 15 Feb 2020
                </Text>
              </View>
            </CardItem>
          </Card>
        </View>
        <View style={{justifyContent: 'center', padding: 15, marginTop: -20}}>
          <Card
            style={{
              marginTop: 15,
              height: heightPercentageToDP(16),
              borderRadius: 10,
            }}>
            <CardItem style={{flexDirection: 'row'}}>
              <View style={{alignSelf: 'center', paddingTop: 20}}>
                <View
                  style={{
                    alignSelf: 'center',
                    backgroundColor: '#f5f5f5',
                    padding: 10,
                    height: 77,
                    width: 83,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#e74c3c',
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    -2500
                  </Text>
                  <Text
                    style={{
                      color: '#2e2e2e',
                      fontSize: 14,
                      textAlign: 'center',
                    }}>
                    Points
                  </Text>
                </View>
              </View>
              <View style={{alignSelf: 'center', paddingTop: 25}}>
                <Text
                  style={{
                    color: '#2e2e2e',
                    fontSize: 15,
                    paddingLeft: 10,
                    fontWeight: '700',
                  }}>
                  Rewards Points for Purchase
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 13, paddingLeft: 10}}>
                  Order no#: WEA00125
                </Text>
                <Text style={{color: '#2e2e2e', fontSize: 14, paddingLeft: 10}}>
                  Date: 15 Feb 2020
                </Text>
              </View>
            </CardItem>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
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
