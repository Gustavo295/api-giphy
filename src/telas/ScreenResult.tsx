import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View, SafeAreaView, FlatList, Dimensions} from 'react-native';
import axios from 'axios';
import API_KEY from '../API_KEY';
import {Image} from 'expo-image';
import Header from '../Components/Header';
 
const{width, height}=Dimensions.get("window")
const IMAGE_WIDTH = width

export default function ScreenResult({route, navigation}) {
  const choose = route.params.choose;
  const link = `http://api.giphy.com/v1/${choose}/search`;
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  const requestData = async (searchText) => {
    Keyboard.dismiss()
    try{
      const result = await axios.get(link,{
        params:{
          api_key: API_KEY,
          q:searchText
        }
      })
      setData(result.data.data)
      
      
    }catch(err){
      console.log(err);
    }

  }
  return (
    <ImageBackground source={require("../../assets/BG.png")} style={styles.container}>
      <Header
	navigation={navigation}
	searchText={searchText}	
	setSearchText={setSearchText}
	requestData={requestData}
      />
      <FlatList
        data={data}  
	numColumns={2}
        renderItem={({item})=>{
          return(
	    <TouchableOpacity onPress={()=>nagivation.navigate("TelaDetalhes")}>	    
		<Image
              	 style={styles.image}
             	 source={{uri:item.images.preview_gif.url}}
                />
	    </TouchableOpacity>
          )
        }}
      />

    </ImageBackground>
  );
}
 
const styles = StyleSheet.create({
  container:{
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
    width:IMAGE_WIDTH/2,
    height: IMAGE_WIDTH/2,
  },
});
