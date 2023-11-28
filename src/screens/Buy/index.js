import { View, Text, SafeAreaView, ScrollView, StatusBar } from "react-native";
import DetailsCard from "../../components/DetailsCard";
import GradientHeader from "../../components/GradientHeader";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function Buy() {

  return (

    <SafeAreaView style={{ backgroundColor: constants.background, flex: 1 }}>

      <ScrollView showsVerticalScrollIndicator={false} bounces={true}>

        <StatusBar translucent={true} backgroundColor={"transparent"} />

        <GradientHeader heading={"What would you like to buy?"} />

        <View style={{ marginTop: -50, marginBottom: 80 }}>

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


            <View style={{ marginTop: 16 }}>

                <Text style={{ fontFamily: "poppins_regular" }}>Ozow is safe and secure</Text>

            </View>

        </View>

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
