import { View, Pressable } from "react-native";
import StatusIndicator from "../StatusIndicator";
import { styles } from "./styles";


export default function TransactionRow() {

    return (

        <Pressable style={styles.row}
                   onPress={() => console.log("clicked")}>

            <View>

                <StatusIndicator status={"Paid"} />

            </View>

            <View>

                <StatusIndicator status={"Pending"} />
                
            </View>

        </Pressable>

    );

}
