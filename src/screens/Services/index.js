import { View, Text, SafeAreaView, ScrollView, StatusBar, FlatList, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import InfoCard from "../../components/InfoCard";
import DetailsCard from "../../components/DetailsCard";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function Services() {

  return (

    <SafeAreaView style={{ backgroundColor: constants.background, flex: 1 }}>

      <ScrollView showsVerticalScrollIndicator={false} bounces={true}>

        <StatusBar translucent={true} backgroundColor={"transparent"} />

        {/* <LinearGradient colors={[constants.primary, constants.secondary]}
                        style={{ height: 200}}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}} /> */}
        <LinearGradient colors={[constants.primary, constants.secondary]}
                        // style={{ height: 200, justifyContent: "center", alignItems: "center" }}
                        style={{ height: 260, alignItems: "center", paddingTop: 50 }}
                        // style={{ height: 300 }}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}} >

          {/* <Image source={require("../../assets/icons/ozow_white.png")}
                 style={{ width: 200, height: 200, tintColor: "rgba(255, 255, 255, 0.3)" }} /> */}

          <View style={{ position: "absolute", right: -58, top: -100 }}>

            <Image source={require("../../assets/icons/ozow_white.png")}
                  //  style={{ width: 300, height: 300, tintColor: "rgba(255, 255, 255, 0.3)" }} />
                   style={{ width: 280, height: 280, tintColor: "rgba(255, 255, 255, 0.3)" }} />
                  {/* //  style={{ width: "60%", tintColor: "rgba(255, 255, 255, 0.3)" }} /> */}
          
          </View>

          <View style={{width: "80%"}}>

            <Text style={{fontSize: 32, fontFamily: "poppins_semi_bold", color: "#fff"}}>What would you like to do?</Text>

          </View>

        </LinearGradient>

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

                {/* <FlatList data={constants.details}
                          scrollEnabled={false}
                          showsVerticalScrollIndicator={false}
                          contentContainerStyle={{ gap: 10, paddingLeft: 5, paddingRight: 5, paddingBottom: 5, paddingTop: 5 }}
                          renderItem={({ item }) => <DetailsCard category={item.category}
                                                                 details={item.details}
                                                                 icon={item.icon}
                                                                 iconSize={item.size}
                                                                 key={item.id} />} /> */}

                { constants.details.map((item, index) => <DetailsCard category={item.category}
                                                             details={item.details}
                                                             icon={item.icon}
                                                             iconSize={item.size}
                                                             gap={(index < constants.details.length - 1) ? 10 : 0}
                                                             key={item.id} />) }

            </View>

        </View>

        <View style={{ marginBottom: 120 }}>

            <Text style={[styles.sectionText, { marginBottom: 10 }]}>Trade</Text>

            <View style={styles.centerAlign}>

                <DetailsCard category={"Trade stocks"}
                             details={"Trade stocks and grow your portfolio all from your pocket."}
                             icon={require("../../assets/icons/trading.png")} />

            </View>
            
        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
