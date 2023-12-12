import { Alert, View, Text, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfoCard from "../../components/InfoCard";
import DetailsCard from "../../components/DetailsCard";
import GradientHeader from "../../components/GradientHeader";
import * as constants from "../../utility/constants";
import { screenContext } from "../../providers/screenContext";
import { styles } from "./styles";
import { previousScreen, currentScreen } from "../../providers/reducers/screenReducer";


export default function Services() {

  const dispatch = useDispatch();
  const page = useSelector(state => state.reducer_screen);
  const { ozow, setOzow } = useContext(screenContext);
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

        <GradientHeader heading={"What would you like to do?"} />

        <View style={styles.gridContainer}>

            <View style={styles.centerAlign}>

              <View style={styles.row}>

                { constants.info.slice(0, 2).map((item, index) => [<InfoCard icon={item.icon}
                                                                             info={item.info}
                                                                             pressAction={() => { if (item.route) { constants.tabBarRef?.current?.setVisible(false);
                                                                                                                    dispatch(previousScreen(page.screen));
                                                                                                                    dispatch(currentScreen(item.route));
                                                                                                                    setOzow(!ozow);
                                                                                                                    // setOzow(false);
                                                                                                                    navigation.navigate(item.route); } else { Alert.alert(item.category, item.category + " feature coming soon") } }}
                                                                             category={item.category}
                                                                             key={"service_" + item.id} />,

                                                                   (index < 1) && <View style={styles.horizontalGap} key={"service_gap_" + item.id} />]) }

              </View>

              <View style={styles.verticalGap} />

              <View style={styles.row}>
  
                { constants.info.slice(2, 4).map((item, index) => [<InfoCard icon={item.icon}
                                                                             info={item.info}
                                                                             category={item.category}
                                                                             pressAction={() => { if (item.route) { constants.tabBarRef?.current?.setVisible(false);
                                                                                                                    dispatch(previousScreen(page.screen));
                                                                                                                    dispatch(currentScreen(item.route));
                                                                                                                    setOzow(!ozow);
                                                                                                                    // setOzow(false);
                                                                                                                    navigation.navigate(item.route); } else { Alert.alert(item.category, item.category + " feature coming soon") } }}
                                                                             key={"service_" + item.id} />,

                                                                   (index < 1) && <View style={styles.horizontalGap} key={"service_gap_" + item.id} />]) }


              </View>

            </View>

        </View>

        <View style={styles.section}>

            <Text style={[styles.sectionText, { marginBottom: 10 }]}>Buy</Text>

            <View style={styles.centerAlign}>

                { constants.details.map((item, index) => <DetailsCard category={item.category}
                                                                      details={item.details}
                                                                      icon={item.icon}
                                                                      iconSize={item.size}
                                                                      pressAction={() => { if (item.route) { constants.tabBarRef?.current?.setVisible(false);
                                                                                                            dispatch(previousScreen(page.screen));
                                                                                                            dispatch(currentScreen(item.route));
                                                                                                              setOzow(!ozow);
                                                                                                            //  setOzow(false);
                                                                                                             navigation.navigate(item.route); } else { Alert.alert(item.category, item.category + " feature coming soon") } }}
                                                                      gap={(index < constants.details.length - 1) ? 10 : 0}
                                                                      key={"service_" + item.id} />) }

            </View>

        </View>

        <View style={styles.tradeSection}>

            <Text style={[styles.sectionText, { marginBottom: 10 }]}>Trade</Text>

            <View style={styles.centerAlign}>

                <DetailsCard category={"Trade stocks"}
                             details={"Trade stocks and grow your portfolio all from your pocket."}
                             icon={require("../../assets/icons/trading.png")}
                             pressAction={() => { constants.tabBarRef?.current?.setVisible(false);
                                                  dispatch(previousScreen(page.screen));
                                                  dispatch(currentScreen("StockMarket"));
                                                  navigation.navigate("StockMarket"); }}

                             key={"service_stocks_details_card"} />

            </View>

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
