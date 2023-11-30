import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useContext } from "react";
import InputText from "../../components/InputText";
import ContinueButton from "../../components/ContinueButton";
import { screenContext } from "../../providers/screenContext";
import { styles } from "./styles";

  
export default function BuyElectricity() {

    const navigation = useNavigation();
    const { balance, setBalance, setPrevious, setScreen, screen } = useContext(screenContext);
    const [amount, setAmount] = useState("");
    const [number, setNumber] = useState("");
    const [amountFocused, setAmountFocused] = useState(false);
    const [numberFocused, setNumberFocused] = useState(false);

    return (

        <SafeAreaView style={styles.container}>

            <StatusBar translucent={true} backgroundColor={"transparent"} />

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

                <ContinueButton active={amount && (parseInt(amount) > 0) && number && (number.length === 9) ? true : false}
                                pressAction={() => { setBalance(balance - parseInt(amount) / 10); 
                                                     setPrevious(screen);
                                                     setScreen("Confirmation");
                                                     navigation.navigate("Confirmation", { animation: require("../../assets/animations/electricity.json"),
                                                                                           header: "Fetching units for your meter..." }); }} />

            </View>

        </SafeAreaView>

    );

}
