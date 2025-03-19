import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
 
export default function ScreenHome({navigation}) {
  return (
    <ImageBackground source={require("../../assets/HomePage.png")} style={styles.container}>
      <Text style={styles.textMain}>Pesquisar por...</Text>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("ScreenResult",{choose:'gifs'})}>
          <Text style={styles.textBtn}>GIFS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("ScreenResult",{choose:'stickers'})}>
          <Text style={styles.textBtn}>STICKERS</Text>
        </TouchableOpacity>
	    </View>
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
  textMain:{
    color:'white',
    fontSize: 25,
    fontWeight: 'bold'
  },  
  btn:{
    width: 100,
    height: 50,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: "white",
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },  
  textBtn:{
    color:"black",
    fontSize: 15,
    fontWeight:'bold'
  }
});
