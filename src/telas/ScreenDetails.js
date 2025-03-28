import { Image } from 'expo-image';
import { ImageBackground, Linking, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "react-native-vector-icons";

export default function ScreenDetails({ route, navigation }) {
	const data = route.params.item

	return (
		<ImageBackground
			source={require("../../assets/BG.png")}
			style={styles.container}
		>
			<SafeAreaView styles={{ flexDirection: 'row' }}>
				<Ionicons name="arrow-back" color="white" size={40} onPress={() => navigation.goBack()} />
				<Text style={{ fontSize: 30, color: "white" }}>Detalhes</Text>
			</SafeAreaView>

			<View style={styles.imageContainer}>
				<Image
					source={{ uri: data.images.original.url }}
					style={{ flex: 1 }}
				/>
			</View>

			<View>
				<Text styles={{ fontSize: 25, color: "white" }}>{data.title}</Text>
				<Ionicons name="globe" size={40} color="white" onPress={() => Linking.openURL(data.images.original.url)} />
			</View>

		</ImageBackground>
	)

}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	imageContainer: {
		width: "100%",
		height: "50%"
	}
})