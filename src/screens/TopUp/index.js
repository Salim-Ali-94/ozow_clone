import { View, Text, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { useState } from "react";
import { useContext } from "react";
import InputText from "../../components/InputText";
import * as constants from "../../utility/constants";
import { screenContext } from "../../providers/screenContext";
import { styles } from "./styles";


export default function TopUp() {

    const { setBalance } = useContext(screenContext);
    const [text, setText] = useState("");
    const [focused, setFocused] = useState(false);

    return (

        <SafeAreaView style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false} bounces={true}>

                <StatusBar translucent={true} backgroundColor={"transparent"} />

                <View style={styles.inputHolder}>

                    <InputText label={"Top up amount"}
                               text={text}
                               setText={setText}
                               focused={focused}
                               setFocused={setFocused} />

                </View>

            </ScrollView>

        </SafeAreaView>

    );

}
