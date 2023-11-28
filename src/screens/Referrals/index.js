import { View, Text, SafeAreaView, ScrollView, StatusBar, FlatList, Image } from "react-native";
import SearchInput from "../../components/SearchInput";
import HorizontalDivider from "../../components/HorizontalDivider";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function Referrals() {

  return (

    <SafeAreaView style={{ backgroundColor: constants.background, flex: 1 }}>

      {/* <ScrollView showsVerticalScrollIndicator={false} bounces={true}> */}

        <StatusBar translucent={true} backgroundColor={"transparent"} />

        <View style={{ marginTop: 30 }}>

            <Text style={[styles.sectionText, { marginBottom: 10 }]}>Share the love, invite a frined.</Text>

            <View style={styles.centerAlign}>

              <SearchInput placeholder={"Search your contacts"}
                           onChangeText={() => {}}
                           value={""} />

            </View>

        </View>

        <View style={[styles.section, { alignItems: "center" }]}>

            {/* <View style={styles.centerAlign}> */}
            <View style={{ width: "90%", backgroundColor: "#ffffff", borderRadius: 20, padding: 20, height: 300 }}>

                {/* <FlatList data={["Aadil", "Bilal", "Cooper", "Dawood", "Elias", "Fatima", "George", "Aadil", "Bilal", "Cooper", "Dawood", "Elias", "Fatima", "George", "Aadil", "Bilal", "Cooper", "Dawood", "Elias", "Fatima", "George", "Aadil", "Bilal", "Cooper", "Dawood", "Elias", "Fatima", "George", "Aadil", "Bilal", "Cooper", "Dawood", "Elias", "Fatima", "Zaheer"]} */}
                <FlatList data={[{name: "Aadil", phone: "0123456789"}, {name: "Bilal", phone: "9876543210"}, {name: "Cooper", phone: "2468101214"}, {name: "Dawood", phone: "3691215181"}, {name: "Elias", phone: "1098726540"}, {name: "Fatima", phone: "0987152673"}, {name: "George", phone: "9807561229"}, {name: "Aadil", phone: "0123456789"}, {name: "Bilal", phone: "9876543210"}, {name: "Cooper", phone: "2468101214"}, {name: "Dawood", phone: "3691215181"}, {name: "Elias", phone: "1098726540"}, {name: "Fatima", phone: "0987152673"}, {name: "George", phone: "9807561229"}, {name: "Aadil", phone: "0123456789"}, {name: "Bilal", phone: "9876543210"}, {name: "Cooper", phone: "2468101214"}, {name: "Dawood", phone: "3691215181"}, {name: "Elias", phone: "1098726540"}, {name: "Fatima", phone: "0987152673"}, {name: "George", phone: "9807561229"}, {name: "Aadil", phone: "0123456789"}, {name: "Bilal", phone: "9876543210"}, {name: "Cooper", phone: "2468101214"}, {name: "Dawood", phone: "3691215181"}, {name: "Elias", phone: "1098726540"}, {name: "Fatima", phone: "0987152673"}, {name: "George", phone: "9807561229"}, {name: "Aadil", phone: "0123456789"}, {name: "Bilal", phone: "9876543210"}, {name: "Cooper", phone: "2468101214"}, {name: "Dawood", phone: "3691215181"}, {name: "Elias", phone: "1098726540"}, {name: "Fatima", phone: "0987152673"}, {name: "Zaheer", phone: "0981028364"}]}
                          // scrollEnabled={false}
                          showsVerticalScrollIndicator={false}
                          // contentContainerStyle={{ gap: 10, paddingLeft: 5, paddingRight: 5, paddingBottom: 5, paddingTop: 5 }}
                          renderItem={({ item }) => [<View style={{ paddingVertical: 10, flexDirection: "row", alignItems: "center" }}><View style={{width: 50, height: 50, borderRadius: 50, backgroundColor: constants.cement, marginRight: 10, justifyContent: "center", alignItems: "center" }}><Image source={require("../../assets/icons/user.png")} style={{ width: 30, height: 30 }} /></View><View><Text style={{ fontFamily: "poppins_medium", color: "#000", fontSize: 18, lineHeight: 19 }}>{item.name}</Text><Text style={{ fontFamily: "poppins_medium", color: "grey", fontSize: 16 }}>{item.phone}</Text></View></View>, (item.name !== "Zaheer") && <HorizontalDivider key={item.phone} />]} />

                {/* { constants.details.map((item, index) => <DetailsCard category={item.category}
                                                             details={item.details}
                                                             icon={item.icon}
                                                             iconSize={item.size}
                                                             gap={(index < constants.details.length - 1) ? 10 : 0}
                                                             key={item.id} />) } */}

            </View>

        </View>
{/* 
        <View style={{ marginBottom: 120 }}>

            <Text style={[styles.sectionText, { marginBottom: 10 }]}>Trade</Text>

            <View style={styles.centerAlign}>

                <DetailsCard category={"Trade stocks"}
                             details={"Trade stocks and grow your portfolio all from your pocket."}
                             icon={require("../../assets/icons/trading.png")} />

            </View>
            
        </View> */}

      {/* </ScrollView> */}

    </SafeAreaView>

  );

}
