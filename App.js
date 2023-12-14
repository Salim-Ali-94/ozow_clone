import { Image, Animated, Pressable, View, Alert } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
import UserModal from "./src/components/UserModal";
import * as constants from "./src/utility/constants";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { assignUser } from "./src/providers/reducers/userReducer";
import { currentScreen, previousScreen } from "./src/providers/reducers/screenReducer";
import { toggleState } from "./src/providers/reducers/ozowReducer";


export default function App() {

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.reducer_user);
  const screen = useSelector(state => state.reducer_screen);
  const ozow = useSelector(state => state.reducer_ozow.ozow);
  const dispatch = useDispatch();

  const fetchUser = async () => {

    const person = await AsyncStorage.getItem("user");

    if (person !== null) {

      dispatch(assignUser(JSON.parse(person)));

    } else {

      setOpen(true);

    }

  }

  useEffect(() => {

    if (user.status === "idle") {

      fetchUser();

    }

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

      <Pressable onPress={() => { ozow && dispatch(toggleState(false));
                                  dispatch(previousScreen(screen.screen));
                                  dispatch(currentScreen(routeName));
                                  navigate(routeName); } }

                 style={styles.tabItem}>

        {_renderIcon(routeName, selectedTab)}

      </Pressable>

    );

  };

  return (

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
                                 screenOptions={{ headerTitle: (screen.screen === "Buy") ? "Buy" :
                                                               (screen.screen === "TopUp") ? "Top Up" :
                                                               (screen.screen === "BuyAirtime") ? "Buy Airtime" :
                                                               (screen.screen === "BuyData") ? "Buy Data" :
                                                               (screen.screen === "BuyElectricity") ? "Buy Electricity" :
                                                               (screen.screen === "Withdraw") ? "Withdraw Cash" :
                                                               (screen.screen === "StockMarket") ? "Stock Market" :
                                                               (screen.screen === "SendMoney") ? "Send Money" :
                                                               (screen.screen === "ReceiveMoney") ? "Receive Money" :
                                                               ((screen.screen === "Confirmation") && (screen.previous === "TopUp")) ? "Top Up" :
                                                               ((screen.screen === "Confirmation") && (screen.previous === "BuyAirtime")) ? "Buy Airtime" :
                                                               ((screen.screen === "Confirmation") && (screen.previous === "BuyData")) ? "Buy Data" :
                                                               ((screen.screen === "Confirmation") && (screen.previous === "BuyElectricity")) ? "Buy Electricity" :
                                                               ((screen.screen === "Confirmation") && (screen.previous === "Withdraw")) ? "Withdraw Cash" :
                                                               ((screen.screen === "Confirmation") && (screen.previous === "StockMarket")) ? "Stock Market" :
                                                               ((screen.screen === "Confirmation") && (screen.previous === "SendMoney")) ? "Send Money" :
                                                               ((screen.screen === "Confirmation") && (screen.previous === "ReceiveMoney")) ? "Receive Money" :
                                                               (user.user.name !== "") ? `👋 Hi, ${user.user.name}` : "", headerShadowVisible: false, headerTitleAlign: "center",

                                                  headerLeft: () => {

                                                    const navigation = useNavigation();

                                                    return ((screen.screen === "Buy") ||
                                                            (screen.screen === "TopUp") ||
                                                            (screen.screen === "BuyData") ||
                                                            (screen.screen === "BuyElectricity") ||
                                                            (screen.screen === "Withdraw") ||
                                                            (screen.screen === "StockMarket") ||
                                                            (screen.screen === "SendMoney") ||
                                                            (screen.screen === "ReceiveMoney") ||
                                                            (screen.screen === "BuyAirtime")) && <Pressable style={styles.back}
                                                                                                            onPress={() => {
                                                                                                                              constants.tabBarRef?.current?.setVisible(["Home", "Services", "History", "Pocket", "Referrals"].includes(screen.previous) ? true : false);
                                                                                                                              dispatch(previousScreen(screen.screen));
                                                                                                                              dispatch(currentScreen((screen.screen === "Buy") ? "Home" : screen.previous));
                                                                                                                              dispatch(toggleState(false));
                                                                                                                              navigation.navigate((screen.screen === "Buy") ? "Home" : screen.previous); } }>

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
                                                                                 !ozow ? navigate("Services") : navigate(screen.previous);
                                                                                 dispatch(toggleState(!ozow)); } }>

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


      <UserModal open={open}
                 setOpen={setOpen}
                 password={password}
                 setPassword={setPassword}
                 name={name}
                 setName={setName} />

    </NavigationContainer>

  );

}
