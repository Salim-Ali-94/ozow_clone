import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";


export default function PocketBalanceCard({ amount, shadow, arrow }) {

    return (

        <Pressable style={[styles.card, shadow && styles.boxShadow]}
                    onPress={() => alert("pocket balance card")}>

            <Text style={styles.headingText}>POCKET BALANCE</Text>
            
            <View style={styles.balanceContainer}>

                <Text numberOfLines={1}
                      style={styles.valueText}
                      testID="pocket-balance-amount">R{amount.toFixed(2)}</Text>

                <View style={styles.space} />

                { arrow && <Image source={require("../../assets/icons/arrow.png")} style={styles.rightArrow} /> }

            </View>

            <Text style={styles.plainText}>Top up your pocket safely and securely.</Text>

        </Pressable>

    );

}
