import { View, Text, SafeAreaView, StatusBar, Pressable, Image, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useContext, useState } from "react";
import { restClient } from "@polygon.io/client-js";
import axios from "axios";
import * as simple_icons from "simple-icons";
import EquityCard from "../../components/EquityCard";
import SearchInput from "../../components/SearchInput";
import * as constants from "../../utility/constants";
import * as utility from "../../utility/utility";
import { screenContext } from "../../providers/screenContext";
import { styles } from "./styles";
import { POLYGON_KEY, NINJA_API_KEY, NINJA_API_ENDPOINT, LOGO_URL } from "@env";


export default function StockMarket() {

    const polygon = restClient(POLYGON_KEY);
    const { user } = useContext(screenContext)
    const [searchQuery, setSearchQuery] = useState("");
    // const [filteredData, setFilteredData] = useState([{company: "tEslA", ticker: "TSLA",
    //                                                    data: [{value: 15}, {value: 30}, {value: 26}, {value: 40},{value: 20},{value: 18},{value: 40},{value: 36},{value: 60},{value: 54},{value: 104},{value: 85},{value: 10},{value: 18},{value: 58},{value: 56},{value: 78},{value: 74},{value: 13},{value: 98}]}]);
    const [filteredData, setFilteredData] = useState([]);

    const queryStock = async () => {

        console.log("searching...");
        console.log(searchQuery);

        for (const icon in simple_icons) {

            console.log("checking -->", icon);

            if (simple_icons[icon].title.toLowerCase().includes(searchQuery.toLowerCase())) {

                // var array = [];
                console.log(icon);
                const logo = simple_icons[icon];
                console.log(`Icon Name: ${logo.title}, SVG: ${logo.svg}`);
                // break;





                const response = await axios.get(NINJA_API_ENDPOINT + encodeURIComponent(logo.title),
                                                 { headers: { "X-Api-Key": NINJA_API_KEY } })
                                            
                                            // .then(result => {
                                                
                                            //     if (result.status === 200) {
                                                
                                            //         console.log(result.data);
                                                
                                            //     } else {
                                            
                                            //         console.log(`Error: ${result.status}`, result.data);
                                                
                                            //     }})

                                            // .catch(error => {

                                            //     console.error("Error:", error.message);

                                            // });


                console.log("data");
                console.log(response.data);
                // console.log(response.data.ticker);

                

                // polygon.stocks.aggregates("AAPL", 30, "minute", "2023-01-12", "2023-01-12").then((data) => {
                polygon.stocks.aggregates(response.data[0].ticker, 30, "minute", "2023-01-12", "2023-01-12").then((data) => {
                    console.log(data);

                    // for (price in data.results) {



                    // }


                    console.log(data.results[0])
                    console.log(data.results[0].c)
                    var array = data.results.map(element => ({ value: element.c }));
                    console.log("array");
                    console.log(array);
                    const svg = LOGO_URL + logo.title.toLowerCase() + ".svg";
                    console.log("svg");
                    console.log(svg);
    
    
    
    
    
    
                    setFilteredData([{ logo: svg,
                                       ticker: response.data[0].ticker,
                                       data: array }]);
    
                }).catch(e => {
                    console.error("An error happened:", e);
                });


                // for price in 


                // const svg = LOGO_URL + logo.title.toLowerCase() + ".svg";
                // console.log("svg");
                // console.log(svg);






                // setFilteredData([{ logo: svg,
                //                    ticker: response.data[0].ticker,
                //                    data: [] }]);

                


                break;



            }

        }

    }
  
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

                <View style={[styles.centerAlign, { flexDirection: "row", justifyContent: "center" }]}>

                    <SearchInput placeholder={"Search for stocks"}
                                //  onChangeText={searchAction}
                                onChangeText={(value) => utility.searchFilter([], value, setFilteredData, setSearchQuery)}
                                border
                                value={searchQuery}
                                key={"refer_search"} />

                    <Pressable style={{ borderRadius: 10, backgroundColor: constants.secondary, marginLeft: 5, width: "20%", height: 53.5, justifyContent: "center", alignItems: "center" }}
                                // onPress={() => console.log("search")}>
                                onPress={() => queryStock()}>

                        {/* <Text>Submit</Text> */}
                        <Image source={require("../../assets/icons/search.png")}
                                    style={{ width: 20, height: 20, tintColor: "#fff" }} />

                    </Pressable>

                </View>

            </View>

            <View>

                { (filteredData.length > 0) && <Text style={styles.sectionText}>Results</Text> }

                <View style={{alignItems: "center"}}>

                    {/* <EquityCard data={filteredData[0].data}
                                company={filteredData[0].company}
                                ticker={filteredData[0].ticker}
                                price={filteredData[0].data[filteredData[0].data.length - 1].value}
                                high={Math.max(...filteredData[0].data.map(price => price.value))}
                                low={Math.min(...filteredData[0].data.map(price => price.value))} /> */}

                    { (filteredData.length > 0) ? filteredData.map(item => <EquityCard data={item.data}
                                                           logo={item.logo}
                                                           //    company={item.company}
                                                           ticker={item.ticker}
                                                           key={item.ticker}
                                                           price={item.data[item.data.length - 1].value}
                                                        //    price={item.data[item.data.length - 1]}
                                                        //    gap={true}
                                                           high={Math.max(...item.data.map(price => price.value))}
                                                           low={Math.min(...item.data.map(price => price.value))} />) :
                                                        // high={Math.max(...item.data.map(price => price))}
                                                        // low={Math.min(...item.data.map(price => price))} />) :

                                                <View style={{justifyContent: "center", alignItems: "center"}}>

                                                <Image source={require("../../assets/icons/empty.png")}
                                                       style={{ width: 160, height: 160 }} />

                                                       <Text style={{fontFamily: "poppins_bold", color: "grey", fontSize: 18}}>No stocks match your query</Text>
                                                </View> }


                </View>

            </View>

            { (user.portfolio.length > 0) && <Text style={[styles.sectionText, { marginTop: 30 }]}>Your portfolio</Text> }

            </ScrollView>

        </SafeAreaView>

    );

}
