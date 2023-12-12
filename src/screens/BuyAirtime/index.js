import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateBalance } from "../../providers/reducers/userReducer";
import { useState } from "react";
import InputText from "../../components/InputText";
import DropDown from "../../components/DropDown";
import ContinueButton from "../../components/ContinueButton";
import * as constants from "../../utility/constants";
import { styles } from "./styles";
import { DB_ENDPOINT } from "@env";
import { previousScreen, currentScreen } from "../../providers/reducers/screenReducer";
import { toggleState } from "../../providers/reducers/ozowReducer";

  
export default function BuyAirtime() {

    const dispatch = useDispatch();
    const customer = useSelector(state => state.reducer_user.user);
    const page = useSelector(state => state.reducer_screen);
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

            </LinearGradient >

            <View style={styles.inputHolder}>

                <InputText label={"How much airtime?"}
                           text={amount}
                           setText={setAmount}
                           focused={amountFocused}
                           numbers={true}
                           setFocused={setAmountFocused} />

            </View>

            <View style={styles.networkSection}>

                <Text style={styles.networkHeading}>Select your network</Text>

            </View>

            <View style={[styles.inputHolder, {marginTop: 10}]}>
                
                <DropDown data={constants.networks}
                          focused={networkFocused}
                          setFocused={setNetworkFocused}
                          value={network}
                          placeHolder={"Vodacom"}
                          setValue={setNetwork} />

            </View>

            <View style={styles.inputHolder}>

                <InputText label={"Phone number"}
                           text={number}
                           numbers={true}
                           setText={setNumber}
                           focused={numberFocused}
                           setFocused={setNumberFocused} />

            </View>

            <View style={styles.bottom}>

                <ContinueButton active={amount && (parseFloat(amount) > 0) && number && (number.length === 10) && network ? true : false}
                                pressAction={() => { 
                                                        dispatch(toggleState(false));
                                                        dispatch(updateBalance(customer.balance - parseFloat(amount)));
                                                        axios.patch(DB_ENDPOINT + "updateBalance", { id: customer.id, balance: customer.balance - parseFloat(amount) });
                                                        dispatch(previousScreen(page.screen));
                                                        dispatch(currentScreen("Confirmation"));
                                                        navigation.navigate("Confirmation", { animation: require("../../assets/animations/phone.json"),
                                                                                              header: "Fetching your airtime..." }); }} />

            </View>

        </SafeAreaView>

    );

}
