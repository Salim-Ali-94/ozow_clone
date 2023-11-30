import { View, SafeAreaView, ScrollView, StatusBar } from "react-native";
import DetailsCard from "../../components/DetailsCard";
import GradientHeader from "../../components/GradientHeader";
import SecurityBadge from "../../components/SecurityBadge";
import SafetyTag from "../../components/SafetyTag";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function Buy() {

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false} bounces={true}>

        <StatusBar translucent={true} backgroundColor={"transparent"} />

        <GradientHeader heading={"What would you like to buy?"} />

        <View style={styles.listSection}>

            <View style={styles.centerAlign}>

                { constants.details.map((item, index) => <DetailsCard category={item.category}
                                                                      details={item.details}
                                                                      icon={item.icon}
                                                                      iconSize={item.size}
                                                                      gap={10}
                                                                      key={"buy_" + item.id} />) }

                <DetailsCard category={"Trade stocks"}
                             details={"Trade stocks and grow your portfolio all from your pocket."}
                             icon={require("../../assets/icons/trading.png")}
                             key={"buy_stocks_details_card"} />

                <SafetyTag />

                <SecurityBadge key={"security_tls_buy"} />

            </View>

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
