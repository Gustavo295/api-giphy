import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View, SafeAreaView, FlatList, Image} from 'react-native';
import {Ionicons} from 'react-native-vector-icons';
import axios from 'axios';
import API_KEY from '../API_KEY';
 
export default function ScreenResult({route, navigation}) {
  const choose = route.params.choose;
  const link = `http://api.giphy.com/v1/${choose}/search`;
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  const requestData = async (searchText) => {
    try{
      const result = await axios.get(link,{
        params:{
          api_key: API_KEY,
          q:searchText,
          lang:"pt"
        }
      })
      setData(result.data.data)
      
      
    }catch(err){
      console.log(err);
    }

  }
  return (
    <ImageBackground source={require("../../assets/BG.png")} style={styles.container}>
      <SafeAreaView style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Ionicons name="arrow-back" size={40} color="white" onPress={()=>navigation.goBack()}/>
        <TextInput
          style={styles.input}
          placeholder='Digite sua pesquisa'
          autoCapitalize='none'
          autoCorrect={false}
          value={searchText}
          onChangeText={(value)=>setSearchText(value)}
        />
        <Ionicons name="search" size={40} color="white" onPress={()=>requestData(searchText)}/>
      </SafeAreaView>
      
      <FlatList
        data={data}  
        renderItem={({item})=>{
          return(
            <Image
              style={styles.image}
              source={{uri:item.image.preview_gif.url}}
            />
          )
        }}
      />

    </ImageBackground>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    flex:1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 10,
  },
  image:{
    width:250,
    height: 250,
  }
});
