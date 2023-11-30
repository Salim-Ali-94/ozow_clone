import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useContext } from "react";
import InputText from "../../components/InputText";
import DropDown from "../../components/DropDown";
import ContinueButton from "../../components/ContinueButton";
import * as constants from "../../utility/constants";
import { screenContext } from "../../providers/screenContext";
import { styles } from "./styles";

  
export default function BuyAirtime() {

    const navigation = useNavigation();
    const { balance, setBalance, setPrevious, setScreen, screen } = useContext(screenContext);
    const [amount, setAmount] = useState("");
    const [number, setNumber] = useState("");
    const [network, setNetwork] = useState(constants.networks[0].value);
    const [amountFocused, setAmountFocused] = useState(false);
    const [networkFocused, setNetworkFocused] = useState(false);
    const [numberFocused, setNumberFocused] = useState(false);

    return (

        <SafeAreaView style={styles.container}>

            <StatusBar translucent={true} backgroundColor={"transparent"} />

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
                                pressAction={() => { setBalance(balance - parseFloat(amount)); 
                                                     setPrevious(screen);
                                                     setScreen("Confirmation");
                                                     navigation.navigate("Confirmation", { animation: require("../../assets/animations/phone.json"),
                                                                                           header: "Fetching your airtime..." }); }} />

            </View>

        </SafeAreaView>

    );

}
