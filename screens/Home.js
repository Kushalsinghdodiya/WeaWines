import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
export default function Home() {
  return(
    <View style={styles.container}>
            <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      flexDirection:'column'
  },
});
