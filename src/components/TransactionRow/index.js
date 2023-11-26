import { View, Pressable, Text } from "react-native";
import StatusIndicator from "../StatusIndicator";
import { styles } from "./styles";


export default function TransactionRow({ amount, status, direction }) {

    return (

        <Pressable style={styles.row}
                   onPress={() => console.log("clicked")}>

            <View style={styles.left}>


            </View>

            <View style={styles.right}>

                <StatusIndicator status={status} />
                <Text style={styles.priceText}>{(direction.toLowerCase() === "into") ? "+" : "-"}R{amount.toFixed(2)}</Text>

            </View>

        </Pressable>

    );

}
