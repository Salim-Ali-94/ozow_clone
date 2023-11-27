import { View, Text } from "react-native";
import { styles } from "./styles";


export default function FilterBox({ text, left_gap, right_gap }) {

    return (

        <View style={[styles.container, { marginLeft: left_gap, marginRight: right_gap }]}>

            <Text style={styles.text}>{text}</Text>

        </View>

    );

}
