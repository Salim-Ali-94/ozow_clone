import { View, Text, Image } from "react-native";
import styles from "./styles";


export default function PocketBalanceCard({ amount }) {

    return (

        <View style={[styles.card, styles.boxShadow]}>

            <Text style={styles.headingText}>POCKET BALANCE</Text>
            
            <View style={styles.balanceContainer}>

                <Text numberOfLines={1}
                      style={styles.valueText}>R{amount.toFixed(2)}</Text>

                <View style={styles.space} />

                <Image source={require("../../assets/icons/arrow.png")} style={styles.rightArrow} />

            </View>

            <Text style={styles.plainText}>Top up your pocket safely and securely.</Text>

        </View>

    );

}
