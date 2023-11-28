import { View, Pressable, Text } from "react-native";
import StatusIndicator from "../StatusIndicator";
import IconBox from "../IconBox";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function TransactionRow({ amount, status, direction, name, date, category, screen }) {

    return (

        <Pressable style={styles.row}
                   onPress={() => console.log("clicked")}>

            <View style={styles.left}>

                <IconBox icon={constants.transactionIcons[category]} key={"transaction_row_icon_box_" + category + screen} />

                <View style={styles.info}>

                    <Text style={styles.dateText}>{date}</Text>
                    <Text style={[styles.priceText, { lineHeight: 19 }]}>{name}</Text>
                    <Text style={styles.dateText}>{direction[0].toUpperCase() + direction.slice(1)} pocket</Text>

                </View>

            </View>

            <View style={styles.right}>

                <StatusIndicator status={status} key={"transaction_row_status_indicator_" + category + screen} />
                <Text style={styles.priceText}>{(direction.toLowerCase() === "into") ? "+" : "-"}R{amount.toFixed(2)}</Text>

            </View>

        </Pressable>

    );

}
