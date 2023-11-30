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

  
export default function Withdraw() {

    const navigation = useNavigation();
    const { balance, setBalance, setPrevious, setScreen, screen } = useContext(screenContext);
    const [amount, setAmount] = useState("");
    const [password, setPassword] = useState("");
    const [bank, setBank] = useState(constants.banks[0].value);
    const [amountFocused, setAmountFocused] = useState(false);
    const [bankFocused, setBankFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    return (

        <SafeAreaView style={styles.container}>

            <StatusBar translucent={true} backgroundColor={"transparent"} />

            <View style={[styles.bankSection, { marginTop: 30 }]}>

                <Text style={[styles.bankHeading, { lineHeight: 33 }]}>Withdraw from your pocket</Text>

            </View>

            <View style={styles.inputHolder}>

                {/* <InputText label={"Withdraw from your pocket"} */}
                {/* <InputText label={`Withdraw from your pocket\nBalance: ${balance}`} */}
                {/* <InputText label={""} */}
                <InputText balance={balance}
                           text={amount}
                           setText={setAmount}
                           focused={amountFocused}
                           numbers={true}
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

                <ContinueButton active={amount && (parseFloat(amount) > 0) && (parseFloat(amount) <= balance) && password && bank ? true : false}
                                pressAction={() => { setBalance(balance - parseFloat(amount)); 
                                                     setPrevious(screen);
                                                     setScreen("Confirmation");
                                                     navigation.navigate("Confirmation", { animation: require("../../assets/animations/authenticating.json"),
                                                                                           header: "Authenticating your request..." }); }} />

            </View>

        </SafeAreaView>

    );

}
