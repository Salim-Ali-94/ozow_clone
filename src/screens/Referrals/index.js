import { View, Text, SafeAreaView, ScrollView, StatusBar, FlatList } from "react-native";
import InfoCard from "../../components/InfoCard";
import DetailsCard from "../../components/DetailsCard";
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

        <View style={styles.section}>

            <Text style={[styles.sectionText, { marginBottom: 10 }]}>Buy</Text>

            <View style={styles.centerAlign}>
            {/* <View style={[styles.centerAlign, { width: "90%" }]}> */}
            {/* <View style={{ marginLeft: "5%" }}> */}
            {/* <View style={{}}> */}

                <FlatList data={constants.details}
                          scrollEnabled={false}
                        //   numColumns={1}
                          showsVerticalScrollIndicator={false}
                        //   columnWrapperStyle={{ gap: 10, paddingTop: 5, paddingBottom: 5 }}
                        //   contentContainerStyle={{ gap: 10, paddingLeft: 5, paddingRight: 5 }}
                        //   contentContainerStyle={{ gap: 10, paddingBottom: 5, paddingTop: 5, paddingLeft: 5, flex: 1, alignItems: 'center', width: "90%" }}
                        // contentContainerStyle={{ gap: 10, paddingBottom: 5, paddingTop: 5, paddingLeft: 5, paddingRight: 5, flex: 1}}
                        // contentContainerStyle={{ gap: 10, justifyContent: "center", width: "90%"}}
                        // contentContainerStyle={{ gap: 10, alignItems: "center", width: "90%"}}
                        //   columnWrapperStyle={{ paddingTop: 5, paddingBottom: 5 }}
                          contentContainerStyle={{ gap: 10, paddingLeft: 5, paddingRight: 5, paddingBottom: 5, paddingTop: 5 }}
                          // contentContainerStyle={{ gap: 10 }}
                          renderItem={({ item }) => <DetailsCard category={item.category}
                                                                 details={item.details}
                                                                 icon={item.icon}
                                                                 iconSize={item.size}
                                                                 key={item.id} />} />

            </View>

        </View>

        {/* <View style={[styles.section, { marginBottom: 80 }]}> */}
        <View style={{ marginBottom: 120 }}>

            <Text style={[styles.sectionText, { marginBottom: 10 }]}>Trade</Text>

            <View style={styles.centerAlign}>

                <DetailsCard category={"Trade stocks"}
                            //  details={"Trade stocks and grow your portfolio from your pocket quicker and faster."}
                             details={"Trade stocks and grow your portfolio all from your pocket."}
                             icon={require("../../assets/icons/trading.png")}
                            //  textWidth={"95%"}
                             />

            </View>
            
        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
