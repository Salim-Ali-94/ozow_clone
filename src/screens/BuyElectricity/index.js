import { View, SafeAreaView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateBalance } from "../../providers/reducers/userReducer";
import { useState } from "react";
import InputText from "../../components/InputText";
import ContinueButton from "../../components/ContinueButton";
import { styles } from "./styles";
import * as constants from "../../utility/constants";
import { DB_ENDPOINT } from "@env";
import { previousScreen, currentScreen } from "../../providers/reducers/screenReducer";
import { toggleState } from "../../providers/reducers/ozowReducer";

  
export default function BuyElectricity() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.reducer_user.user);
    const screen = useSelector(state => state.reducer_screen);
    const navigation = useNavigation();
    const [amount, setAmount] = useState("");
    const [number, setNumber] = useState("");
    const [amountFocused, setAmountFocused] = useState(false);
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

                <InputText label={"How many units?"}
                           text={amount}
                           setText={setAmount}
                           focused={amountFocused}
                           numbers={true}
                           setFocused={setAmountFocused} />

            </View>

            <View style={styles.inputHolder}>

                <InputText label={"Meter number"}
                           text={number}
                           numbers={true}
                           setText={setNumber}
                           focused={numberFocused}
                           setFocused={setNumberFocused} />

            </View>

            <View style={styles.bottom}>

                <ContinueButton active={amount && (parseFloat(amount) > 0) && number && (number.length === 9) ? true : false}
                                pressAction={ () => { 
                                                        dispatch(toggleState(false));
                                                        dispatch(updateBalance(user.balance - parseFloat(amount) / 10));
                                                        axios.patch(DB_ENDPOINT + "updateBalance", { id: user.id, balance: user.balance - parseFloat(amount) / 10 });
                                                        dispatch(previousScreen(screen.screen));
                                                        dispatch(currentScreen("Confirmation"));
                                                        navigation.navigate("Confirmation", { animation: require("../../assets/animations/electricity.json"),
                                                                                              header: "Fetching units for your meter..." }); }} />

            </View>

        </SafeAreaView>

    );

}
