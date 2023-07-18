
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, Modal ,SafeAreaView,TextInput,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import {} from 'expo-location'
import api from '../api'
import Header from './header'
import { weatherImages } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { Container,Informations,Temp,Date,ContainerIcon,Clima,NextDays,ForecastDay,Umidity,ForecastContainer } from './styled';
import Next from './nextDays';
import Setting  from 'react-native-vector-icons/Ionicons'

export default function Home() {
const [ darkMode, setDarkMode] = useState(true)
const [currentTemperature, setCurrentTemperature] = useState('25')
const [ location, setLocation] = useState('Penedo AL')
const [weather,setWeather] =useState(null)
const [search,setSearch] = useState('Maceió')




const [ visibleModal, setVisibleModal] = useState(false)




useEffect(()=>{

  async function Load () {
      api.get(`/current.json?key=7ea4f61180f1457fbf301541232706&q=${location}&lang=pt`)
.then((response)=>{

  if(response.status === 200){
    console.log(response.data)
    setWeather(response.data)
  }
 
})
  }



Load()
},[])

function ModalAreaView({handleClose}){

 

 
  
      return(
  <SafeAreaView style={styles.container}>
  
  <View style={styles.content}>
  <TouchableOpacity onPress={handleClose}>
   <Text>x</Text>
  </TouchableOpacity>
  <View style={styles.input}>
   <TextInput onChangeText={setSearch}style={styles.Enterinput}
   placeholder="Buscar cidade"
   placeholderTextColor='black'
   
   />
   
  
  </View>
   <View  style={styles.button}>
  
  <Button  title="Buscar cidade"
  color='white'/>
   </View>
  
  </View>
  
  </SafeAreaView> 
      )
   }
  

  return ( 




    <Container >
     
      <Header location={location}/>
      <TouchableOpacity  onPress={()=> setVisibleModal(true)}>
        <View  style={styles.setting} >
              <Setting name='settings-sharp' size={30} color='white'/> 
      </View>
      </TouchableOpacity>
      
     <Modal    
      visible={visibleModal}
transparent={true}
onRequestClose={()=> setVisibleModal(false)}


>
<ModalAreaView handleClose={()=> setVisibleModal(false)} />
     </Modal>
      

    
      
    {

      weather ? (
       
          <View >

       <Informations >
         <Temp >{weather.current.temp_c}</Temp>
     <Icon style={{marginTop:-40,marginLeft:5}}  name="circle-o" size={20} color='white'/>
     <Date >{weather.location.localtime}</Date>
     
        </Informations>

<ContainerIcon>

       <Image style={{width:160,height:160}} source={weatherImages[weather.current.condition.text]}/>
  <Clima>{weather.current.condition.text}</Clima>
  {
    console.log(weather.current.condition.text)
  }
 
  </ContainerIcon>
    
     <ForecastContainer>
<ForecastDay>
  <Icon2 name='water' size={30} color='white'/>
  <Umidity>{weather.current.humidity + '%'}</Umidity>
</ForecastDay>
<ForecastDay>
<Feather name='wind' size={30} color='white'/>
  <Umidity>{weather.current.wind_kph + 'Km'}</Umidity>
</ForecastDay>

      </ForecastContainer>        
     
       
    




  </View>
        
        
      ):null
    }
    <NextDays>
    <Next location ={location}/>
    </NextDays>
    
    </Container>
   
  )
}
const styles = StyleSheet.create({

  container:{

    flex:1,
    alignItems:'center',
    
},
content:{
    marginTop: 20,
    backgroundColor:'white',
    width: '90%',
    height: '90%',
    borderRadius:20,
    alignItems:'center',
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation:5,

},
input:{
    color:'black',
 width: '90%',
 backgroundColor:'#e9e9e9',
 borderRadius:5,
 height:40,
justifyContent:'center',
marginTop: 20




},
Enterinput:{
    fontSize:18,

 
},
button:{
    backgroundColor:'#00a5df',
    borderRadius:10,
 marginTop:10,
 width:200
}

})
