import { View, Text, Pressable, Image } from "react-native";
import EmptyTransactions from "../EmptyTransactions";
import TransactionRow from "../TransactionRow";
import HorizontalDivider from "../HorizontalDivider";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function TransactionBox() {

    return (

        <View style={[styles.container, { height: (constants.data.length > 0) && 450, paddingBottom: (constants.data.length === 0) && 20 }]}>

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

            { (constants.data.length === 0) ? <EmptyTransactions /> :

                                              <View style={styles.transactions}>

                                                  { constants.data.slice(0, 4).map((item, index) => [<View style={{ paddingVertical: 20 }}>

                                                                                            <TransactionRow amount={item.amount}
                                                                                                            status={item.status}
                                                                                                            direction={item.direction}
                                                                                                            name={item.name}
                                                                                                            category={item.category}
                                                                                                            date={item.date}
                                                                                                            key={item.id} />

                                                                                        </View>,

                                                                                        (index < 3) && <HorizontalDivider />]) }

                                              </View> }

        </View>

    );

}
