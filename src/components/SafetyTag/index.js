import { View, Text } from "react-native";
import { styles } from "./styles";


export default function SafetyTag() {

    return (

        <View style={styles.container}>

            <Text style={styles.text}>Ozow is safe and <Text style={styles.highlight}>secure</Text></Text>

        </View>

    );

}
