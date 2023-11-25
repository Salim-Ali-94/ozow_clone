import { View, Text, SafeAreaView, ScrollView, StatusBar, FlatList } from "react-native";
import PocketBalanceCard from "./src/components/PocketBalanceCard";
import ActionCard from "./src/components/ActionCard";
import { styles } from "./src/screens/Home/styles";
import * as constants from "./src/utility/constants";


export default function App() {

  return (

    <SafeAreaView style={{ backgroundColor: "#ffffff", flex: 1 }}>

      <ScrollView showVerticalScrollIndicator={false}>

        <StatusBar backgroundColor="#ffffff"
                   barStyle="dark-content" />

          <View style={styles.section}>

            <Text style={[styles.sectionText, { marginBottom: 20 }]}>Overview</Text>

            <View style={styles.cardSection}>

              <PocketBalanceCard amount={1234567890.09876} />

            </View>

          </View>

          <View style={styles.section}>

            <Text style={[styles.sectionText, { marginBottom: 20 }]}>Quick actions</Text>

            <FlatList horizontal={true}
                      data={constants.actions}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({ item, index }) => (<ActionCard category={item.category}
                                                              icon={item.icon}
                                                              left_gap={(index == 0) ? 20 : 10}
                                                              right_gap={(index == constants.actions.length - 1) ? 20 : 0}
                                                              key={item.id} />)} />

          </View>

      </ScrollView>

    </SafeAreaView>

  );

}
