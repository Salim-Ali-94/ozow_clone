import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinearGradient from "react-native-linear-gradient";
import Home from "./src/screens/Home";


const Stack = createNativeStackNavigator();

// const Router = StackNavigator({

//   Login: {
//       screen: Login,
//       navigationOptions: ({navigation}) => ({
//          headerTitle: <Text>SomeTitle</Text>
//          headerLeft: <SearchAndAgent />,
//          headerRight: <TouchableOpacity
//           onPress={() => { null }
//       </TouchableOpacity>,
//       headerStyle: { backgroundColor: '#005D97' },
//       }),
//   },
//   });


// navigationOptions: {
//   headerBackground: (
//     <LinearGradient
//       colors={['#a13388', '#10356c']}
//       style={{ flex: 1 }}
//       start={{x: 0, y: 0}}
//       end={{x: 1, y: 0}}
//     />
//   ),
//   headerTitleStyle: { color: '#fff' },
// }


// navigationOptions: {
//   header: props => <GradientHeader {...props} />,
//   headerStyle: {
//     backgroundColor: 'transparent',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// },

export default function App() {

  const GradientHeader = props => (
    <View style={{ backgroundColor: '#eee' }}>
        <LinearGradient
          colors={['red', 'blue']}
          style={[StyleSheet.absoluteFill, { height: Header.HEIGHT }]}
        >
          <Header {...props} />
        </LinearGradient>
      </View>
    )

  return (

    <NavigationContainer>

      <Stack.Navigator>

        {/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Analytics" component={Analytics} options={{ headerTintColor: "#ffffff", headerStyle: { backgroundColor: constants.lunar }, headerTitle: "", headerShadowVisible: false }} /> */}
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: "", headerShadowVisible: false, headerBackground: () => <LinearGradient
      colors={['#a13388', '#10356c']}
      style={{ flex: 1 }}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
    />
        
        // navigationOptions: {
  // header: props => <GradientHeader {...props} />,
  // headerStyle: {
  //   backgroundColor: 'transparent',
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  // },
// },
 }} />

      </Stack.Navigator>

    </NavigationContainer>

  );

}
