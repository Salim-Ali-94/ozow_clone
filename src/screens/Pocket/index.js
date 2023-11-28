import { View, Text, SafeAreaView, ScrollView, StatusBar, FlatList, Image } from "react-native";
import PocketBalanceCard from "../../components/PocketBalanceCard";
import IconButton from "../../components/IconButton";
import EmptyTransactions from "../../components/EmptyTransactions";
import TransactionRow from "../../components/TransactionRow";
import HorizontalDivider from "../../components/HorizontalDivider";
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
                                                                category={item.category}
                                                                key={"pocket_" + item.id} />} />

            </View>

          </View>

          <View style={[styles.section, { marginBottom: 80 }]}>

            <Text style={[styles.sectionText, { marginBottom: 20 }]}>Latest Transactions</Text>

            <View style={styles.centerAlign}>

              <View style={{width: "90%"}}>

                { (constants.data.length === 0) ? <EmptyTransactions /> :

                                                  <View style={styles.transactions}>

                                                      { constants.data.map((item, index) => [<View style={{ paddingVertical: 20 }}>

                                                                                                <TransactionRow amount={item.amount}
                                                                                                                status={item.status}
                                                                                                                direction={item.direction}
                                                                                                                name={item.name}
                                                                                                                category={item.category}
                                                                                                                date={item.date}
                                                                                                                key={item.id} />

                                                                                            </View>,

                                                                                            (index < constants.data.length - 1) && <HorizontalDivider key={index} />]) }

                                                  </View> }

              </View>

            </View>

          </View>

      </ScrollView>

    </SafeAreaView>

  );

}
