import { View, Text, SafeAreaView, ScrollView, StatusBar, FlatList, Image } from "react-native";
import SearchInput from "../../components/SearchInput";
import HorizontalDivider from "../../components/HorizontalDivider";
import FilterBox from "../../components/FilterBox";
import Contact from "../../components/Contact";
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
                           value={""}
                           key={"refer_search"} />

            </View>

        </View>

        <View style={styles.horizontalSection}>

          <FlatList horizontal={true}
                    overScrollMode="never"
                    data={["Non-Ozow.ME users", "Invite pending", "Accepted my invite", "Ozow.ME users"]}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (<FilterBox text={item}
                                                                 key={"refer_" + index.toString()}
                                                                 left_gap={(index === 0) ? 20 : 10}
                                                                 right_gap={(index === 4 - 1) ? 20 : 0} />)} />

        </View>

        <View style={{marginLeft: "5%", marginTop: 20}}>

          <Text style={{color: "#000", fontFamily: "poppins_semi_bold", fontSize: 16}}>Invite contacts</Text>

        </View>

        <View style={[styles.section, { alignItems: "center" }]}>

            <View style={{ width: "90%", backgroundColor: "#ffffff", borderRadius: 20, padding: 20, height: 300 }}>

                <FlatList data={[{name: "Aadil", phone: "0123456789"}, {name: "Bilal", phone: "9876543210"}, {name: "Cooper", phone: "2468101214"}, {name: "Dawood", phone: "3691215181"}, {name: "Elias", phone: "1098726540"}, {name: "Fatima", phone: "0987152673"}, {name: "George", phone: "9807561229"}, {name: "Aadil", phone: "0123456789"}, {name: "Bilal", phone: "9876543210"}, {name: "Cooper", phone: "2468101214"}, {name: "Dawood", phone: "3691215181"}, {name: "Elias", phone: "1098726540"}, {name: "Fatima", phone: "0987152673"}, {name: "George", phone: "9807561229"}, {name: "Aadil", phone: "0123456789"}, {name: "Bilal", phone: "9876543210"}, {name: "Cooper", phone: "2468101214"}, {name: "Dawood", phone: "3691215181"}, {name: "Elias", phone: "1098726540"}, {name: "Fatima", phone: "0987152673"}, {name: "George", phone: "9807561229"}, {name: "Aadil", phone: "0123456789"}, {name: "Bilal", phone: "9876543210"}, {name: "Cooper", phone: "2468101214"}, {name: "Dawood", phone: "3691215181"}, {name: "Elias", phone: "1098726540"}, {name: "Fatima", phone: "0987152673"}, {name: "George", phone: "9807561229"}, {name: "Aadil", phone: "0123456789"}, {name: "Bilal", phone: "9876543210"}, {name: "Cooper", phone: "2468101214"}, {name: "Dawood", phone: "3691215181"}, {name: "Elias", phone: "1098726540"}, {name: "Fatima", phone: "0987152673"}, {name: "Zaheer", phone: "0981028364"}]}
                          showsVerticalScrollIndicator={false}
                          renderItem={({ item }) => [<Contact name={item.name}
                                                              phone={item.phone}
                                                              key={"refer_" + item.name} />,
                                                              
                                                     (item.name !== "Zaheer") && <HorizontalDivider key={"refer_" + item.phone} />]} />

            </View>

        </View>

      {/* </ScrollView> */}

    </SafeAreaView>

  );

}
