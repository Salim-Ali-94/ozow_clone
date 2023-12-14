import { View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import EmptyTransactions from "../EmptyTransactions";
import TransactionRow from "../TransactionRow";
import HorizontalDivider from "../HorizontalDivider";
import { styles } from "./styles";


export default function TransactionBox() {

    const user = useSelector(state => state.reducer_user.user);
    const navigation = useNavigation();

    return (

        <View style={[styles.container, { height: (user.transactions.length > 0) && 450, paddingBottom: (user.transactions.length === 0) && 20 }]}>

            <View style={styles.header}>

                <Text style={styles.headingText}>LATEST</Text>

                <Pressable onPress={() => navigation.navigate("History")}
                            style={styles.expand}>

                    <Text style={[styles.headingText, { fontFamily: "poppins_semi_bold" }]}>See all</Text>

                    <Image source={require("../../assets/icons/arrow.png")}
                           style={styles.rightArrow} />

                </Pressable>

            </View>

            { (user.transactions.length === 0) ? <EmptyTransactions key={"transactions_box_empty"} /> :

                                                    <View style={styles.transactions}>

                                                        { user.transactions.slice(0, 4).map((item, index) => [<View style={styles.row}
                                                                                                                        key={"transactions_box_container_" + item.id}>

                                                                                                                        <TransactionRow amount={item.amount}
                                                                                                                                        status={item.status}
                                                                                                                                        direction={item.direction}
                                                                                                                                        reference={item.reference}
                                                                                                                                        category={item.category}
                                                                                                                                        date={item.date}
                                                                                                                                        screen={"home"}
                                                                                                                                        key={"transactions_box_" + item.id} />

                                                                                                                    </View>,

                                                                                                                    (index < 3) && <HorizontalDivider key={"transactions_box_" + index.toString()} />]) }

                                                    </View> }

        </View>

    );

}
