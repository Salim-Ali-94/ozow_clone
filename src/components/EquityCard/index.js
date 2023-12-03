import { View, Pressable, Image, Text } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import * as constants from "../../utility/constants";
import LinearGradient from "react-native-linear-gradient";
import { SvgUri } from "react-native-svg";
// import { styles } from "./styles";
import styles from "./styles";


export default function EquityCard({ data, company, ticker, price, high, low, gap }) {

    return (

        <LinearGradient colors={[constants.secondary, constants.primary]} 
                        style={[styles.card, styles.boxShadow, gap && { marginBottom: 10 }]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}>

            <Pressable onPress={() => console.log("click")}>

                <View style={styles.detailsSection}>

                    <View style={styles.descriptionContainer}>

                        <View style={styles.logoBox}>

                            <SvgUri width={40}
                                    height={40}
                                    fill={"deeppink"}
                                    uri={`https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/${company.toLowerCase()}.svg`} />

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
                    //    yAxisThickness={0}
                    //    xAxisThickness={0}
                       hideDataPoints
                       hideAxesAndRules
                       data={data}
                       height={80}
                       thickness1={1.5}
                       color={"deeppink"}
                    //    startFillColor={constants.secondary}
                       startFillColor={"deeppink"}
                       startOpacity={0.5}
                    //    endFillColor={constants.primary}
                       endFillColor={constants.secondary}
                       endOpacity={0} />

        </LinearGradient>

    );

}
