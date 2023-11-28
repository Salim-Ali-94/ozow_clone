import { View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import * as constants from "../../utility/constants";


export default function GradientHeader({ heading }) {

    return (

        <LinearGradient colors={[constants.primary, constants.secondary]}
                        // style={{ height: 260, alignItems: "center", paddingTop: 30 }}
                        style={{ height: 260, alignItems: "center", paddingTop: 50 }}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}} >

          <View style={{ position: "absolute", right: -58, top: -100 }}>

            <Image source={require("../../assets/icons/ozow_white.png")}
                   style={{ width: 280, height: 280, tintColor: "rgba(255, 255, 255, 0.3)" }} />
          
          </View>

          <View style={{width: "80%"}}>

            <Text style={{fontSize: 32, fontFamily: "poppins_semi_bold", color: "#fff"}}>{heading}</Text>

          </View>

        </LinearGradient>

    );

}
