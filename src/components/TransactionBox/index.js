import { View, Text, Pressable, Image } from "react-native";
import EmptyTransactions from "../EmptyTransactions";
import { styles } from "./styles";


export default function TransactionBox() {

    return (

        <View style={styles.container}>

            <View style={styles.header}>

                <Text style={styles.headingText}>LATEST</Text>

                <Pressable onPress={() => console.log("see all")}
                            style={styles.expand}>

                    <Text style={[styles.headingText, { fontFamily: "poppins_semi_bold" }]}>See all</Text>

                    <View style={{ width: 5 }} />

                    <Image source={require("../../assets/icons/arrow.png")}
                           style={{ width: 12, height: 12, marginBottom: 2 }} />

                </Pressable>

            </View>

            <EmptyTransactions />

        </View>

    );

}
