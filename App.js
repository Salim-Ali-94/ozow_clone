import { View, Text, SafeAreaView, ScrollView, StatusBar } from "react-native";
import PocketBalanceCard from "./src/components/PocketBalanceCard";
import ActionCard from "./src/components/ActionCard";
import { styles } from "./src/screens/Home/styles";


export default function App() {

  return (

    <SafeAreaView style={{ backgroundColor: "#ffffff", flex: 1 }}>

      <ScrollView showVerticalScrollIndicator={false}>

        <StatusBar backgroundColor="#ffffff"
                   barStyle="dark-content" />

          <View style={styles.overviewSection}>

            <Text style={[styles.sectionText, { marginBottom: 20 }]}>Overview</Text>

            <View style={styles.cardSection}>

              <PocketBalanceCard amount={1234567890.09876} />

            </View>

          </View>

          <View style={styles.overviewSection}>

            <Text style={[styles.sectionText, { marginBottom: 20 }]}>Quick actions</Text>

            {/* <View style={styles.cardSection}> */}
            <View style={{ marginLeft: "5%" }}>

              <ActionCard category="Get Paid"
                          icon={require("./src/assets/icons/cash.png")} />

            </View>

          </View>

      </ScrollView>

    </SafeAreaView>

  );

}
