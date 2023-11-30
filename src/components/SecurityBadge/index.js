import { View, Text, Image } from "react-native";
import { styles } from "./styles";


export default function SecurityBadge() {

    return (

        <View style={styles.badge}>

            <Image source={require("../../assets/icons/shield.png")}
                   style={styles.image} />

            <Text style={styles.text}>Secure TLS Encryption</Text>

        </View>

    );

}
