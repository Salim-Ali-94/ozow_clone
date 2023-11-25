import { View, Text, Image } from "react-native";
import styles from "./styles";


export default function PocketBalanceCard() {

    return (

        <View style={[styles.card, styles.boxShadow]}>

            <Text style={styles.headingText}>POKET BALANCE</Text>
            
            <View style={styles.balanceContainer}>

                <Text style={styles.valueText}>R0.00</Text>
                <Image source={require("../../assets/icons/arrow.png")} style={styles.rightArrow} />

            </View>

            <Text style={styles.plainText}>Top up your pocket safely and securely.</Text>

        </View>

    );

}
