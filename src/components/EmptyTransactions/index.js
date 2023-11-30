import { View, Text, Image } from "react-native";
import { styles } from "./styles";


export default function EmptyTransactions() {

    return (

        <View style={styles.container}>

            <Image source={require("../../assets/icons/box.png")}
                   style={styles.image} />

            <Text style={styles.text}>No transactions</Text>

        </View>

    );

}
