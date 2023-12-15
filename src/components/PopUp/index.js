import { Alert, TextInput, View, Pressable, Image, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { styles } from "./styles";
import { DB_ENDPOINT } from "@env";
import { updateBalance, addStock, updateShares, removeStock, storeTransaction } from "../../providers/reducers/userReducer";
import { previousScreen, currentScreen } from "../../providers/reducers/screenReducer";
import { toggleState } from "../../providers/reducers/ozowReducer";
import * as utility from "../../utility/utility";


export default function PopUp({ open, setOpen, ticker, price, low, high, shares, setShares, logo, balance, stocks }) {

    const dispatch = useDispatch();
    const user = useSelector(state => state.reducer_user.user);
    const screen = useSelector(state => state.reducer_screen);
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

                    <Pressable onPress={balance ? () => { if ((parseFloat(shares) > 0) && (parseFloat(shares)*parseFloat(price) <= user.balance)) {

                                                                dispatch(toggleState(false));

                                                                    if (user.portfolio.filter(item => item.ticker === ticker).length === 0) {

                                                                        const uuid = utility.uuid(10);
                                                                        const status = ["Paid", "Failed", "Pending"][Math.floor(Math.random()*3)];
                                                                        const currentDate = new Date();
                                                                        const options = { day: "numeric",
                                                                                          month: "long",
                                                                                          year: "numeric",
                                                                                          hour: "numeric",
                                                                                          minute: "numeric",
                                                                                          hour12: false };
                
                                                                        const formattedDateTime = new Intl.DateTimeFormat("en-GB", options).format(currentDate);
                
                                                                        
                                                                        dispatch(updateBalance(user.balance - parseFloat(shares)*parseFloat(price)));
                                                                        dispatch(storeTransaction({ direction: "from", reference: ticker + " shares",
                                                                                                    category: "buy_shares",
                                                                                                    amount: parseFloat((parseFloat(shares)*parseFloat(price)).toFixed(2)), date: formattedDateTime,
                                                                                                    status: status, id: uuid }));
                                                                        dispatch(addStock({ ticker: ticker, logo: logo, price: price, low: low, high: high, shares: parseFloat(shares) }));

                                                                        axios.patch(DB_ENDPOINT + "registerStock", { id: user.id, stock: { ticker: ticker, logo: logo, price: price, low: low, high: high, shares: parseFloat(shares) }});

                                                                } else {

                                                                    const uuid = utility.uuid(10);
                                                                    const status = ["Paid", "Failed", "Pending"][Math.floor(Math.random()*3)];
                                                                    const currentDate = new Date();
                                                                    const options = { day: "numeric",
                                                                                      month: "long",
                                                                                      year: "numeric",
                                                                                      hour: "numeric",
                                                                                      minute: "numeric",
                                                                                      hour12: false };
            
                                                                    const formattedDateTime = new Intl.DateTimeFormat("en-GB", options).format(currentDate);
            
                                                                    
                                                                    dispatch(updateBalance(user.balance - parseFloat(shares)*parseFloat(price)));
                                                                    dispatch(storeTransaction({ direction: "from", reference: ticker + " shares",
                                                                                                category: "buy_shares",
                                                                                                amount: parseFloat((parseFloat(shares)*parseFloat(price)).toFixed(2)), date: formattedDateTime,
                                                                                                status: status, id: uuid }));
                                                                    dispatch(updateShares({ ticker: ticker, shares: user.portfolio.find(item => item.ticker === ticker).shares + parseFloat(shares) }));
                                                                    axios.patch(DB_ENDPOINT + "updateShares", { id: user.id, ticker: ticker, shares: user.portfolio.filter(item => item.ticker === ticker)[0].shares + parseFloat(shares) });

                                                                }

                                                                axios.patch(DB_ENDPOINT + "updateBalance", { id: user.id, balance: user.balance - parseFloat(shares)*parseFloat(price) });
                                                                dispatch(previousScreen(screen.screen));
                                                                dispatch(currentScreen("Confirmation"));
                                                                setOpen(false);
                                                                navigation.navigate("Confirmation", { animation: require("../../assets/animations/ping.json"),
                                                                                                      header: "Processing your company stock trade..." }); } else { Alert.alert("You don't have enough funds to make this purchase"); } } : 

                                                () => {

                                                        if ((parseFloat(shares) > 0) && (parseFloat(shares) <= user.portfolio.filter(element => element.ticker === ticker)[0].shares)) {

                                                            if (user.portfolio.filter(item => item.ticker === ticker)[0].shares === parseFloat(shares)) {

                                                                const uuid = utility.uuid(10);
                                                                const status = ["Received", "Failed", "Pending"][Math.floor(Math.random()*3)];
                                                                const currentDate = new Date();
                                                                const options = { day: "numeric",
                                                                                  month: "long",
                                                                                  year: "numeric",
                                                                                  hour: "numeric",
                                                                                  minute: "numeric",
                                                                                  hour12: false };
        
                                                                const formattedDateTime = new Intl.DateTimeFormat("en-GB", options).format(currentDate);

                                                                dispatch(updateBalance(user.balance + parseFloat(shares)*parseFloat(user.portfolio.find(element => element.ticker === ticker).price)));
                                                                dispatch(storeTransaction({ direction: "into", reference: ticker + " shares",
                                                                                            category: "sell_shares",
                                                                                            amount: parseFloat((parseFloat(shares)*parseFloat(user.portfolio.find(element => element.ticker === ticker).price)).toFixed(2)), date: formattedDateTime,
                                                                                            status: status, id: uuid }));
                                                                
                                                                dispatch(removeStock(ticker));
                                                                axios.patch(DB_ENDPOINT + "removeStock", { id: user.id, ticker: ticker });

                                                            } else {

                                                                const uuid = utility.uuid(10);
                                                                const status = ["Received", "Failed", "Pending"][Math.floor(Math.random()*3)];
                                                                const currentDate = new Date();
                                                                const options = { day: "numeric",
                                                                                  month: "long",
                                                                                  year: "numeric",
                                                                                  hour: "numeric",
                                                                                  minute: "numeric",
                                                                                  hour12: false };
        
                                                                const formattedDateTime = new Intl.DateTimeFormat("en-GB", options).format(currentDate);

                                                                
                                                                dispatch(updateBalance(user.balance + parseFloat(shares)*parseFloat(user.portfolio.find(element => element.ticker === ticker).price)));
                                                                dispatch(storeTransaction({ direction: "into", reference: ticker + " shares",
                                                                                            category: "sell_shares",
                                                                                            amount: parseFloat((parseFloat(shares)*parseFloat(user.portfolio.find(element => element.ticker === ticker).price)).toFixed(2)), date: formattedDateTime,
                                                                                            status: status, id: uuid }));
                                                                dispatch(updateShares({ ticker: ticker, shares: user.portfolio.find(item => item.ticker === ticker).shares - parseFloat(shares) }));
                                                                axios.patch(DB_ENDPOINT + "updateShares", { id: user.id, ticker: ticker, shares: user.portfolio.filter(item => item.ticker === ticker)[0].shares - parseFloat(shares) });

                                                            }
                        
                                                            setOpen(false);
                        
                                                        } else { Alert.alert("Insufficient shares", `You want to sell ${shares} shares, but you only own ${user.portfolio.filter(element => element.ticker === ticker)[0].shares} ${ticker} stocks`) }

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
