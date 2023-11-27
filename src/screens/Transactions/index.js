import { SafeAreaView, ScrollView, StatusBar, View, Text, FlatList } from "react-native";
import SearchInput from "../../components/SearchInput";
import EmptyTransactions from "../../components/EmptyTransactions";
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
                                 value={""} />

                </View>

                <View style={styles.horizontalSection}>

                    <FlatList horizontal={true}
                              overScrollMode="never"
                              data={["All time", "All transactions", "All services", "All statuses"]}
                              showsHorizontalScrollIndicator={false}
                              renderItem={({ item, index }) => (<FilterBox text={item}
                                                                           key={index}
                                                                           left_gap={(index === 0) ? 20 : 10}
                                                                           right_gap={(index === 4 - 1) ? 20 : 0} />)} />

                </View>

                <View style={[styles.section, { marginBottom: 80 }]}>

                    <Text style={[styles.sectionText, { marginBottom: 20 }]}>Latest Transactions</Text>

                    <View style={styles.centerAlign}>

                        <EmptyTransactions />

                    </View>

                </View>

            </ScrollView>

        </SafeAreaView>

    );

};
