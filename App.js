import { SafeAreaView, ScrollView, StatusBar } from "react-native";


export default function App() {

  return (

    <SafeAreaView>

      <ScrollView showVerticalScrollIndicator={false}>

        <StatusBar backgroundColor="#ffffff"
                   barStyle="dark-content" />


      </ScrollView>

    </SafeAreaView>

  );

}
