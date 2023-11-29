import { View, Text, SafeAreaView, ScrollView, StatusBar, FlatList, Image } from "react-native";
import { useState } from "react";
import SearchInput from "../../components/SearchInput";
import HorizontalDivider from "../../components/HorizontalDivider";
import FilterBox from "../../components/FilterBox";
import Contact from "../../components/Contact";
import * as constants from "../../utility/constants";
import * as utility from "../../utility/utility";
import { styles } from "./styles";


export default function Referrals() {

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(constants.contacts);

  // const searchAction = (text) => {

  //   setSearchQuery(text);
  //   const filteredItems = constants.contacts.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
  //   setFilteredData(filteredItems);

  // };

  return (

    <SafeAreaView style={styles.container}>

      {/* <ScrollView showsVerticalScrollIndicator={false} bounces={true}> */}

        <StatusBar translucent={true} backgroundColor={"transparent"} />

        <View style={styles.header}>

            <Text style={[styles.sectionText, { marginBottom: 10 }]}>Share the love, invite a frined.</Text>

            <View style={styles.centerAlign}>

              <SearchInput placeholder={"Search your contacts"}
                          //  onChangeText={searchAction}
                           onChangeText={(value) => utility.searchFilter(constants.contacts, value, setFilteredData, setSearchQuery)}
                           value={searchQuery}
                           key={"refer_search"} />

            </View>

        </View>

        <View style={styles.horizontalSection}>

          <FlatList horizontal={true}
                    overScrollMode="never"
                    data={constants.referralFilters}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (<FilterBox text={item}
                                                                 key={"refer_" + index.toString()}
                                                                 left_gap={(index === 0) ? 20 : 10}
                                                                 right_gap={(index === 4 - 1) ? 20 : 0} />)} />

        </View>

        <View style={styles.invite}>

          <Text style={styles.sectionHeading}>Invite contacts</Text>

        </View>

        <View style={[styles.section, { alignItems: "center" }]}>

            <View style={styles.contactsTable}>

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
