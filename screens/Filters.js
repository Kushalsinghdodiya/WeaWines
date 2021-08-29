import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Appbar, RadioButton } from 'react-native-paper';
import { Input, Button, CheckBox } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { List } from 'react-native-paper';
import axios from 'axios';
class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isData: true,
      blockData: {},
      isBlockData: false,
      houseData: {},
      ishouseData: false,
      announceData: {},
      isannounceData: false,
      showAlert: false,
      showAlert1: false,
      expanded:true,
      isSelected:false,
      checked:'unchecked',
      selected:[],
      subCat:[]
    }
  }
  



  componentDidMount = async () => {
    const res = await axios.get('http://fmw.vxinfosystem.com/wp-json/letscms/v1/categories')
      .then((response) => {
       
        let arr = [];
        arr = [response.data];
      
        this.setState({subCat:response.data.data.categories})

        

      });


  }


  handleFilter = (value) => {
    let filteredArray = []
      var findItem =  this.state.selected.find(x => value !== x);
     
     this.state.selected.push(value);
    this.setState({selected:this.state.selected})
    console.log("THESE ARE THE SELECTED LIST",  this.state.selected)
    
  }
  
  render() {
    const filterSelected = this.state.selected.map(
      (item) => item
    );
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.sub_container}>
              <Text style={{ fontSize: 19, margin: 10 }}>Wines</Text>
              <List.Section>
                {this.state.subCat.map((data, index) => {
                  
                  return (
                    <List.Accordion
                      title={data.name}
                      theme={{ colors: { primary: '#800101' } }}>
                      {data.children.map((row, index) => {

                        return (
                          <List.Item
                            style={{ padding: -5, margin: -5 }}
                            left={props => (
                              <CheckBox checked={filterSelected.includes(
                                row.name
                              )} onPress={(e) => this.handleFilter(row.name)} />
                            )}
                            title={row.name}
                          />
                        );
                      })}

                    </List.Accordion>
                  );
                })}

              </List.Section>
            </View>
            {/* <View style={styles.row}>
              <View style={styles.col}>
                <Text style={{ fontSize: 16, marginLeft: 20 }}>Vintage</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ flex: 1 }}>
                    <CheckBox  />
                  </View>
                  <View style={{ flex: 4 }}>
                    <Text style={{ marginLeft: 10, fontSize: 16 }}>2015</Text>
                  </View>

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ flex: 1 }}>
                    <CheckBox  />
                  </View>
                  <View style={{ flex: 4 }}>
                    <Text style={{ marginLeft: 10, fontSize: 16 }}>2016</Text>
                  </View>

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ flex: 1 }}>
                    <CheckBox  />
                  </View>
                  <View style={{ flex: 4 }}>
                    <Text style={{ marginLeft: 10, fontSize: 16 }}>2017</Text>
                  </View>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ flex: 1 }}>
                    <CheckBox value={this.state.isSelected}  />
                  </View>
                  <View style={{ flex: 4 }}>
                    <Text style={{ marginLeft: 10, fontSize: 16 }}>2018</Text>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ flex: 1 }}>
                    <CheckBox value={this.state.isSelected}   />
                  </View>
                  <View style={{ flex: 4 }}>
                    <Text style={{ marginLeft: 10, fontSize: 16 }}>2019</Text>
                  </View>
                </View>
              </View>

              <View style={styles.col}>
                <Text style={{ fontSize: 16 }}>Sort by</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 15,
                  }}>
                  <View style={{ flex: 1 }}>
                    <RadioButton
                      value="first"
                      status={this.state.checked === 'first' ? 'checked' : 'unchecked'}
                      onPress={() => this.setState({checked:'first'})}
                      theme={{ colors: { primary: '#800101' } }}
                    />
                  </View>
                  <View style={{ flex: 4 }}>
                    <Text style={{ marginLeft: 10, fontSize: 16 }}>Price</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 15,
                  }}>
                  <View style={{ flex: 1 }}>
                    <RadioButton
                      value="first"
                      status={this.state.checked === 'first' ? 'checked' : 'unchecked'}
                      onPress={() => this.setState({checked:'first'})}
                      theme={{ colors: { primary: '#800101' } }}
                    />
                  </View>
                  <View style={{ flex: 4 }}>
                    <Text style={{ marginLeft: 10, fontSize: 16 }}>Vintage</Text>
                  </View>
                </View>
              </View>
            </View> */}

            <View
              style={{
                display: 'flex',
                alignContent: 'center',
                padding: 30,
                marginTop: 50,
              }}>
              <Button buttonStyle={styles.apply_btn} title="Apply Filters" onPress={() =>  this.props.navigation.navigate('PriceList',{filterData:this.state.selected})} />
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>this.setState({selected :[]})}>
                <Text style={{ color: '#800101', textDecorationLine: 'underline' }}>
                  Clear
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
export default Filters;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  sub_container: {
    padding: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginTop: -10
  },
  col: {
    width: '50%',
    height: 250,
    display: 'flex',

    padding: 10,
  },
  apply_btn: {
    backgroundColor: '#800101',
    width: '100%',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});
