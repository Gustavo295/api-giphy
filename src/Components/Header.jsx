import {View, TextInput, StyleSheet} from "react-native"
import {Ionicons} from "react-native-vector-icons";

export default function Header({searchText, setSearchText, navigation, requestData}){
    return(
    	<View style={{flexDirection:'row', justifyContent:'space-between'}}>
        	<Ionicons name="arrow-back" size={40} color="white" onPress={()=>navigation.goBack()}/>
	        <TextInput
        	  style={styles.input}
        	  placeholder='Digite sua pesquisa'
          	autoCapitalize='none'
            autoCorrect={false}
	          value={searchText}
	          onChangeText={(value)=>setSearchText(value)}
            onSubmitEditing={()=>requestData(searchText)}
	        />
        	<Ionicons name="search" size={40} color="white" onPress={()=>requestData(searchText)}/>
      	</View>
        
    )
}

const styles = StyleSheet.create({
  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  input:{
    flex:1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 10,
  }
});