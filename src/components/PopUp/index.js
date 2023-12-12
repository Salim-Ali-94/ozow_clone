import { Alert, TextInput, View, Pressable, Image, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { updateBalance, addStock, updateShares, removeStock } from "../../providers/reducers/userReducer";
import axios from "axios";
import { styles } from "./styles";
import { DB_ENDPOINT } from "@env";
import { previousScreen, currentScreen } from "../../providers/reducers/screenReducer";
import { toggleState } from "../../providers/reducers/ozowReducer";


export default function PopUp({ open, setOpen, ticker, price, low, high, shares, setShares, logo, balance, stocks }) {

    const dispatch = useDispatch();
    const customer = useSelector(state => state.reducer_user.user);
    const page = useSelector(state => state.reducer_screen);
    const navigation = useNavigation();

    return (

        <Modal visible={open} onRequestClose={() => setOpen(false)} animationType="slide" transparent={true}>

            <View style={styles.overlay}>

                <View style={styles.card}>

                    <Pressable style={styles.x}
                               onPress={() => setOpen(false)}>

                        <View style={styles.xContainer}>

                            <Image source={require("../../assets/icons/x.png")}
                                   style={styles.xIcon} />

                        </View>

                    </Pressable>

                    <Text style={styles.text}>Company: <Text style={styles.boldText}>{ticker}</Text></Text>
                    <Text style={styles.text}>Price: $<Text style={styles.boldText}>{price.toFixed(2)}</Text></Text>
                    <Text style={styles.text}>{balance ? "Balance: $" : "Shares owned: "}<Text style={styles.boldText}>{balance ? balance.toFixed(2) : stocks}</Text></Text>
                    <Text style={[styles.actionText, { marginTop: 20 }]}>Number of shares to { balance ? "purchase" : "sell" }</Text>

                    <TextInput style={styles.input}
                               value={shares}
                               onChangeText={value => setShares(value)}
                               keyboardType={"numeric"} />

                    <Pressable onPress={balance ? () => { if ((parseFloat(shares) > 0) && (parseFloat(shares)*parseFloat(price) <= customer.balance)) {

                                                                dispatch(toggleState(false));

                                                                    if (customer.portfolio.filter(item => item.ticker === ticker).length === 0) {

                                                                    dispatch(updateBalance(customer.balance - parseFloat(shares)*parseFloat(price)));
                                                                    dispatch(addStock({ ticker: ticker, logo: logo, price: price, low: low, high: high, shares: parseFloat(shares) }));

                                                                    axios.patch(DB_ENDPOINT + "registerStock", { id: customer.id, stock: { ticker: ticker, logo: logo, price: price, low: low, high: high, shares: parseFloat(shares) }});

                                                                } else {

                                                                    dispatch(updateBalance(customer.balance - parseFloat(shares)*parseFloat(price)));
                                                                    dispatch(updateShares({ ticker: ticker, shares: customer.find(item => item.ticker === ticker).shares + parseFloat(shares) }));
                                                                    axios.patch(DB_ENDPOINT + "updateShares", { id: customer.id, ticker: ticker, shares: customer.portfolio.filter(item => item.ticker === ticker)[0].shares + parseFloat(shares) });

                                                                }

                                                                axios.patch(DB_ENDPOINT + "updateBalance", { id: customer.id, balance: customer.balance - parseFloat(shares)*parseFloat(price) });
                                                                dispatch(previousScreen(page.screen));
                                                                dispatch(currentScreen("Confirmation"));
                                                                setOpen(false);
                                                                navigation.navigate("Confirmation", { animation: require("../../assets/animations/ping.json"),
                                                                                                      header: "Processing your company stock trade..." }); } else { Alert.alert("You don't have enough funds to make this purchase"); } } : 

                                                () => {

                                                        if ((parseFloat(shares) > 0) && (parseFloat(shares) <= customer.portfolio.filter(element => element.ticker === ticker)[0].shares)) {

                                                            if (customer.portfolio.filter(item => item.ticker === ticker)[0].shares === parseFloat(shares)) {

                                                                dispatch(updateBalance(customer.balance + parseFloat(shares)*parseFloat(customer.portfolio.find(element => element.ticker === ticker).price)));
                                                                dispatch(removeStock(ticker));
                                                                axios.patch(DB_ENDPOINT + "removeStock", { id: customer.id, ticker: ticker });

                                                            } else {

                                                                dispatch(updateBalance(customer.balance + parseFloat(shares)*parseFloat(customer.portfolio.find(element => element.ticker === ticker).price)));
                                                                dispatch(updateShares({ ticker: ticker, shares: customer.portfolio.find(item => item.ticker === ticker).shares - parseFloat(shares) }));
                                                                axios.patch(DB_ENDPOINT + "updateShares", { id: customer.id, ticker: ticker, shares: customer.portfolio.filter(item => item.ticker === ticker)[0].shares - parseFloat(shares) });

                                                            }
                        
                                                            setOpen(false);
                        
                                                        } else { Alert.alert("Insufficient shares", `You want to sell ${shares} shares, but you only own ${customer.portfolio.filter(element => element.ticker === ticker)[0].shares} ${ticker} stocks`) }

                                                    }

                                                }

                                                style={styles.button}>

                        <View style={styles.submit}>

                            <Text style={styles.actionText}>Submit</Text>

                        </View>

                    </Pressable>

                </View>

            </View>

        </Modal>

    );

}
