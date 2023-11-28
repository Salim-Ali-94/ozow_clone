import { View, Image, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function ActionCard({ category, icon, left_gap, right_gap, pressAction }) {

    return (

        <Pressable onPress={pressAction}>

            <LinearGradient colors={[constants.primary_blend1, constants.primary_blend2]} 
                            style={[styles.card, { marginLeft: left_gap, marginRight: right_gap, flex: 1 }]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}>

                <View style={styles.group}>

                    <Image source={icon}
                           style={styles.image}/>

                    <Text style={styles.text}>{category}</Text>

                </View>

            </LinearGradient>

        </Pressable>

    );

}
