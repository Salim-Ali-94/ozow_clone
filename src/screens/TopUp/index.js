import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import InputText from "../../components/InputText";
import DropDown from "../../components/DropDown";
import ContinueButton from "../../components/ContinueButton";
import { DB_ENDPOINT } from "@env";
import { updateBalance, storeTransaction } from "../../providers/reducers/userReducer";
import { previousScreen, currentScreen } from "../../providers/reducers/screenReducer";
import { toggleState } from "../../providers/reducers/ozowReducer";
import * as constants from "../../utility/constants";
import * as utility from "../../utility/utility";
import { styles } from "./styles";

  
export default function TopUp() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.reducer_user.user);
    const screen = useSelector(state => state.reducer_screen);
    const navigation = useNavigation();
    const [amount, setAmount] = useState("");
    const [password, setPassword] = useState("");
    const [bank, setBank] = useState(constants.banks[0].value);
    const [amountFocused, setAmountFocused] = useState(false);
    const [bankFocused, setBankFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    return (

        <SafeAreaView style={styles.container}>

            {/* <StatusBar translucent={true} backgroundColor={"transparent"} /> */}

            <LinearGradient colors={[constants.primary, constants.secondary]} 
                            style={styles.gradient}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}>

                <StatusBar translucent={true} backgroundColor={"transparent"} />

            </LinearGradient >

            <View style={styles.inputHolder}>

                <InputText label={"Top up amount"}
                           text={amount}
                           setText={setAmount}
                           focused={amountFocused}
                           numbers={true}
                           balance={user.balance}
                           setFocused={setAmountFocused} />

            </View>

            <View style={styles.bankSection}>

                <Text style={styles.bankHeading}>Select your bank</Text>

            </View>

            <View style={[styles.inputHolder, {marginTop: 10}]}>
                
                <DropDown data={constants.banks}
                          focused={bankFocused}
                          setFocused={setBankFocused}
                          value={bank}
                          placeHolder={"FNB"}
                          setValue={setBank} />

            </View>

            <View style={styles.inputHolder}>

                <InputText label={"Account password"}
                           text={password}
                           setText={setPassword}
                           focused={passwordFocused}
                           setFocused={setPasswordFocused} />

            </View>

            <View style={styles.bottom}>

                <ContinueButton active={amount && (parseFloat(amount) > 0) && password && bank ? true : false}
                                pressAction={() => { 
                                                        dispatch(toggleState(false));
                                                        
                                                        const uuid = utility.uuid(10);
                                                        const status = ["Received", "Failed", "Requested"][Math.floor(Math.random()*3)];
                                                        const currentDate = new Date();
                                                        const options = { day: "numeric",
                                                                          month: "long",
                                                                          year: "numeric",
                                                                          hour: "numeric",
                                                                          minute: "numeric",
                                                                          hour12: false };

                                                        const formattedDateTime = new Intl.DateTimeFormat("en-GB", options).format(currentDate);

                                                        
                                                        dispatch(updateBalance(parseFloat(user.balance + parseFloat(amount))));
                                                        dispatch(storeTransaction({ direction: "into", reference: "Top up",
                                                                                    category: "top_up",
                                                                                    amount: parseFloat(parseFloat(amount).toFixed(2)), date: formattedDateTime,
                                                                                    status: status, id: uuid }));

                                                        axios.patch(DB_ENDPOINT + "registerTransaction", { id: user.id, transaction: { direction: "into", reference: "Top up",
                                                                                                                                       category: "top_up",
                                                                                                                                       amount: parseFloat(parseFloat(amount).toFixed(2)), date: formattedDateTime,
                                                                                                                                       status: status, id: uuid }});

                                                        axios.patch(DB_ENDPOINT + "updateBalance", { id: user.id, balance: parseFloat(user.balance + parseFloat(amount))});

                                                        dispatch(previousScreen(screen.screen));
                                                        dispatch(currentScreen("Confirmation"));
                                                        navigation.navigate("Confirmation", { animation: require("../../assets/animations/authenticating.json"),
                                                                                              header: "Authenticating your request..." }); }} />

            </View>

        </SafeAreaView>

    );

}
