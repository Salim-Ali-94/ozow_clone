import { StyleSheet, Image, Animated, Pressable, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Home from "./src/screens/Home";
import Pocket from "./src/screens/Pocket";
import Transactions from "./src/screens/Transactions";
import Referrals from "./src/screens/Referrals";
import * as constants from "./src/utility/constants";


export default function App() {

  const [ozow, setOzow] = useState(false);

  const _renderIcon = (routeName, selectedTab) => {

    let icon = "";

    switch (routeName) {

      case "Home":

        icon = "home";
        break;

      case "History":

        icon = "list";
        break;

      case "Pocket":

        icon = "pocket";
        break;

      case "Referrals":

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

      <Pressable onPress={() => navigate(routeName)}
                 style={styles.tabItem}>

        {_renderIcon(routeName, selectedTab)}

      </Pressable>

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

                                                    <Pressable style={styles.button}
                                                               onPress={() => setOzow(!ozow)} >

                                                      { !ozow ? <LinearGradient colors={[constants.primary, constants.secondary]}
                                                                                style={styles.circleButton}
                                                                                start={{x: 0, y: 0.5}}
                                                                                end={{x: 1, y: 0.5}}>

                                                                  <Image source={require("./src/assets/icons/ozow_white.png")}
                                                                        style={{width: 35, height: 35}}
                                                                        tintColor={"white"} />

                                                                </LinearGradient> : 

                                                                <View style={styles.circleButton}>

                                                                  <Image source={require("./src/assets/icons/x.png")}
                                                                         style={{width: 20, height: 20}} /> 
                                                                       
                                                                </View> }

                                                    </Pressable>

                                                  </Animated.View>)}>

          <CurvedBottomBar.Screen name="Home"
                                  position="LEFT"
                                  component={() => <Home />}/>

          <CurvedBottomBar.Screen name="History"
                                  component={() => <Transactions />}
                                  position="RIGHT"/>

          <CurvedBottomBar.Screen name="Pocket"
                                  position="LEFT"
                                  component={() => <Pocket />}/>

          <CurvedBottomBar.Screen name="Referrals"
                                  component={() => <Referrals />}
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
    // backgroundColor: "#e8e8e8",
    backgroundColor: "#000000",
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
