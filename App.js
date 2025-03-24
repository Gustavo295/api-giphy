import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import ScreenHome from "./src/telas/ScreenHome";
import ScreenResult from "./src/telas/ScreenResult";
import ScreenDetails from "./src/telas/ScreenDetails";

const Stack = createStackNavigator()

export default function App(){
	return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="ScreenHome" component={ScreenHome} options={{headerShown:false}}/>
				<Stack.Screen name="ScreenResult" component={ScreenResult} options={{headerShown:false}}/>
				<Stack.Screen name="ScreenDetails" component={ScreenDetails} options={{headerShown:false}}/>
			</Stack.Navigator>
		</NavigationContainer>
);
}