import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./styles";


export default function FilterBox({ text, left_gap, right_gap }) {

    return (

        <Pressable onPress={() => console.log(text)}
                   style={[styles.container, { marginLeft: left_gap, marginRight: right_gap }]}>

            <Text style={styles.text}>{text}</Text>

            <View style={styles.space} />

            <Image source={require("../../assets/icons/down.png")}
                   style={styles.downIcon} />

        </Pressable>

    );

}
