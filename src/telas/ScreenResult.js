import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View, SafeAreaView, FlatList, Dimensions} from 'react-native';
import axios from 'axios';
import API_KEY from '../API_KEY';
import {Image} from 'expo-image';
import Header from '../Components/Header';
import {Ionicons} from 'react-native-vector-icons';
import InfoText from '../Components/InfoText';
import Loading from '../Components/Loading';
 
const{width, height}=Dimensions.get("window")
const IMAGE_WIDTH = width

export default function ScreenResult({route, navigation}) {
  const choose = route.params.choose
  const link = `http://api.giphy.com/v1/${choose}/search`
  const [searchText, setSearchText] = useState("")
  const [data, setData] = useState([])
  const [showMessage, setShowMessage] = useState(true)
  const [isLoading, setIsLoading] =  useState(false)

  const requestData = async (searchText) => {
    Keyboard.dismiss()
    setIsLoading(true)
    try{
      const result = await axios.get(link,{
        params:{
          api_key: API_KEY,
          q: searchText
        }
      })
      setShowMessage(false)
      setData(result.data.data)
      setIsLoading(false)
    }catch(err){
      console.log(err);
    }

  }
  return (
    <ImageBackground source={require("../../assets/BG.png")} style={styles.container}>
      <Header
        navigation={navigation}
        setSearchText={(value) => setSearchText(value)}
        searchText={searchText}	
        requestData={requestData}
      />
      <FlatList
        data={data}  
	      numColumns={2}
        ListHeaderComponent={
          <>
           <InfoText showMessage={showMessage}/>
           <Loading isLoading={isLoading}/>
          </>
        }
        renderItem={({item})=>{
          return(
	            <TouchableOpacity onPress={()=>navigation.navigate("TelaDetalhes", {item: item})}>	    
		              <Image
                    style={styles.image}
             	      source={{ uri: item.images.preview_gif.url }}
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
    justifyContent: 'center'
  },
  input:{
    flex:1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 10
  },
  image:{
    borderRadius: 10,
    width:IMAGE_WIDTH/2,
    height: IMAGE_WIDTH/2,
    margin:IMAGE_WIDTH*0.03
  }
});
