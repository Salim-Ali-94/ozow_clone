import { SafeAreaView, ScrollView, StatusBar, View, Text } from "react-native";
import SearchInput from "../../components/SearchInput";
import EmptyTransactions from "../../components/EmptyTransactions";
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
