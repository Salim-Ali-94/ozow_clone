import { FlatList, View, Text, SafeAreaView, StatusBar, Pressable, Image, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import LottieView from "lottie-react-native";
import { useEffect, useContext, useState } from "react";
import { restClient } from "@polygon.io/client-js";
import axios from "axios";
import * as simple_icons from "simple-icons";
import EquityCard from "../../components/EquityCard";
import SearchInput from "../../components/SearchInput";
import CompanyBox from "../../components/CompanyBox";
import * as constants from "../../utility/constants";
import * as utility from "../../utility/utility";
import { screenContext } from "../../providers/screenContext";
import { styles } from "./styles";
import { POLYGON_KEY, NINJA_API_KEY, NINJA_API_ENDPOINT, LOGO_URL } from "@env";


export default function StockMarket() {

    const polygon = restClient(POLYGON_KEY);
    const { user } = useContext(screenContext);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [exit, setExit] = useState(false);

    useEffect(() => {

        if (loading) {

            setLoading(false);

        }

    }, [filteredData, exit]);

    const queryStock = async () => {

        for (const icon in simple_icons) {

            if (simple_icons[icon].hasOwnProperty("title")) {

                if (searchQuery.toLowerCase() === simple_icons[icon].title.toLowerCase()) {

                    const logo = simple_icons[icon];

                    if (!constants.whiteList.hasOwnProperty(logo.title.toLowerCase())) {

                        var response = await axios.get(NINJA_API_ENDPOINT + encodeURIComponent(logo.title),
                                                       { headers: { "X-Api-Key": NINJA_API_KEY } }).catch(error => console.log("error:", error));

                    } else {

                        var response = {data: []};

                    }

                    if ((response.data.length === 0) || (constants.whiteList.hasOwnProperty(logo.title.toLowerCase()))) {

                        if (constants.whiteList.hasOwnProperty(logo.title.toLowerCase())) {

                            response = constants.whiteList[logo.title.toLowerCase()];
    
                        } else {

                            setLoading(false);
                            return;

                        }

                    }

                    const today = new Date();
                    const previousWorkingDay = utility.previousWorkingDay(today);
    
                    polygon.stocks.aggregates(response.data[0].ticker, 30, "minute", previousWorkingDay, previousWorkingDay).then((data) => {
    
                        var array = data.results.map(element => ({ value: element.c }));
                        const svg = LOGO_URL + logo.title.toLowerCase() + ".svg";

                        setFilteredData([{ logo: svg,
                                           ticker: response.data[0].ticker,
                                           data: array }]);

                        return;

                    }).catch(error => {

                        console.error("An error occured:", error);

                    });

                    return;

                }

            }

        }

        setTimeout(() => {
            
            setExit(!exit);

        }, 500);

    }
  
    return (

        <SafeAreaView style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}
                        bounces={true}
                        keyboardShouldPersistTaps="handle">
  
            <LinearGradient colors={[constants.primary, constants.secondary]} 
                            style={styles.gradient}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}>

                <StatusBar translucent={true} backgroundColor={"transparent"} />

            </LinearGradient>

            <View style={styles.headingSection}>

                <View style={styles.heading}>

                    <Text style={[styles.sectionText, { paddingBottom: 20 }]}>Own shares in top companies<Image source={require("../../assets/icons/hot.png")}
                                                                                                                style={styles.fireIcon} /></Text>

                </View>

                <View style={[styles.centerAlign, { flexDirection: "row", justifyContent: "center" }]}>

                    <SearchInput placeholder={"Search for stocks"}
                                 onChangeText={value => utility.searchFilter([], value, setFilteredData, setSearchQuery, "ticker")}
                                 border
                                 value={searchQuery}
                                 key={"refer_search"} />

                    <Pressable style={styles.searchBox}
                               onPress={async () => { setLoading(true); await queryStock(); }}>

                        <Image source={require("../../assets/icons/search.png")}
                               style={styles.searchIcon} />

                    </Pressable>

                </View>

            </View>

            <View>

                { (filteredData.length > 0) && <Text style={styles.sectionText}>Results</Text> }

                <View style={styles.resultsSection}>

                    { loading ? <View style={{ alignItems: "center", justifyContent: "center" }}>

                                    <LottieView source={require("../../assets/animations/waiting.json")}
                                                style={styles.loader} autoPlay loop />

                                </View> :

                                ((filteredData.length > 0) && (filteredData[0].data.length > 0)) ? filteredData.map(item => <EquityCard data={item.data}
                                                                                                                                        logo={item.logo}
                                                                                                                                        ticker={(item.ticker === "X") ? "TWTR" : item.ticker}
                                                                                                                                        key={item.ticker}
                                                                                                                                        price={item.data[item.data.length - 1].value}
                                                                                                                                        high={Math.max(...item.data.map(price => price.value))}
                                                                                                                                        low={Math.min(...item.data.map(price => price.value))} />) :

                                <View style={styles.emptySection}>

                                    <Image source={require("../../assets/icons/empty.png")}
                                           style={styles.emptyIcon} />

                                    <Text style={styles.emptyText}>No stocks match your query</Text>

                                </View> }

                </View>

            </View>

            { (user.portfolio.length > 0) && <Text style={[styles.sectionText, { marginTop: 30 }]}>Your portfolio</Text> }

            { (user.portfolio.length > 0) && <FlatList horizontal={true}
                                                       data={user.portfolio}
                                                       showsHorizontalScrollIndicator={false}
                                                       renderItem={({ item, index }) => (<CompanyBox ticker={item.ticker}
                                                                                                     price={item.price}
                                                                                                     high={item.high}
                                                                                                     low={item.low}
                                                                                                     stocks={item.shares}
                                                                                                     logo={item.logo}
                                                                                                     gap_right={(index === user.portfolio.length - 1) ? 20 : 10}
                                                                                                     gap_left={(index === 0) && 20}
                                                                                                     key={item.ticker} />)} /> }

            </ScrollView>

        </SafeAreaView>

    );

}
