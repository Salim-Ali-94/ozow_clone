import { View, Text, TextInput } from "react-native";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function InputText({ label, text, setText, focused, setFocused, numbers, balance }) {

  return (

    <View style={styles.container}>

      { (!balance) ? <Text style={styles.label}>{label}</Text> :
                     <Text style={{ fontFamily: "poppins_medium", fontSize: 16, color: "#000" }}>Balance: <Text style={{ fontFamily: "poppins_semi_bold" }}>R{balance.toFixed(2)}</Text></Text> }

      <TextInput style={[styles.input, { borderColor: focused ? constants.primary : constants.secondary }]}
                 value={text}
                 onChangeText={(value) => setText(value)}
                 secureTextEntry={ label && label.includes("password") ? true : false}
                 keyboardType={ numbers ? "numeric" : "default" }
                 onFocus={() => setFocused(true)}
                 onBlur={() => setFocused(false)} />

    </View>

  );

}
