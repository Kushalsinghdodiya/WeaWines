import React from 'react';
 
import {StyleSheet,ScrollView, Image, Text, TouchableOpacity, View,useWindowDimensions} from 'react-native';
import {Appbar} from 'react-native-paper';
import {Input, Button} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import RenderHtml from 'react-native-render-html';
import WooCommerceAPI from 'react-native-woocommerce-api';
export default function WineriesDetail({route, navigation}) {
  // const WinerHeader = () => (
  //     <Appbar.Header  style={styles.header} >
  //       <Appbar.BackAction  />
  //     </Appbar.Header>
  // );
  const api = new WooCommerceAPI({
    url: "http://18.217.240.195",
    consumerKey: "ck_234a1d928528af0d9db1cdbd3593ec2fe8bd4826",
    consumerSecret: "cs_446bb534522c3354236068c05a1e3c1103acdec0",
    version: "wc/v3"
  });

  const { width } = useWindowDimensions();

  const { code } = route.params;
  const source = {
    html: `${code}`
  };


  
console.log("this is prop", code);
  
  return (
   
    <View style={styles.container}>
    <SafeAreaView>
    <ScrollView>
      <View style={styles.image}>
        <Image
          style={{maxHeight:'65%',maxWidth:'100%'}}
          source={require('../navigation/assets/images/details.jpg')}
        />
      </View>

      <View style={{padding: 10, marginTop:-80}}>
        <Text style={{fontSize: 16, color: '#000', marginBottom: 10}}>
          What WEA say ?
        </Text>
        <Text style={{fontSize: 13, color: '#505050',letterSpacing:.5}}>
        <RenderHtml
          contentWidth={width}
          source={source}
          enableExperimentalMarginCollapsing={true}
        />
        {/* Antoine – the 5th generation of the family – officially took over the Domaine from his father Francois in 2006. They have just over 6 ha of vines predominantly in Meursault and they only make white wines. Very little new oak is used here – only 15% on average. The Bourgogne Blanc is usually a sign of how great a Domaine is and the example here, made from 4 different parcels around Meursault, is absolutely stunning and a ringer for a basic villages Meursault. He makes two different single vineyard villages cuvee, En La Barre on offer today and Tillets which we will have for the ’13s. The Premier Crus, are without doubt, a class of their own. Blagny from a higher altitude and Poruzots situated right beside Genevrieres. */}
        {' '}
        </Text>
      </View>

      <View style={{padding: 10, marginTop:2}}>
        <Text style={{fontSize: 16, color: '#000', marginBottom: 10}}>
        What do the Critics say?
        </Text>
        <Text style={{fontSize: 16, color: '#000', marginBottom: 10}}>
        Allen Meadows, Burghound #55
        </Text>
        <Text style={{fontSize: 13, color: '#505050',letterSpacing:.5}}>
        Antoine Jobard described 2012 as a vintage that “basically threw everything possible at us. We not only had issues with mildew and oidium but the hail hit the vines on both the north and the south sides. Blagny and our parcel of Bourgogne were the worst hit but Poruzots, Charmes and Genevrières took pretty serious damage as well. Our new parcel of Puligny Champ Gains was basically 100% wiped out and there won’t be one in 2012 while Le Trézin was pummeled too. It was with considerable relief that we finally began picking on the 18th of September. There was definitely some sorting work necessary because while most of the damaged berries had dried up and fallen off by the harvest there were some that were tenacious and had to be removed either by the vibrating sorting table or by hand. Otherwise the fermentations proceeded normally and I am happy with the quality particularly given all of the difficulties we faced. As to the wines they are fleshy but balanced and should be approachable relatively young but that doesn’t mean that they won’t age well too.” Jobard told me that in addition to the .13 ha of the Puligny 1er “Champ Gains” that he bought in time for the 2011 vintage he added 5 ouvrées of the St. Aubin 1er “Sur le Sentier du Clou” for the 2012 vintage. Note that the Meursault “Perrières” was a purchase of must. Jobard also noted that his 2011s were bottled between May and July 2013 and revisited below
        </Text>
      </View>

      
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },

  image: {
    width: '100%',
    height:'24%',
  },
});
