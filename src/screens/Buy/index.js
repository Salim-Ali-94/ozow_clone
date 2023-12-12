import { Alert, View, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import DetailsCard from "../../components/DetailsCard";
import GradientHeader from "../../components/GradientHeader";
import SecurityBadge from "../../components/SecurityBadge";
import SafetyTag from "../../components/SafetyTag";
import * as constants from "../../utility/constants";
import { styles } from "./styles";
import { previousScreen, currentScreen } from "../../providers/reducers/screenReducer";


export default function Buy() {

  const dispatch = useDispatch();
  const page = useSelector(state => state.reducer_screen);
  const navigation = useNavigation();

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false} bounces={true} keyboardShouldPersistTaps="handle">

        {/* <StatusBar translucent={true} backgroundColor={"transparent"} /> */}

        <LinearGradient colors={[constants.primary, constants.secondary]} 
                            style={styles.gradient}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}>

          <StatusBar translucent={true} backgroundColor={"transparent"} />

        </LinearGradient >

        <GradientHeader heading={"What would you like to buy?"} />

        <View style={styles.listSection}>

            <View style={styles.centerAlign}>

                { constants.details.map((item, index) => <DetailsCard category={item.category}
                                                                      details={item.details}
                                                                      icon={item.icon}
                                                                      iconSize={item.size}
                                                                      gap={10}
                                                                      pressAction={() => { if (item.route) { constants.tabBarRef?.current?.setVisible(false);
                                                                                                             dispatch(previousScreen(page.screen));
                                                                                                             dispatch(currentScreen(item.route));                                                    
                                                                                                             navigation.navigate(item.route); } else { Alert.alert(item.category, item.category + " feature coming soon") } }}
                                                                      key={"buy_" + item.id} />) }

                <DetailsCard category={"Trade stocks"}
                             details={"Trade stocks and grow your portfolio all from your pocket."}
                             icon={require("../../assets/icons/trading.png")}
                             pressAction={() => { constants.tabBarRef?.current?.setVisible(false);
                                                  dispatch(previousScreen(page.screen));
                                                  dispatch(currentScreen("StockMarket"));
                                                  navigation.navigate("StockMarket"); }}
                             key={"buy_stocks_details_card"} />

                <SafetyTag />

                <SecurityBadge key={"security_tls_buy"} />

            </View>

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
