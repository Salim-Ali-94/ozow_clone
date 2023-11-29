import { SafeAreaView, ScrollView, StatusBar, View, Text, FlatList } from "react-native";
import { useState } from "react";
import SearchInput from "../../components/SearchInput";
import EmptyTransactions from "../../components/EmptyTransactions";
import TransactionRow from "../../components/TransactionRow";
import HorizontalDivider from "../../components/HorizontalDivider";
import FilterBox from "../../components/FilterBox";
import * as constants from "../../utility/constants";
import * as utility from "../../utility/utility";
import { styles } from "./styles";


export default function Transactions() {

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState(constants.data);

    return (

        <SafeAreaView style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false} bounces={true}>

            <StatusBar translucent={true} backgroundColor={"transparent"} />

                <View style={styles.search}>

                    <SearchInput placeholder={"Search EFT transactions"}
                                 onChangeText={(value) => utility.searchFilter(constants.data, value, setFilteredData, setSearchQuery)}
                                 value={searchQuery}
                                 key={"transactions_search"} />

                </View>

                <View style={styles.horizontalSection}>

                    <FlatList horizontal={true}
                              overScrollMode="never"
                              data={["All time", "All transactions", "All services", "All statuses"]}
                              showsHorizontalScrollIndicator={false}
                              renderItem={({ item, index }) => (<FilterBox text={item}
                                                                           key={"transactions_" + index.toString()}
                                                                           arrow={true}
                                                                           left_gap={(index === 0) ? 20 : 10}
                                                                           right_gap={(index === 3) ? 20 : 0} />)} />

                </View>

                <View style={[styles.section, { marginBottom: 80 }]}>

                    <Text style={[styles.sectionText, { marginBottom: 20 }]}>Latest Transactions</Text>

                    <View style={styles.centerAlign}>

                    <View style={styles.transactionList}>

                        { (filteredData.length === 0) ? <EmptyTransactions key={"transactions_empty"} /> :

                                                        //   <View style={styles.transactions} key={"transactions_box_holder"}>
                                                          <View key={"transactions_box_holder"}>

                                                              { filteredData.map((item, index) => [<View style={styles.row} key={"transactions_box_container_" + item.id}>

                                                                                                          <TransactionRow amount={item.amount}
                                                                                                                          status={item.status}
                                                                                                                          direction={item.direction}
                                                                                                                          name={item.name}
                                                                                                                          category={item.category}
                                                                                                                          date={item.date}
                                                                                                                          screen={"transactions"}
                                                                                                                          key={"transactions_" + item.id} />

                                                                                                      </View>,

                                                                                                      (index < filteredData.length - 1) && <HorizontalDivider key={"trasnactions_" + index.toString()} />]) }

                                                          </View> }

                        </View>

                    </View>

                </View>

            </ScrollView>

        </SafeAreaView>

    );

};
