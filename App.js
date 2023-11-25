import { View, Text, SafeAreaView, ScrollView, StatusBar } from "react-native";
import PocketBalanceCard from "./src/components/PocketBalanceCard";


export default function App() {

  return (

    <SafeAreaView style={{ backgroundColor: "#ffffff", flex: 1 }}>

      <ScrollView showVerticalScrollIndicator={false}>

        <StatusBar backgroundColor="#ffffff"
                   barStyle="dark-content" />

          <View>

            <PocketBalanceCard amount={1234567890.09876} />

          </View>

      </ScrollView>

    </SafeAreaView>

  );

}
