import { View, Pressable, Text } from "react-native";
import StatusIndicator from "../StatusIndicator";
import { styles } from "./styles";
import IconBox from "../IconBox";


export default function TransactionRow({ amount, status, direction }) {

    return (

        <Pressable style={styles.row}
                   onPress={() => console.log("clicked")}>

            <View style={styles.left}>

                <IconBox icon={require("../../assets/icons/burger.png")} />

                <View style={styles.info}>

                    <Text style={styles.dateText}>29 March 2022, 9:00</Text>
                    <Text style={[styles.priceText, { lineHeight: 18 }]}>Logan</Text>
                    <Text style={styles.dateText}>Into pocket</Text>

                </View>

            </View>

            <View style={styles.right}>

                <StatusIndicator status={status} />
                <Text style={styles.priceText}>{(direction.toLowerCase() === "into") ? "+" : "-"}R{amount.toFixed(2)}</Text>

            </View>

        </Pressable>

    );

}
