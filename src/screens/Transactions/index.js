import { SafeAreaView, ScrollView, StatusBar, View, Text, FlatList } from "react-native";
import SearchInput from "../../components/SearchInput";
import EmptyTransactions from "../../components/EmptyTransactions";
import TransactionRow from "../../components/TransactionRow";
import HorizontalDivider from "../../components/HorizontalDivider";
import FilterBox from "../../components/FilterBox";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function Transactions() {

    return (

        <SafeAreaView style={{ backgroundColor: constants.background, flex: 1 }}>

            <ScrollView showsVerticalScrollIndicator={false} bounces={true}>

            <StatusBar translucent={true} backgroundColor={"transparent"} />

                <View style={{ marginTop: 30, alignItems: "center" }}>

                    <SearchInput placeholder={"Search EFT transactions"}
                                 onChangeText={() => {}}
                                 value={""}
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
                                                                           right_gap={(index === 4 - 1) ? 20 : 0} />)} />

                </View>

                <View style={[styles.section, { marginBottom: 80 }]}>

                    <Text style={[styles.sectionText, { marginBottom: 20 }]}>Latest Transactions</Text>

                    <View style={styles.centerAlign}>

                    <View style={{width: "90%"}}>

                        { (constants.data.length === 0) ? <EmptyTransactions key={"transactions_empty"} /> :

                                                          <View style={styles.transactions}>

                                                              { constants.data.map((item, index) => [<View style={{ paddingVertical: 20 }}>

                                                                                                          <TransactionRow amount={item.amount}
                                                                                                                          status={item.status}
                                                                                                                          direction={item.direction}
                                                                                                                          name={item.name}
                                                                                                                          category={item.category}
                                                                                                                          date={item.date}
                                                                                                                          screen={"transactions"}
                                                                                                                          key={"transactions_" + item.id} />

                                                                                                      </View>,

                                                                                                      (index < constants.data.length - 1) && <HorizontalDivider key={"trasnactions_" + index.toString()} />]) }

                                                          </View> }

                        </View>

                    </View>

                </View>

            </ScrollView>

        </SafeAreaView>

    );

};
