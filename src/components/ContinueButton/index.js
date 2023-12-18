import { Pressable, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";


export default function ContinueButton({ active, pressAction }) {

    return (

        <Pressable style={styles.container} onPress={() => active && pressAction()}>

            <LinearGradient style={styles.button}
                            colors={[`rgba(1, 225, 137, ${active ? 1 : '0.6'})`, `rgba(0, 187, 170, ${active ? 1 : '0.6'})`]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}>

                <Text style={styles.text}>Continue</Text>
                <Image style={styles.image}
                       source={require("../../assets/icons/next.png")} />

            </LinearGradient>

        </Pressable>

    );

}
