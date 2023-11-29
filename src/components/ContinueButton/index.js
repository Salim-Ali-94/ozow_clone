import { Pressable, Image, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";
import * as constants from "../../utility/constants";


export default function ContinueButton() {

    return (

        <Pressable style={styles.container} onPress={() => console.log("continue")}>

            <LinearGradient style={styles.button}
                            colors={[constants.primary_blend1, constants.primary_blend2]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}>

                <Text style={styles.text}>Continue</Text>
                <Image style={styles.image}
                       source={require("../../assets/icons/next.png")} />

            </LinearGradient>

        </Pressable>

    );

}
