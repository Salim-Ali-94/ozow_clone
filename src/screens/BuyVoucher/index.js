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
import * as utility from "../../utility/utility";
import * as constants from "../../utility/constants";
import { styles } from "./styles";

  
export default function BuyData() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.reducer_user.user);
    const screen = useSelector(state => state.reducer_screen);
    const navigation = useNavigation();
    const [amount, setAmount] = useState("");
    const [number, setNumber] = useState("");
    const [network, setNetwork] = useState(constants.networks[0].value);
    const [amountFocused, setAmountFocused] = useState(false);
    const [networkFocused, setNetworkFocused] = useState(false);
    const [numberFocused, setNumberFocused] = useState(false);

    return (

        <SafeAreaView style={styles.container}>

            {/* <StatusBar translucent={true} backgroundColor={"transparent"} /> */}

            <LinearGradient colors={[constants.primary, constants.secondary]} 
                            style={styles.gradient}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}>

                <StatusBar translucent={true} backgroundColor={"transparent"} />

            </LinearGradient>

            <View style={styles.inputHolder}>

                <InputText label={"How much Uber credits?"}
                           text={amount}
                           setText={setAmount}
                           focused={amountFocused}
                           numbers={true}
                           balance={user.balance}
                           setFocused={setAmountFocused} />

            </View>

            {/* <View style={styles.networkSection}>

                <Text style={styles.networkHeading}>Select your network</Text>

            </View>

            <View style={[styles.inputHolder, {marginTop: 10}]}>
                
                <DropDown data={constants.networks}
                          focused={networkFocused}
                          setFocused={setNetworkFocused}
                          value={network}
                          placeHolder={"Vodacom"}
                          setValue={setNetwork} />

            </View> */}

            <View style={styles.inputHolder}>

                <InputText label={"Phone number"}
                           text={number}
                           numbers={true}
                           setText={setNumber}
                           focused={numberFocused}
                           setFocused={setNumberFocused} />

            </View>

            <View style={styles.bottom}>

                <ContinueButton active={amount && (parseFloat(amount) > 0) && (parseFloat(amount) <= user.balance) && number && (number.length === 10) ? true : false}
                                pressAction={() => { 
                                                        dispatch(toggleState(false));

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

                                                        dispatch(updateBalance(user.balance - parseFloat(amount)));
                                                        dispatch(storeTransaction({ direction: "from", reference: "Transport",
                                                                                    category: "transport",
                                                                                    amount: parseFloat(parseFloat(amount).toFixed(2)), date: formattedDateTime,
                                                                                    status: status, id: uuid }));
                                                        axios.patch(DB_ENDPOINT + "updateBalance", { id: user.id, balance: user.balance - parseFloat(amount) });                                                        
                                                        dispatch(previousScreen(screen.screen));
                                                        dispatch(currentScreen("Confirmation"));
                                                        navigation.navigate("Confirmation", { animation: require("../../assets/animations/travel.json"),
                                                                                              header: "Fetching your travel units..." }); }} />

            </View>

        </SafeAreaView>

    );

}
