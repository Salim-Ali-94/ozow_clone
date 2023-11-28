import { View, Text, SafeAreaView, ScrollView, StatusBar } from "react-native";
import InfoCard from "../../components/InfoCard";
import DetailsCard from "../../components/DetailsCard";
import GradientHeader from "../../components/GradientHeader";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function Services() {

  return (

    <SafeAreaView style={{ backgroundColor: constants.background, flex: 1 }}>

      <ScrollView showsVerticalScrollIndicator={false} bounces={true}>

        <StatusBar translucent={true} backgroundColor={"transparent"} />

        <GradientHeader heading={"What would you like to do?"} />

        <View style={{ marginTop: -115 }}>

            <View style={styles.centerAlign}>

              <View style={{flexDirection: "row" }}>

                <InfoCard icon={constants.info[0].icon}
                          info={constants.info[0].info}
                          category={constants.info[0].category}
                          key={"service_" + constants.info[0].id} />

                <View style={{width: 10}} />

                <InfoCard icon={constants.info[1].icon}
                          info={constants.info[1].info}
                          category={constants.info[1].category}
                          key={"service_" + constants.info[1].id} />

              </View>

              <View style={{height: 20}} />

              <View style={{flexDirection: "row"}}>
  
                <InfoCard icon={constants.info[2].icon}
                          info={constants.info[2].info}
                          category={constants.info[2].category}
                          key={"service_" + constants.info[2].id} />

              <View style={{width: 10}} />

                <InfoCard icon={constants.info[3].icon}
                          info={constants.info[3].info}
                          category={constants.info[3].category}
                          key={"service_" + constants.info[3].id} />

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
                                                             gap={(index < constants.details.length - 1) ? 10 : 0}
                                                             key={"service_" + item.id} />) }

            </View>

        </View>

        <View style={{ marginBottom: 120 }}>

            <Text style={[styles.sectionText, { marginBottom: 10 }]}>Trade</Text>

            <View style={styles.centerAlign}>

                <DetailsCard category={"Trade stocks"}
                             details={"Trade stocks and grow your portfolio all from your pocket."}
                             icon={require("../../assets/icons/trading.png")}
                             key={"service_stocks_details_card"} />

            </View>

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
