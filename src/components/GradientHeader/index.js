import { View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function GradientHeader({ heading }) {

    return (

        <LinearGradient colors={[constants.primary, constants.secondary]}
                        // style={{ height: 260, alignItems: "center", paddingTop: 30 }}
                        style={styles.container}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}} >

          <View style={styles.imageHolder}>

            <Image source={require("../../assets/icons/ozow_white.png")}
                   style={styles.image} />
          
          </View>

          <View style={styles.textHolder}>

            <Text style={styles.header}>{heading}</Text>

          </View>

        </LinearGradient>

    );

}
