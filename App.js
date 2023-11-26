import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinearGradient from "react-native-linear-gradient";
import Home from "./src/screens/Home";
import * as constants from "./src/utility/constants";


const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} options={{ headerTitle: "👋 Hi, Salim", headerShadowVisible: false, headerTitleAlign: "center",
                                                              headerTintColor: "#ffffff", headerTitleStyle: { fontFamily: "poppins_bold", fontSize: 18 },
                                                              headerBackground: () => <LinearGradient colors={[constants.primary, constants.secondary]}
                                                                                                      style={{ flex: 1 }}
                                                                                                      start={{x: 0, y: 0.5}}
                                                                                                      end={{x: 1, y: 0.5}} /> }} />

      </Stack.Navigator>

    </NavigationContainer>

  );

}
