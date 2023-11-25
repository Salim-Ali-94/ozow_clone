import { View, Image, Text, Pressable } from "react-native";
import { styles } from "./styles";


export default function ActionCard({ category, icon }) {

    return (

        <Pressable style={styles.card}
                   onPress={() => alert("action card")}>

            <View style={styles.group}>

                <Image source={icon}
                    style={styles.image}/>

                <Text style={styles.text}>{category}</Text>

            </View>

        </Pressable>

    );

}
