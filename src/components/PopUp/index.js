import { Alert, TextInput, View, Pressable, Image, Text, Modal } from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { styles } from "./styles";
import { screenContext } from "../../providers/screenContext";
import { DB_ENDPOINT } from "@env";


export default function PopUp({ open, setOpen, ticker, price, low, high, shares, setShares, logo, balance, stocks }) {

    const navigation = useNavigation();
    const { user, setUser, screen, setPrevious, setScreen, setOzow } = useContext(screenContext);

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

                                                                setOzow(false);

                                                                if (user.portfolio.filter(item => item.ticker === ticker).length === 0) {

                                                                    setUser({ ...user, balance: user.balance - parseFloat(shares)*parseFloat(price), portfolio: [{ ticker: ticker, logo: logo, price: price, low: low, high: high, shares: parseFloat(shares) }, ...user.portfolio] });
                                                                    axios.patch(DB_ENDPOINT + "registerStock", { id: user.id, stock: { ticker: ticker, logo: logo, price: price, low: low, high: high, shares: parseFloat(shares) }});

                                                                } else {

                                                                    setUser({ ...user, balance: user.balance - parseFloat(shares)*parseFloat(price), portfolio: user.portfolio.map(item => { if (item.ticker === ticker) {

                                                                                                return {

                                                                                                    ...item,
                                                                                                    shares: item.shares + parseFloat(shares)
                                                                                                };
                                                                                            }

                                                                                            return item; })});

                                                                    axios.patch(DB_ENDPOINT + "updateShares", { id: user.id, ticker: ticker, shares: user.portfolio.filter(item => item.ticker === ticker)[0].shares + parseFloat(shares) });

                                                                }

                                                                axios.patch(DB_ENDPOINT + "updateBalance", { id: user.id, balance: user.balance - parseFloat(shares)*parseFloat(price) });
                                                                setPrevious(screen);
                                                                setScreen("Confirmation");
                                                                setOpen(false);
                                                                navigation.navigate("Confirmation", { animation: require("../../assets/animations/ping.json"),
                                                                                                      header: "Processing your company stock trade..." }); } else { Alert.alert("You don't have enough funds to make this purchase"); } } : 

                                                () => {

                                                        if ((parseFloat(shares) > 0) && (parseFloat(shares) <= user.portfolio.filter(element => element.ticker === ticker)[0].shares)) {
                    
                    
                                                            if (user.portfolio.filter(item => item.ticker === ticker)[0].shares === parseFloat(shares)) {
                        
                                                                setUser({ ...user,
                                                                          balance: user.balance + parseFloat(shares)*parseFloat(user.portfolio.filter(element => element.ticker === ticker)[0].price), 
                                                                          portfolio: user.portfolio.filter(item => item.ticker !== ticker) });

                                                                axios.patch(DB_ENDPOINT + "removeStock", { id: user.id, ticker: ticker });

                                                            } else {
                        
                                                                setUser({ ...user,
                                                                          balance: user.balance + parseFloat(shares)*parseFloat(user.portfolio.filter(element => element.ticker === ticker)[0].price),
                                                                          portfolio: user.portfolio.map(item => { if (item.ticker === ticker) { return { ...item,
                                                                                                                                                         shares: item.shares - parseFloat(shares) }; }

                                                                                                                  return item; }) });
                        
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
