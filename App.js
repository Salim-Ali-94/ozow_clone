import { StyleSheet, Image, Animated, TouchableOpacity, Alert, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import LinearGradient from "react-native-linear-gradient";
import Home from "./src/screens/Home";
import * as constants from "./src/utility/constants";


export default function App() {

  const _renderIcon = (routeName, selectedTab) => {

    let icon = "";

    switch (routeName) {

      case "Home0":

        icon = "home";
        break;

      case "Home1":

        icon = "list";
        break;

      case "Home2":

        icon = "pocket";
        break;

      case "Home3":

        icon = "group";
        break;

    }

    return (

      (icon === "home") ? <Image source={require("./src/assets/icons/home.png")}
                                 style={{ width: 25, height: 25 }}
                                 tintColor={routeName === selectedTab ? "black" : "grey"} /> :

      (icon === "list") ? <View style={{ paddingLeft: 20 }}><Image source={require("./src/assets/icons/list.png")}
                                                                   style={{ width: 20, height: 20 }}
                                                                   tintColor={routeName === selectedTab ? "black" : "grey"} /></View> :

      (icon === "pocket") ? <View style={{ paddingRight: 20 }}><Image source={require("./src/assets/icons/pocket.png")}
                                                                      style={{ width: 20, height: 20 }}
                                                                      tintColor={routeName === selectedTab ? "black" : "grey"} /></View> :

                         <Image source={require("./src/assets/icons/group.png")}
                                 style={{ width: 25, height: 25 }}
                                 tintColor={routeName === selectedTab ? "black" : "grey"} />

    );

  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {

    return (

      <TouchableOpacity onPress={() => navigate(routeName)}
                        style={styles.tabItem}>

        {_renderIcon(routeName, selectedTab)}


        {/* <Text style={{ fontWeight: "bold",
                        // fontSize: 14, fontFamily: "poppins_semi_bold",
                       color: (routeName === selectedTab) ? "#000000" : "grey" }}>{routeName}</Text> */}

      </TouchableOpacity>

    );

  };

  return (

    <NavigationContainer>

      <CurvedBottomBar.Navigator type="DOWN"
                                 style={styles.bottomBar}
                                 shadowStyle={styles.shadow}
                                 height={50}
                                 circleWidth={50}
                                 bgColor="white"
                                 initialRouteName="Home"
                                 tabBar={renderTabBar}
                                 screenOptions={{ headerTitle: "👋 Hi, Salim", headerShadowVisible: false, headerTitleAlign: "center",
                                                  headerTintColor: "#ffffff", headerTitleStyle: { fontFamily: "poppins_bold", fontSize: 18 },
                                                  headerBackground: () => <LinearGradient colors={[constants.primary, constants.secondary]}
                                                                                          style={{ flex: 1 }}
                                                                                          start={{x: 0, y: 0.5}}
                                                                                          end={{x: 1, y: 0.5}} /> }}

                                 renderCircle={({ selectedTab, navigate }) => (

                                                  <Animated.View>

                                                    <TouchableOpacity 
                                                    style={styles.button}
                                                                      onPress={() => Alert.alert("Click Action")} >

                                                      <LinearGradient colors={[constants.primary, constants.secondary]}
                                                                                          style={styles.circleButton}
                                                                                          start={{x: 0, y: 0.5}}
                                                                                          end={{x: 1, y: 0.5}}>

                                                      <Image source={require("./src/assets/icons/ozow_white.png")}
                                                             style={{width: 35, height: 35}}
                                                             tintColor={"white"} />

                                                      </LinearGradient>

                                                    </TouchableOpacity>

                                                  </Animated.View>)}>

          <CurvedBottomBar.Screen name="Home0"
                                  position="LEFT"
                                  component={() => <Home />}/>

          <CurvedBottomBar.Screen name="Home1"
                                  component={() => <Home />}
                                  position="RIGHT"/>

          <CurvedBottomBar.Screen name="Home2"
                                  position="LEFT"
                                  component={() => <Home />}/>

          <CurvedBottomBar.Screen name="Home3"
                                  component={() => <Home />}
                                  position="RIGHT"/>

      </CurvedBottomBar.Navigator>

    </NavigationContainer>

  );

}


export const styles = StyleSheet.create({

  shadow: {

    shadowColor: "#dddddd",

    shadowOffset: {

      width: 0,
      height: 0,
    },

    shadowOpacity: 1,
    shadowRadius: 5
  },

  button: {

    flex: 1,
    justifyContent: "center"
  },

  circleButton: {

    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e8e8e8",
    bottom: 30,
    shadowColor: "#000000",

    shadowOffset: {

      width: 0,
      height: 1
    },

    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1
  },

  tabItem: {

    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }

});
