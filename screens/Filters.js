import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Appbar, RadioButton} from 'react-native-paper';
import {Input, Button, CheckBox} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {List} from 'react-native-paper';

export default function Filters() {
  const [expanded, setExpanded] = React.useState(true);
  const [isSelected, setSelection] = React.useState(false);
  const [checked, setChecked] = React.useState('unchecked');

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.sub_container}>
            <Text style={{fontSize: 19, margin: 10}}>Wines</Text>
            <List.Section>
              <List.Accordion
                title="Burgundy"
                theme={{colors: {primary: '#800101'}}}>
                <List.Item
                   style={{padding: -5, margin: -5}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Antoine Jobard"
                />

                <List.Item
                  style={{padding: -5, margin: -5}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Bachelet-Monnot"
                />
                <List.Item
                   style={{padding: -5, margin: -5}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Ballot-Millot"
                />
                <List.Item
                  style={{padding: -5, margin: -5}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Bernard Moreau"
                />
                 <List.Item
                  style={{padding: -5, margin: -5}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Berthaut-Gerbet"
                />
                 <List.Item
                  style={{padding: -5, margin: -5}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Caroline Morey"
                />
                 <List.Item
                  style={{padding: -5, margin: -5}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="David Duband"
                />
                 <List.Item
                  style={{padding: -5, margin: -5}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Duroché"
                />
              </List.Accordion>

              <List.Accordion
                title="Champagne"
                theme={{colors: {primary: '#800101'}}}>
                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Antoine Jobard"
                />

                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Bachelet-Monnot"
                />
                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Ballot-Millot"
                />
                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Bernard Moreau"
                />
              </List.Accordion>

              <List.Accordion
                title="Beaujolais"
                theme={{colors: {primary: '#800101'}}}>
                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Antoine Jobard"
                />

                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Bachelet-Monnot"
                />
                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Ballot-Millot"
                />
                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Bernard Moreau"
                />
              </List.Accordion>

              <List.Accordion
                title="Loirze"
                theme={{colors: {primary: '#800101'}}}>
                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Antoine Jobard"
                />

                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Bachelet-Monnot"
                />
                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Ballot-Millot"
                />
                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Bernard Moreau"
                />
              </List.Accordion>
              <List.Accordion
                title="Rhane"
                theme={{colors: {primary: '#800101'}}}>
                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Antoine Jobard"
                />

                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Bachelet-Monnot"
                />
                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Ballot-Millot"
                />
                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Bernard Moreau"
                />
              </List.Accordion>
              <List.Accordion
                title="The New Spain"
                theme={{colors: {primary: '#800101'}}}>
                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Antoine Jobard"
                />

                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Bachelet-Monnot"
                />
                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Ballot-Millot"
                />
                <List.Item
                  style={{padding: 0, margin: 0}}
                  left={props => (
                    <CheckBox value={isSelected} onValueChange={setSelection} />
                  )}
                  title="Bernard Moreau"
                />
              </List.Accordion>
            </List.Section>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={{fontSize: 16, marginLeft:20}}>Vintage</Text>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1}}>
                  <CheckBox value={isSelected} onValueChange={setSelection} />
                </View>
                <View style={{flex: 4}}>
                  <Text style={{marginLeft: 10, fontSize: 16}}>2015</Text>
                </View>
                
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1}}>
                  <CheckBox value={isSelected} onValueChange={setSelection} />
                </View>
                <View style={{flex: 4}}>
                  <Text style={{marginLeft: 10, fontSize: 16}}>2016</Text>
                </View>
                
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1}}>
                  <CheckBox value={isSelected} onValueChange={setSelection} />
                </View>
                <View style={{flex: 4}}>
                  <Text style={{marginLeft: 10, fontSize: 16}}>2017</Text>
                </View>
                
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1}}>
                  <CheckBox value={isSelected} onValueChange={setSelection} />
                </View>
                <View style={{flex: 4}}>
                  <Text style={{marginLeft: 10, fontSize: 16}}>2018</Text>
                </View>
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1}}>
                  <CheckBox value={isSelected} onValueChange={setSelection} />
                </View>
                <View style={{flex: 4}}>
                  <Text style={{marginLeft: 10, fontSize: 16}}>2019</Text>
                </View>
              </View>
            </View>

            <View style={styles.col}>
              <Text style={{fontSize: 16}}>Sort by</Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <View style={{flex: 1}}>
                  <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                    theme={{colors: {primary: '#800101'}}}
                  />
                </View>
                <View style={{flex: 4}}>
                  <Text style={{marginLeft: 10, fontSize: 16}}>Price</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <View style={{flex: 1}}>
                  <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                    theme={{colors: {primary: '#800101'}}}
                  />
                </View>
                <View style={{flex: 4}}>
                  <Text style={{marginLeft: 10, fontSize: 16}}>Vintage</Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              alignContent: 'center',
              padding: 30,
              marginTop: 50,
            }}>
            <Button buttonStyle={styles.apply_btn} title="Apply Filters" />
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Text style={{color: '#800101', textDecorationLine: 'underline'}}>
                Clear
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
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
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginTop:-10
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
