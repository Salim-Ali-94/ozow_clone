import { View, Text, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { useState } from "react";
import { useContext } from "react";
import InputText from "../../components/InputText";
import DropDown from "../../components/DropDown";
import ContinueButton from "../../components/ContinueButton";
import * as constants from "../../utility/constants";
import { screenContext } from "../../providers/screenContext";
import { styles } from "./styles";

  
export default function TopUp() {

    const { setBalance } = useContext(screenContext);
    const [amount, setAmount] = useState("");
    const [amountFocused, setAmountFocused] = useState(false);
    const [bank, setBank] = useState(constants.banks[0].value);
    const [bankFocused, setBankFocused] = useState(false);

    return (

        <SafeAreaView style={styles.container}>

            {/* <ScrollView showsVerticalScrollIndicator={false} bounces={true}> */}

                <StatusBar translucent={true} backgroundColor={"transparent"} />

                <View style={styles.inputHolder}>

                    <InputText label={"Top up amount"}
                               text={amount}
                               setText={setAmount}
                               focused={amountFocused}
                               setFocused={setAmountFocused} />

                </View>

                <View style={{marginTop: 30, marginLeft: "5%"}}>

                    <Text style={{ fontFamily: "poppins_bold", color: constants.primary, fontSize: 24, lineHeight: 25, marginBottom: 0 }}>Select your bank</Text>

                </View>

                <View style={[styles.inputHolder, {marginTop: 10}]}>
                    
                    <DropDown data={constants.banks}
                              focused={bankFocused}
                              setFocused={setBankFocused}
                              value={bank}
                              setValue={setBank} />
                </View>

                <View style={styles.bottom}>

                    <ContinueButton />

                </View>

            {/* </ScrollView> */}

        </SafeAreaView>

    );

}
