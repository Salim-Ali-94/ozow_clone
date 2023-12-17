import { View, Text, TextInput } from "react-native";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function InputText({ label, text, setText, focused, setFocused, numbers, balance, placeHolder }) {

  return (

    <View style={styles.container}>

      {/* { (!balance) ? <Text style={styles.label}>{label}</Text> :
                     <Text style={{ fontFamily: "poppins_medium", fontSize: 16, color: "#000" }}>Balance: <Text style={{ fontFamily: "poppins_semi_bold" }}>R{balance.toFixed(2)}</Text></Text> } */}
{/* 
      { (balance) ? <Text style={{ fontFamily: "poppins_medium", fontSize: 16, color: "#000" }}>Balance: <Text style={{ fontFamily: "poppins_semi_bold" }}>R{balance.toFixed(2)}</Text></Text> :
        (label) ? <Text style={styles.label}>{label}</Text> : null } */}

      { (balance && !label) ? <Text style={{ fontFamily: "poppins_medium", fontSize: 16, color: "#000" }}>Balance: <Text style={{ fontFamily: "poppins_semi_bold" }}>R{balance.toFixed(2)}</Text></Text> :
        (label && !balance) ? <Text style={styles.label}>{label}</Text> : (label && balance) && [<Text key={label + "_label"} style={styles.label}>{label}</Text>,
                                                                                                 <Text key={balance + "_balance"} style={{ fontFamily: "poppins_medium", fontSize: 16, color: "#000" }}>Balance: <Text style={{ fontFamily: "poppins_semi_bold" }}>R{balance.toFixed(2)}</Text></Text>] }

      <TextInput style={[styles.input, { borderColor: focused ? constants.primary : constants.secondary }]}
                 value={text}
                 placeholder={placeHolder ? placeHolder : ""}
                 onChangeText={(value) => setText(value)}
                 secureTextEntry={ label && label.includes("password") ? true : false}
                 keyboardType={ numbers ? "numeric" : "default" }
                 onFocus={() => setFocused(true)}
                 onBlur={() => setFocused(false)} />

    </View>

  );

}
