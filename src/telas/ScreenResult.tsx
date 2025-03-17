import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
 
export default function ScreenResult({route}) {
  const choose = route.params.choose
  const link = 'api.giphy.com/v1/${choose}/search'
  return (
    <View style={styles.container}>
      <Text>TELA RESULTADO</Text>
      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
