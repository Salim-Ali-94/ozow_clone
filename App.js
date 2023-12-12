import { Image, Animated, Pressable, View } from "react-native";
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
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "./src/providers/reducers/userReducer";
import { currentScreen, previousScreen } from "./src/providers/reducers/screenReducer";


export default function App() {

  const customer = useSelector(state => state.reducer_user);
  const page = useSelector(state => state.reducer_screen);
  const dispatch = useDispatch();
  const [ozow, setOzow] = useState(false);

  useEffect(() => {

    if (customer.status === "idle") {

      dispatch(fetchUser());

    }

  }, [dispatch, customer]);

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
                                  dispatch(previousScreen(page.screen));
                                  dispatch(currentScreen(routeName));
                                  navigate(routeName); } }

                 style={styles.tabItem}>

        {_renderIcon(routeName, selectedTab)}

      </Pressable>

    );

  };

  return (

    <screenContext.Provider value={{ ozow, setOzow }}>

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
                                   screenOptions={{ headerTitle: (page.screen === "Buy") ? "Buy" :
                                                                 (page.screen === "TopUp") ? "Top Up" :
                                                                 (page.screen === "BuyAirtime") ? "Buy Airtime" :
                                                                 (page.screen === "BuyData") ? "Buy Data" :
                                                                 (page.screen === "BuyElectricity") ? "Buy Electricity" :
                                                                 (page.screen === "Withdraw") ? "Withdraw Cash" :
                                                                 (page.screen === "StockMarket") ? "Stock Market" :
                                                                 (page.screen === "SendMoney") ? "Send Money" :
                                                                 (page.screen === "ReceiveMoney") ? "Receive Money" :
                                                                 ((page.screen === "Confirmation") && (page.previous === "TopUp")) ? "Top Up" :
                                                                 ((page.screen === "Confirmation") && (page.previous === "BuyAirtime")) ? "Buy Airtime" :
                                                                 ((page.screen === "Confirmation") && (page.previous === "BuyData")) ? "Buy Data" :
                                                                 ((page.screen === "Confirmation") && (page.previous === "BuyElectricity")) ? "Buy Electricity" :
                                                                 ((page.screen === "Confirmation") && (page.previous === "Withdraw")) ? "Withdraw Cash" :
                                                                 ((page.screen === "Confirmation") && (page.previous === "StockMarket")) ? "Stock Market" :
                                                                 ((page.screen === "Confirmation") && (page.previous === "SendMoney")) ? "Send Money" :
                                                                 ((page.screen === "Confirmation") && (page.previous === "ReceiveMoney")) ? "Receive Money" :
                                                                 `👋 Hi, ${customer.user.name}`, headerShadowVisible: false, headerTitleAlign: "center",

                                                    headerLeft: () => {

                                                      const navigation = useNavigation();

                                                      return ((page.screen === "Buy") ||
                                                              (page.screen === "TopUp") ||
                                                              (page.screen === "BuyData") ||
                                                              (page.screen === "BuyElectricity") ||
                                                              (page.screen === "Withdraw") ||
                                                              (page.screen === "StockMarket") ||
                                                              (page.screen === "SendMoney") ||
                                                              (page.screen === "ReceiveMoney") ||
                                                              (page.screen === "BuyAirtime")) && <Pressable style={styles.back}
                                                                                                       onPress={() => { 
                                                                                                                        constants.tabBarRef?.current?.setVisible(["Home", "Services", "History", "Pocket", "Referrals"].includes(page.previous) ? true : false);
                                                                                                                        dispatch(previousScreen(page.screen));
                                                                                                                        dispatch(currentScreen((page.screen === "Buy") ? "Home" : page.previous));
                                                                                                                        setOzow(false);
                                                                                                                        navigation.navigate((page.screen === "Buy") ? "Home" : page.previous); }}>

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
                                                                  onPress={() => { !ozow && dispatch(previousScreen(selectedTab));
                                                                                   !ozow ? navigate("Services") : navigate(page.previous);
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
