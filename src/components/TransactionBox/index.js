import { View, Text, Pressable, Image } from "react-native";
// import EmptyTransactions from "../EmptyTransactions";
import TransactionRow from "../TransactionRow";
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

            {/* <EmptyTransactions /> */}

            <View style={styles.transactions}>

                <TransactionRow amount={350}
                                status={"Received"}
                                direction={"into"}
                                name={"Logan"}
                                category={"fast_food"}
                                date={"29 March 2022, 9:00"} />

                <TransactionRow amount={150}
                                status={"Pending"}
                                direction={"from"}
                                name={"Scott"}
                                category={"sushi"}
                                date={"30 February 2023, 8:23"} />

                <TransactionRow amount={53.6}
                                status={"Paid"}
                                direction={"into"}
                                name={"Tony"}
                                category={"coffee"}
                                date={"28 April 2021, 13:06"} />

                <TransactionRow amount={107.897}
                                status={"Failed"}
                                direction={"from"}
                                name={"Steve"}
                                category={"burger"}
                                date={"13 October 2024, 18:53"} />

            </View>

        </View>

    );

}
