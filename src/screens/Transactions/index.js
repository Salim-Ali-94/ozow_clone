import { SafeAreaView, ScrollView, StatusBar, View, Text, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useState } from "react";
import SearchInput from "../../components/SearchInput";
import EmptyTransactions from "../../components/EmptyTransactions";
import TransactionRow from "../../components/TransactionRow";
import HorizontalDivider from "../../components/HorizontalDivider";
import FilterBox from "../../components/FilterBox";
import * as constants from "../../utility/constants";
import * as utility from "../../utility/utility";
import { styles } from "./styles";
import { useSelector } from "react-redux";


export default function Transactions() {

    const user = useSelector(state => state.reducer_user.user);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState(user.transactions);

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

                <View style={styles.search}>

                    <SearchInput placeholder={"Search EFT transactions"}
                                 onChangeText={(value) => utility.searchFilter(user.transactions, value, setFilteredData, setSearchQuery, "reference")}
                                 value={searchQuery}
                                 key={"transactions_search"} />

                </View>

                <View style={styles.horizontalSection}>

                    <FlatList horizontal={true}
                              overScrollMode="never"
                              data={constants.transactionFilters}
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

                                                          <View key={"transactions_box_holder"}>

                                                              { filteredData.map((item, index) => [<View style={styles.row} key={"transactions_box_container_" + item.id}>

                                                                                                          <TransactionRow amount={item.amount}
                                                                                                                          status={item.status}
                                                                                                                          direction={item.direction}
                                                                                                                          reference={item.reference}
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

}
