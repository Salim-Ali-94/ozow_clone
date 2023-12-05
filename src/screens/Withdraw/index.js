import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import InputText from "../../components/InputText";
import DropDown from "../../components/DropDown";
import ContinueButton from "../../components/ContinueButton";
import * as constants from "../../utility/constants";
import { screenContext } from "../../providers/screenContext";
import { styles } from "./styles";
import { DB_ENDPOINT } from "@env";

  
export default function Withdraw() {

    const navigation = useNavigation();
    const { user, setUser, setPrevious, setScreen, screen, setOzow } = useContext(screenContext);
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

            <View style={[styles.bankSection, { marginTop: 30 }]}>

                <Text style={[styles.bankHeading, { lineHeight: 33 }]}>Withdraw from your pocket</Text>

            </View>

            <View style={styles.inputHolder}>

                <InputText balance={user.balance}
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

                <ContinueButton active={amount && (parseFloat(amount) > 0) && (parseFloat(amount) <= user.balance) && password && bank ? true : false}
                                pressAction={() => { 
                                                     //  setBalance(balance - parseFloat(amount)); 
                                                     setOzow(false);
                                                     setUser({...user, balance: user.balance - parseFloat(amount)});
                                                     axios.patch(DB_ENDPOINT + "updateBalance", { id: user.id, balance: user.balance - parseFloat(amount) });
                                                     setPrevious(screen);
                                                     setScreen("Confirmation");
                                                     navigation.navigate("Confirmation", { animation: require("../../assets/animations/authentication.json"),
                                                                                           header: "Authenticating your request..." }); }} />

            </View>

        </SafeAreaView>

    );

}
