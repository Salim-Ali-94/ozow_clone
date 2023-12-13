import { View, Pressable, Text } from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { LineChart } from "react-native-gifted-charts";
import * as constants from "../../utility/constants";
import LinearGradient from "react-native-linear-gradient";
import { SvgUri } from "react-native-svg";
import PopUp from "../PopUp";
import styles from "./styles";


export default function EquityCard({ data, logo, ticker, price, high, low, gap }) {

    const user = useSelector(state => state.reducer_user.user);
    const [open, setOpen] = useState(false);
    const [shares, setShares] = useState("");

    return (

        <LinearGradient colors={[constants.secondary, constants.primary]} 
                        style={[styles.card, styles.boxShadow, gap && { marginBottom: gap }]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}>

            <Pressable onPress={() => setOpen(true) }>

                <View style={styles.detailsSection}>

                    <View style={styles.descriptionContainer}>

                        <View style={styles.logoBox}>

                            <SvgUri width={40}
                                    height={40}
                                    fill={"deeppink"}
                                    uri={logo} />

                        </View>

                        <Text style={styles.indicator}>{ticker.toUpperCase()}</Text>

                    </View>
                
                    <View style={styles.priceSection}>

                        <Text style={styles.currentPrice}>${price.toFixed(2)}</Text>
                        <Text style={styles.cash}>${high.toFixed(2)}</Text>
                        <Text style={styles.cash}>${low.toFixed(2)}</Text>

                    </View>

                </View>

            </Pressable>

            <LineChart curved
                       areaChart
                       showYAxisIndices={false}
                       hideYAxisText
                       hideDataPoints
                       hideAxesAndRules
                       data={data}
                       height={80}
                       thickness1={1.5}
                       color={"deeppink"}
                       startFillColor={"deeppink"}
                       startOpacity={0.5}
                       endFillColor={constants.secondary}
                       endOpacity={0} />

            <PopUp open={open}
                   setOpen={setOpen}
                   ticker={ticker}
                   balance={user.balance}
                   price={price}
                   low={low}
                   high={high}
                   shares={shares}
                   logo={logo}
                   setShares={setShares} />

        </LinearGradient>

    );

}
