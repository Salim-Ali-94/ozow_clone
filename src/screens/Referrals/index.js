import { View, Text, SafeAreaView, ScrollView, StatusBar, FlatList } from "react-native";
import InfoCard from "../../components/InfoCard";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function Referrals() {

  return (

    <SafeAreaView style={{ backgroundColor: constants.background, flex: 1 }}>

      <ScrollView showsVerticalScrollIndicator={false} bounces={true}>

        <StatusBar translucent={true} backgroundColor={"transparent"} />

        <View style={styles.section}>

            <InfoCard category={"Top up"}
                      icon={require("../../assets/icons/plus.png")}
                      info={"your pocket safely and securely"} />

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
