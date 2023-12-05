import { Alert, View, Text, SafeAreaView, ScrollView, StatusBar, FlatList } from "react-native";
// import { useContext, useEffect } from "react";
import { useContext } from "react";
// import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import PocketBalanceCard from "../../components/PocketBalanceCard";
import ActionCard from "../../components/ActionCard";
import TransactionBox from "../../components/TransactionBox";
import * as constants from "../../utility/constants";
import { screenContext } from "../../providers/screenContext";
import { styles } from "./styles";
// import { DB_ENDPOINT } from "@env";


export default function Home() {

  const { screen, setScreen, setPrevious, user } = useContext(screenContext)
  const navigation = useNavigation();

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false} bounces={true} keyboardShouldPersistTaps="handle">

          <LinearGradient colors={[constants.primary, constants.secondary]} 
                          style={styles.gradient}
                          start={{ x: 0, y: 0.5 }}
                          end={{ x: 1, y: 0.5 }}>

             <StatusBar translucent={true} backgroundColor={"transparent"} />

          </LinearGradient >

          <View style={styles.section}>

            <Text style={[styles.sectionText, { marginBottom: 20 }]}>Overview</Text>

            <View style={styles.centerAlign}>

              <PocketBalanceCard amount={user.balance}
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
                                                                    pressAction={() => { if (item.route) { constants.tabBarRef?.current?.setVisible(false);
                                                                                                           setPrevious(screen);
                                                                                                           setScreen(item.route);
                                                                                                           navigation.navigate(item.route); } else { Alert.alert(item.category, item.category + " feature coming soon") } }}
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
