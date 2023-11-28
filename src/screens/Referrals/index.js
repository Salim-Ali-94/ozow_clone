import { View, Text, SafeAreaView, ScrollView, StatusBar, FlatList, Image } from "react-native";
import { useState } from "react";
import SearchInput from "../../components/SearchInput";
import HorizontalDivider from "../../components/HorizontalDivider";
import FilterBox from "../../components/FilterBox";
import Contact from "../../components/Contact";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function Referrals() {

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(constants.contacts);

  const handleSearch = (text) => {

    setSearchQuery(text);
    const filteredItems = constants.contacts.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(filteredItems);

  };

  return (

    <SafeAreaView style={{ backgroundColor: constants.background, flex: 1 }}>

      {/* <ScrollView showsVerticalScrollIndicator={false} bounces={true}> */}

        <StatusBar translucent={true} backgroundColor={"transparent"} />

        <View style={{ marginTop: 30 }}>

            <Text style={[styles.sectionText, { marginBottom: 10 }]}>Share the love, invite a frined.</Text>

            <View style={styles.centerAlign}>

              <SearchInput placeholder={"Search your contacts"}
                           onChangeText={handleSearch}
                           value={searchQuery}
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

                <FlatList data={filteredData}
                          showsVerticalScrollIndicator={false}
                          renderItem={({ item, index }) => [<Contact name={item.name}
                                                              phone={item.phone}
                                                              key={"refer_" + item.name} />,
                                                              
                                                            (index < filteredData.length - 1) && <HorizontalDivider key={"refer_" + item.phone} />]} />

            </View>

        </View>

      {/* </ScrollView> */}

    </SafeAreaView>

  );

}
