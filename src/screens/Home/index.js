import { View, Text, SafeAreaView, ScrollView, StatusBar, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import PocketBalanceCard from "../../components/PocketBalanceCard";
import ActionCard from "../../components/ActionCard";
import TransactionBox from "../../components/TransactionBox";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function Home() {

  const navigation = useNavigation();

  return (

    <SafeAreaView style={{ backgroundColor: constants.background, flex: 1 }}>

      <ScrollView showsVerticalScrollIndicator={false} bounces={true}>

          <LinearGradient colors={[constants.primary, constants.secondary]} 
                          style={{ flex: 1 }}
                          start={{ x: 0, y: 0.5 }}
                          end={{ x: 1, y: 0.5 }}>

             <StatusBar translucent={true} backgroundColor={"transparent"} />

          </LinearGradient >

          <View style={styles.section}>

            <Text style={[styles.sectionText, { marginBottom: 20 }]}>Overview</Text>

            <View style={styles.centerAlign}>

              <PocketBalanceCard amount={1234567890.09876}
                                 shadow={true}
                                 key={"home_pocket_balance_card"} />

            </View>

          </View>

          <View style={styles.section}>

            <Text style={[styles.sectionText, { marginBottom: 20 }]}>Quick actions</Text>

            <FlatList horizontal={true}
                      overScrollMode="never"
                      data={constants.actions}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({ item, index }) => (<ActionCard category={item.category}
                                                                    icon={item.icon}
                                                                    // pressAction={() => { item.route && constants.tabBarRef?.current?.setVisible(false);
                                                                    //                                    navigation.navigate(item.route); }}
                                                                    pressAction={() => { if (item.route) { constants.tabBarRef?.current?.setVisible(false);
                                                                                                           navigation.navigate(item.route); } }}
                                                                    left_gap={(index === 0) ? 20 : 10}
                                                                    right_gap={(index === constants.actions.length - 1) ? 20 : 0}
                                                                    key={"home_" + item.id} />)} />

          </View>

          <View style={[styles.section, { marginBottom: 80 }]}>

            <Text style={[styles.sectionText, { marginBottom: 20 }]}>Transaction summary</Text>

            <View style={styles.centerAlign}>

              <TransactionBox key={"home_transaction_box"} />

            </View>

          </View>

      </ScrollView>

    </SafeAreaView>

  );

}
