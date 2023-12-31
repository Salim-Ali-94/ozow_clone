import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./styles";


export default function FilterBox({ text, left_gap, right_gap, arrow }) {

    return (

        <Pressable onPress={() => console.log(text)}
                   style={[styles.container, { marginLeft: left_gap, marginRight: right_gap }]}>

            <Text style={styles.text}>{text}</Text>

            { arrow && [<View style={styles.space} key="space" />,

                        <Image source={require("../../assets/icons/down.png")}
                               style={styles.downIcon}
                               key="down_icon" />] }

        </Pressable>

    );

}
