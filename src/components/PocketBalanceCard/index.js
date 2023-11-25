import { View, Text } from "react-native";
import { styles } from "./styles";


export default function PocketBalanceCard() {

    return (

        <View style={styles.card}>

            <Text style={styles.headingText}>POKET BALANCE</Text>
            
            <View style={styles.balanceContainer}>

                <Text style={styles.valueText}>R0.0</Text>
                {/* <View style={styles.valueText}>{">"}</View> */}
                <Text style={styles.valueText}>{">"}</Text>

            </View>

            <Text style={styles.plainText}>Top up your pocket safely and securely.</Text>

        </View>

    );

}
