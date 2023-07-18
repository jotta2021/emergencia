import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View,Image, TouchableOpacity,Modal } from 'react-native';
import { useState } from 'react';
import Location from 'react-native-vector-icons/Entypo'
import Setting  from 'react-native-vector-icons/Ionicons'
import ModalAreaView from './src/theme/modal';
import {} from 'expo-location'



export default function Header(props) {

  const [ visibleModal, setVisibleModal] = useState(false)




  return (
    




      <View style={styles.header}>
        <Text style={styles.city}>{props.location}</Text>
      <Location name='location-pin' size={28} color='white'/> 

      
     </View>
   

     ) 

    }



const styles = StyleSheet.create({
 
  city:{
    fontSize: 30,
  color:'white',

  alignItems:'center'

  },
  header:{
    margin:2,
    flexDirection:'row',
    marginTop:50,
    marginLeft: 25,
    alignItems:'center',
 
  },
  setting:{
    marginLeft: 160

  }
})
