import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import PocketBalanceCard from "./src/components/PocketBalanceCard";


export default function App() {

  return (

    <SafeAreaView style={{ backgroundColor: "#ffffff", flex: 1 }}>

      <ScrollView showVerticalScrollIndicator={false}>

        <StatusBar backgroundColor="#ffffff"
                   barStyle="dark-content" />

          <PocketBalanceCard />


      </ScrollView>

    </SafeAreaView>

  );

}
