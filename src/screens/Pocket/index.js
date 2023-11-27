import { View, Text, SafeAreaView, ScrollView, StatusBar, FlatList, Image } from "react-native";
import PocketBalanceCard from "../../components/PocketBalanceCard";
import IconButton from "../../components/IconButton";
import EmptyTransactions from "../../components/EmptyTransactions";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function Pocket() {

  return (

    <SafeAreaView style={{ backgroundColor: constants.background, flex: 1 }}>

      <ScrollView showsVerticalScrollIndicator={false} bounces={true}>

          <StatusBar translucent={true} backgroundColor={"transparent"} />

          <View style={{ marginTop: 30 }}>

            <View style={styles.centerAlign}>

              <PocketBalanceCard amount={1234567890.09876}
                                 shadow={false}
                                 arrow={false} />

            </View>

          </View>

          <View style={{ marginTop: 50 }}>

            <View style={styles.centerAlign}>

                <FlatList data={constants.icons}
                          scrollEnabled={false}
                          numColumns={3}
                          showsVerticalScrollIndicator={false}
                          columnWrapperStyle={{ gap: 10 }}
                          contentContainerStyle={{ gap: 20 }}
                          renderItem={({ item }) => <IconButton icon={item.icon} 
                                                                category={item.category}/>} />

            </View>

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

}
