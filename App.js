import { StyleSheet, Image, Animated, Pressable, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import { useState, useEffect } from "react";
import LinearGradient from "react-native-linear-gradient";
import Home from "./src/screens/Home";
import Pocket from "./src/screens/Pocket";
import Transactions from "./src/screens/Transactions";
import Referrals from "./src/screens/Referrals";
import Services from "./src/screens/Services";
import Buy from "./src/screens/Buy";
import TopUp from "./src/screens/TopUp";
import BuyAirtime from "./src/screens/BuyAirtime";
import BuyData from "./src/screens/BuyData";
import BuyElectricity from "./src/screens/BuyElectricity";
import Withdraw from "./src/screens/Withdraw";
import StockMarket from "./src/screens/StockMarket";
import SendMoney from "./src/screens/SendMoney";
import ReceiveMoney from "./src/screens/ReceiveMoney";
import Confirmation from "./src/screens/Confirmation";
import { screenContext } from "./src/providers/screenContext";
import * as constants from "./src/utility/constants";
// const { restClient } = require("@polygon.io/client-js");
// import { restClient } from "@polygon.io/client-js";


export default function App() {

  const [ozow, setOzow] = useState(false);
  const [previous, setPrevious] = useState("Home");
  const [screen, setScreen] = useState("Home");
  const [user, setUser] = useState(constants.user);
  // const [user, setUser] = useState({});

  const fetchUser = async () => {

    // if user exists in cache fetch cached data

    // xx elif user exists on backend (that's why we need authentication) fetch backend data + store in cache
    // else ask user for name --> if user exists on backend fetch backend data + store in cache

    // else create a new empty user on firestore + store in cache

    // await
    user.transactions.reverse();

    // const rest = restClient("t_tMM_xfb8FIykLfdMDpAmKGn8xCThNB");

    // rest.stocks.aggregates("AAPL", 30, "minute", "2023-01-12", "2023-01-12").then((data) => {
    //   console.log(data);
    // }).catch(e => {
    //   console.error("An error happened:", e);
    // });

  }

  useEffect(() => {

    fetchUser();

  }, []);

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
                                 style={styles.largerIcon}
                                 tintColor={(routeName === selectedTab) ? "black" : "grey"} /> :

      (icon === "list") ? <View style={styles.spacingLeft}><Image source={require("./src/assets/icons/list.png")}
                                                              style={styles.standardIcon}
                                                              tintColor={(routeName === selectedTab) ? "black" : "grey"} /></View> :

      (icon === "pocket") ? <View style={styles.spacingRight}><Image source={require("./src/assets/icons/pocket.png")}
                                                                style={styles.standardIcon}
                                                                tintColor={(routeName === selectedTab) ? "black" : "grey"} /></View> :

      (icon === "referrals") ? <Image source={require("./src/assets/icons/group.png")}
                                      style={styles.largerIcon}
                                      tintColor={(routeName === selectedTab) ? "black" : "grey"} /> :

                          <Image source={require("./src/assets/icons/group.png")}
                                 style={styles.largerIcon}
                                 tintColor={(routeName === selectedTab) ? "black" : "grey"} />

    );

  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {

    return (

      <Pressable onPress={() => { ozow && setOzow(false);
                                  setPrevious(screen);
                                  setScreen(routeName);
                                  navigate(routeName); } }

                 style={styles.tabItem}>

        {_renderIcon(routeName, selectedTab)}

      </Pressable>

    );

  };

  return (

    <screenContext.Provider value={{ screen, setScreen, setPrevious, ozow, setOzow, user, setUser }}>

      <NavigationContainer>

        <CurvedBottomBar.Navigator type="DOWN"
                                   ref={constants.tabBarRef}
                                   style={styles.bottomBar}
                                   shadowStyle={styles.shadow}
                                   height={50}
                                   circleWidth={50}
                                   bgColor="white"
                                   initialRouteName="Home"
                                   tabBar={renderTabBar}
                                   screenOptions={{ headerTitle: (screen === "Buy") ? "Buy" :
                                                                 (screen === "TopUp") ? "Top Up" :
                                                                 (screen === "BuyAirtime") ? "Buy Airtime" :
                                                                 (screen === "BuyData") ? "Buy Data" :
                                                                 (screen === "BuyElectricity") ? "Buy Electricity" :
                                                                 (screen === "Withdraw") ? "Withdraw Cash" :
                                                                 (screen === "StockMarket") ? "Stock Market" :
                                                                 (screen === "SendMoney") ? "Send Money" :
                                                                 (screen === "ReceiveMoney") ? "Receive Money" :
                                                                 ((screen === "Confirmation") && (previous === "TopUp")) ? "Top Up" :
                                                                 ((screen === "Confirmation") && (previous === "BuyAirtime")) ? "Buy Airtime" :
                                                                 ((screen === "Confirmation") && (previous === "BuyData")) ? "Buy Data" :
                                                                 ((screen === "Confirmation") && (previous === "BuyElectricity")) ? "Buy Electricity" :
                                                                 ((screen === "Confirmation") && (previous === "Withdraw")) ? "Withdraw Cash" :
                                                                 ((screen === "Confirmation") && (previous === "StockMarket")) ? "Stock Market" :
                                                                 ((screen === "Confirmation") && (previous === "SendMoney")) ? "Send Money" :
                                                                 ((screen === "Confirmation") && (previous === "ReceiveMoney")) ? "Receive Money" :
                                                                 `👋 Hi, ${user.name}`, headerShadowVisible: false, headerTitleAlign: "center",

                                                    headerLeft: () => {

                                                      const navigation = useNavigation();

                                                      return ((screen === "Buy") ||
                                                              (screen === "TopUp") ||
                                                              (screen === "BuyData") ||
                                                              (screen === "BuyElectricity") ||
                                                              (screen === "Withdraw") ||
                                                              (screen === "StockMarket") ||
                                                              (screen === "SendMoney") ||
                                                              (screen === "ReceiveMoney") ||
                                                              (screen === "BuyAirtime")) && <Pressable style={styles.back}
                                                                                                       onPress={() => { constants.tabBarRef?.current?.setVisible(true);
                                                                                                                        setPrevious(screen);
                                                                                                                        setScreen(previous);
                                                                                                                        ozow && setOzow(false);
                                                                                                                        navigation.navigate(previous); }}>

                                                                                                <Image source={require("./src/assets/icons/left.png")}
                                                                                                       style={styles.backIcon} />

                                                                                            </Pressable>

                                                    },

                                                    headerTintColor: "#ffffff", headerTitleStyle: { fontFamily: "poppins_bold", fontSize: 18 },
                                                    headerBackground: () => <LinearGradient colors={[constants.primary, constants.secondary]}
                                                                                            style={styles.gradient}
                                                                                            start={{x: 0, y: 0.5}}
                                                                                            end={{x: 1, y: 0.5}} /> }}

                                  renderCircle={({ selectedTab, navigate }) => (

                                                    <Animated.View>

                                                      <Pressable style={styles.button}
                                                                 onPress={() => { !ozow && setPrevious(selectedTab);
                                                                                  !ozow ? navigate("Services") : navigate(previous);
                                                                                  setOzow(!ozow); } }>

                                                        { !ozow ? <LinearGradient colors={[constants.primary, constants.secondary]}
                                                                                  style={styles.circleButton}
                                                                                  // locations={[0, 0.6]}
                                                                                  start={{x: 0, y: 0.5}}
                                                                                  end={{x: 1, y: 0.5}}>

                                                                    <Image source={require("./src/assets/icons/ozow_white.png")}
                                                                           style={styles.ozowLogo}
                                                                           tintColor={"white"} />

                                                                  </LinearGradient> : 

                                                                  <View style={styles.circleButton}>

                                                                    <Image source={require("./src/assets/icons/x.png")}
                                                                           style={styles.xIcon} /> 
                                                                        
                                                                  </View> }

                                                      </Pressable>

                                                    </Animated.View>)}>

            <CurvedBottomBar.Screen name="Home"
                                    position="LEFT"
                                    component={() => <Home key={"home_screen"} />}/>

            <CurvedBottomBar.Screen name="History"
                                    component={() => <Transactions key={"transactions_screen"} />}
                                    position="RIGHT"/>

            <CurvedBottomBar.Screen name="Pocket"
                                    position="LEFT"
                                    component={() => <Pocket key={"pocket_screen"} />}/>

            <CurvedBottomBar.Screen name="Referrals"
                                    component={() => <Referrals key={"referral_screen"} />}
                                    position="RIGHT"/>

            <CurvedBottomBar.Screen name="Services"
                                    component={() => <Services key={"services_screen"} />}
                                    position="CIRCLE"/>

            <CurvedBottomBar.Screen name="Buy"
                                    component={() => <Buy key={"buy_screen"} />} />

            <CurvedBottomBar.Screen name="TopUp"
                                    component={() => <TopUp key={"top_up_screen"} />} />

            <CurvedBottomBar.Screen name="Confirmation"
                                    component={() => <Confirmation key={"confirm_screen"} />} />

            <CurvedBottomBar.Screen name="BuyAirtime"
                                    component={() => <BuyAirtime key={"airtime_screen"} />} />

            <CurvedBottomBar.Screen name="BuyData"
                                    component={() => <BuyData key={"data_screen"} />} />

            <CurvedBottomBar.Screen name="BuyElectricity"
                                    component={() => <BuyElectricity key={"electric_screen"} />} />

            <CurvedBottomBar.Screen name="Withdraw"
                                    component={() => <Withdraw key={"withdraw_screen"} />} />

            <CurvedBottomBar.Screen name="StockMarket"
                                    component={() => <StockMarket key={"stock_market_screen"} />} />

            <CurvedBottomBar.Screen name="SendMoney"
                                    component={() => <SendMoney key={"send_money_screen"} />} />

            <CurvedBottomBar.Screen name="ReceiveMoney"
                                    component={() => <ReceiveMoney key={"accept_money_screen"} />} />

        </CurvedBottomBar.Navigator>

      </NavigationContainer>

    </screenContext.Provider>

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
  },

  largerIcon: {
    
    width: 25,
    height: 25
  },

  spacingLeft: {
  
    paddingLeft: 20
  },

  spacingRight: {
  
    paddingRight: 20
  },

  standardIcon: {
    
    width: 20,
    height: 20
  },

  backIcon: {
    
    tintColor: "#fff",
    width: 20,
    height: 20
  },

  gradient: {

    flex: 1
  },

  ozowLogo: {

    width: 35,
    height: 35
  },

  xIcon: {

    width: 20,
    height: 20
  },

  back: {
    
    paddingLeft: 30
  }

});
