import { View, Text, SafeAreaView, ScrollView, StatusBar, FlatList } from "react-native";
import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import PocketBalanceCard from "../../components/PocketBalanceCard";
import ActionCard from "../../components/ActionCard";
import TransactionBox from "../../components/TransactionBox";
import * as utility from "../../utility/utility";
import * as constants from "../../utility/constants";
import { screenContext } from "../../providers/screenContext";
import { styles } from "./styles";
import { DB_ENDPOINT } from "@env";


export default function Home() {

  const { screen, setScreen, setPrevious, user } = useContext(screenContext)
  const navigation = useNavigation();

  
  const getData = async () => {

    // add user doc
    // axios.post(constants.endpoint + "storeUser", constants.user)
    //      .then(response => console.log(response))
    //      .catch(error => console.log("error:", error));


    // update balance

    // axios.patch(constants.endpoint + "updateBalance", { id: constants.user.id, balance: 987654321 })
    //      .then(response => console.log(response))
    //      .catch(error => console.log("error:", error));
  

    // get user
    // const salim = await axios.get(`${constants.endpoint}user/${"fnA3ik1q8PHN8daPjqQw"}`)
    //                          .then(response => console.log(response.data))
    //                          .catch(error => console.log("error:", error));
    
    // console.log(salim);



    // // add transaction
      //   axios.patch(constants.endpoint + "registerTransaction", {id: "fnA3ik1q8PHN8daPjqQw", transaction: {
      //     name: "Wayne",
      //     category: "transport",
      //     status: "Paid",
      //     direction: "from",
      //     date: "31 November 2025, 5:12",
      //     amount: 103.56,
      //     id: utility.uuid(10)
      // }})
      //     .then(response => console.log(response))
      //     .catch(error => console.log("error:", error));
      
    // const response = await axios.get(constants.endpoint);
    console.log(DB_ENDPOINT);
    const response = await axios.get(DB_ENDPOINT);
    console.log(response.data);

  }

  useEffect(() => {

    getData();

  }, []);

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false} bounces={true}>

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
