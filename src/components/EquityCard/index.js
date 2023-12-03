import { View, Pressable, Image, Text } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import * as constants from "../../utility/constants";
import LinearGradient from "react-native-linear-gradient";
import {SvgUri} from "react-native-svg";


export default function EquityCard({ data }) {

    return (

        // <Pressable>

        <LinearGradient colors={[constants.secondary, constants.primary]} 
                        // style={{width: "90%", height: 180, borderRadius: 20, backgroundColor: "#000", justifyContent: "center", alignItems: "center", padding: 10 }}
                        // style={{width: "90%", height: 180, borderRadius: 20, padding: 10 }}
                        style={{overflow: "hidden", width: "90%", height: 220, borderRadius: 20, padding: 16 }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}>

<Pressable onPress={() => console.log("click")}>
<View style={{alignItems: "flex-start", flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{alignItems: "center", justifyContent: "center" }}>

                <View style={{width: 60, height: 60, borderRadius: 50, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>

                    {/* <Image source={{uri: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/lefd12553d6a4f7e57b3ac4f4927181d7a651d0d6.png"}} style={{width:50, height: 50}} /> */}
                        {/* <Image source={require("../../assets/icons/tsla.png")} style={{width:80, height: 80}} /> */}
                    {/* <Image source={{uri: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/lfc4548375734de4aa0151bef377e72b1708b5072.png"}} style={{width:50, height: 50}} /> */}
                    <SvgUri
                width={40}
                height={40}
                fill={"deeppink"}
                // color={"deeppink"}
                uri="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/twitter.svg"
            />
            </View>

              <Text style={{color: "#fff", fontFamily: "poppins_bold", fontSize: 24, }}>TWTR</Text>
        
            </View>
            
            <View style={{alignItems: "flex-end", marginBottom: 5 }}>
<View style={{margin: 0}}>
                <Text style={{color: "#fff", fontFamily: "poppins_bold", fontSize: 24, lineHeight: 27, padding: 0 }}>$103.45</Text>
                </View>
                <Text style={{color: "#fff", fontFamily: "poppins_semi_bold", fontSize: 18, padding: 0 }}>$105.63</Text>
                <Text style={{color: "#fff", fontFamily: "poppins_semi_bold", fontSize: 18, padding: 0 }}>$98.42</Text>

            </View>
            </View>
            </Pressable>
            {/* </View> */}
            <LineChart curved
                    areaChart
                    showYAxisIndices={false}
                    hideYAxisText
                    yAxisThickness={0}
                    xAxisThickness={0}
                    hideDataPoints
                    hideAxesAndRules
                    data={data}
                    // height={100}
                    height={80}
                    // height={65}
                    // height={"100%"}
                    // width={360}
                    thickness1={1.5}
                    // thickness1={1.25}
                    // color="rgb(46, 217, 255)"
                    // color={constants.cement}
                    // color={"#000"}
                    color={"deeppink"}
                    // color={"#fff"}
                    // startFillColor="rgb(46, 217, 255)"
                    // startFillColor="rgb(255, 255, 255)"
                    // startFillColor="rgb(0, 0, 0)"
                    // startFillColor="deeppink"
                    //    startFillColor={constants.primary_blend1}
                    //    startFillColor={constants.primary}
                       startFillColor={constants.secondary}
                    // start={0}
                    // end={0.1}
                    // edgePosition={}
                    startOpacity={0.5}
                    // endFillColor="rgb(203, 241, 250)"
                    // endFillColor="deeppink"
                    //    endFillColor={constants.primary_blend2}
                    //    endFillColor={constants.secondary}
                       endFillColor={constants.primary}
                    endOpacity={0} />
            {/* </Pressable> */}

        </LinearGradient>
        // </Pressable>
    );

}