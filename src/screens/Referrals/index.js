import { View, SafeAreaView, ScrollView, StatusBar, FlatList } from "react-native";
import InfoCard from "../../components/InfoCard";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function Referrals() {

  return (

    <SafeAreaView style={{ backgroundColor: constants.background, flex: 1 }}>

      <ScrollView showsVerticalScrollIndicator={false} bounces={true}>

        <StatusBar translucent={true} backgroundColor={"transparent"} />

        <View style={{ marginTop: 30 }}>

            <View style={styles.centerAlign}>

                <FlatList data={constants.info}
                          scrollEnabled={false}
                          numColumns={2}
                          showsVerticalScrollIndicator={false}
                          columnWrapperStyle={{ gap: 10, paddingTop: 5, paddingBottom: 5 }}
                          contentContainerStyle={{ gap: 10, paddingLeft: 5, paddingRight: 5 }}
                          renderItem={({ item }) => <InfoCard icon={item.icon}
                                                              info={item.info}
                                                              category={item.category}
                                                              key={item.id} />} />

            </View>

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
