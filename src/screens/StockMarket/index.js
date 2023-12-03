import { View, Text, SafeAreaView, StatusBar, FlatList, Image, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useState } from "react";
import EquityCard from "../../components/EquityCard";
import SearchInput from "../../components/SearchInput";
import * as constants from "../../utility/constants";
import * as utility from "../../utility/utility";
import { styles } from "./styles";


export default function StockMarket() {

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([{company: "tEslA", ticker: "TSLA", data: [{value: 15}, {value: 30}, {value: 26}, {value: 40},{value: 20},{value: 18},{value: 40},{value: 36},{value: 60},{value: 54},{value: 104},{value: 85},{value: 10},{value: 18},{value: 58},{value: 56},{value: 78},{value: 74},{value: 13},{value: 98}]}]);
  
    return (

        <SafeAreaView style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
  
            {/* <StatusBar translucent={true} backgroundColor={"transparent"} /> */}

            <LinearGradient colors={[constants.primary, constants.secondary]} 
                            style={styles.gradient}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}>

                <StatusBar translucent={true} backgroundColor={"transparent"} />

            </LinearGradient>

            <View style={{ marginTop: 30, marginBottom: 10 }}>

                <View style={{flexDirection: "row"}}>

                    <Text style={[styles.sectionText, {paddingBottom: 20}]}>Own shares in top companies<Image source={require("../../assets/icons/hot.png")} style={{width: 40, height: 40}} /></Text>

                    {/* <Image source={require("../../assets/icons/hot.png")}
                           style={{ width: 50, height: 50}} /> */}
                
                </View>

                <View style={styles.centerAlign}>

                    <SearchInput placeholder={"Search for stocks"}
                                //  onChangeText={searchAction}
                                onChangeText={(value) => utility.searchFilter([], value, setFilteredData, setSearchQuery)}
                                border
                                value={searchQuery}
                                key={"refer_search"} />

                </View>

            </View>

            <View>

                <Text style={styles.sectionText}>Results</Text>

                <View style={{alignItems: "center"}}>

                    {/* <EquityCard data={filteredData[0].data}
                                company={filteredData[0].company}
                                ticker={filteredData[0].ticker}
                                price={filteredData[0].data[filteredData[0].data.length - 1].value}
                                high={Math.max(...filteredData[0].data.map(price => price.value))}
                                low={Math.min(...filteredData[0].data.map(price => price.value))} /> */}

                    { filteredData.map(item => <EquityCard data={item.data}
                                company={item.company}
                                ticker={item.ticker}
                                key={item.company}
                                price={item.data[item.data.length - 1].value}
                                high={Math.max(...item.data.map(price => price.value))}
                                low={Math.min(...item.data.map(price => price.value))} />) }


                </View>

            </View>

            <Text style={[styles.sectionText, { marginTop: 30 }]}>Your portfolio</Text>

            </ScrollView>

        </SafeAreaView>

    );

}
