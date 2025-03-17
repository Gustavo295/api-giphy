import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import ScreenHome from "./src/telas/ScreenHome";
import ScreenResult from "./src/telas/ScreenResult";

const Stack = createStackNavigator()

export default functon App(){
	return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="ScreenHome" component={ScreenHome} option={{headerShown:false}}/>
				<Stack.Screen name="ScreenResult" component={ScreenResult} option={{headerShown:false}}/>
			</Stack.Navigator>
		</NavigationContainer>
);
}