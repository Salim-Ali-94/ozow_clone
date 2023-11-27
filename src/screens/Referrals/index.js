import { View, Text, SafeAreaView, ScrollView, StatusBar, FlatList } from "react-native";
import InfoCard from "../../components/InfoCard";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function Referrals() {

  return (

    <SafeAreaView style={{ backgroundColor: constants.background, flex: 1 }}>

      <ScrollView showsVerticalScrollIndicator={false} bounces={true}>

        <StatusBar translucent={true} backgroundColor={"transparent"} />
{/* 
        <View style={{ paddingBottom: 80, paddingTop: 30,  }}>

            <View style={[styles.centerAlign, {paddingBottom: 80, paddingTop: 30, }]}>

                <FlatList data={constants.info}
                        scrollEnabled={false}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        columnWrapperStyle={{ gap: 10 }}
                        contentContainerStyle={{ gap: 20 }}
                        renderItem={({ item }) => <InfoCard icon={item.icon}
                                                            info={item.info}
                                                            category={item.category}
                                                            key={item.id} />} />

            </View>

        </View> */}





{/* 
<View style={{marginTop: 30}}>

<View style={{flexDirection: "row"}}>

            <InfoCard category={constants.info[0].category}
                      icon={constants.info[0].icon}
                      info={constants.info[0].info} />

<InfoCard category={constants.info[1].category}
                      icon={constants.info[1].icon}
                      info={constants.info[1].info} />
</View>
<View style={{flexDirection: "row"}}>
<InfoCard category={constants.info[2].category}
                      icon={constants.info[2].icon}
                      info={constants.info[2].info} />

<InfoCard category={constants.info[3].category}
                      icon={constants.info[3].icon}
                      info={constants.info[3].info} />

</View>
</View> */}


<View style={{marginTop: 30}}>
<View style={styles.centerAlign}>
<FlatList data={constants.info}
                        scrollEnabled={false}
                        // contentContainerStyle={{paddingTop: 30, paddingBottom: 30}}
                        // contentContainerStyle={{padding: 5}}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        // columnWrapperStyle={{ gap: 10 }}
                        // contentContainerStyle={{ gap: 20 }}
                        columnWrapperStyle={{ gap: 10, paddingTop: 5, paddingBottom: 5 }}
                        contentContainerStyle={{ gap: 10, paddingLeft: 5, paddingRight: 5 }}
                        renderItem={({ item }) => <InfoCard icon={item.icon}
                                                            info={item.info}
                                                            category={item.category}
                                                            key={item.id} />} />

</View>
</View>


{/* <InfoCard category={"Top up"}
                      icon={require("../../assets/icons/plus.png")}
                      info={"your pocket safely and securely"} /> */}

        {/* <Text>BOTTOM SECTION</Text> */}

      </ScrollView>

    </SafeAreaView>

  );

}
