import { View, Text } from "react-native";
import { styles } from "./styles";
import * as constants from "../../utility/constants";


export default function StatusIndicator({ status }) {

    return (

        <View style={[styles.container, { borderColor: ((status.toLowerCase() === "received") | (status.toLowerCase() === "paid")) ? constants.primary : (status.toLowerCase() === "pending") ? constants.nartjie : constants.cherry, borderWidth: 1.5 }]}>

            <Text style={[styles.text, { color: ((status.toLowerCase() === "received") | (status.toLowerCase() === "paid")) ? constants.primary : (status.toLowerCase() === "pending") ? constants.nartjie : constants.cherry }]}>{status}</Text>

        </View>

    );

}
