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

  
export default function TopUp() {

    const navigation = useNavigation();
    const { balance, setBalance, setPrevious, setScreen, previous, screen } = useContext(screenContext);
    const [amount, setAmount] = useState("");
    const [amountFocused, setAmountFocused] = useState(false);
    const [bank, setBank] = useState(constants.banks[0].value);
    const [bankFocused, setBankFocused] = useState(false);

    return (

        <SafeAreaView style={styles.container}>

            <StatusBar translucent={true} backgroundColor={"transparent"} />

            <View style={styles.inputHolder}>

                <InputText label={"Top up amount"}
                           text={amount}
                           setText={setAmount}
                           focused={amountFocused}
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
                          setValue={setBank} />
            </View>

            <View style={styles.bottom}>

                <ContinueButton active={amount && (parseInt(amount) > 0) && bank ? true : false}
                                pressAction={() => { setBalance(balance + parseInt(amount)); 
                                                    //  constants.tabBarRef?.current?.setVisible(true);
                                                     setPrevious(screen);
                                                     setScreen("Confirmation");
                                                     navigation.navigate("Confirmation", { animation: require("../../assets/animations/authenticating.json"),
                                                                                           header: "Authenticating your request..." }); }} />

            </View>

        </SafeAreaView>

    );

}
