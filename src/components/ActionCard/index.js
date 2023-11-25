import { View, Image, Text, Pressable } from "react-native";
import { styles } from "./styles";


export default function ActionCard({ category, icon, left_gap, right_gap }) {

    return (

        <Pressable style={[styles.card, { marginLeft: left_gap, marginRight: right_gap }]}
                   onPress={() => alert(category + " card")}>

            <View style={styles.group}>

                <Image source={icon}
                    style={styles.image}/>

                <Text style={styles.text}>{category}</Text>

            </View>

        </Pressable>

    );

}
