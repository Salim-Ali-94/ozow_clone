import { View, Text, TextInput } from "react-native";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function InputText({ label, text, setText, focused, setFocused }) {

  return (

    <View style={styles.container}>

      <Text style={styles.label}>{label}</Text>

      <TextInput style={[styles.input, { borderColor: focused ? constants.primary : constants.secondary }]}
                 value={text}
                 onChangeText={(value) => setText(value)}
                 keyboardType="numeric"
                 onFocus={() => setFocused(true)}
                 onBlur={() => setFocused(false)} />

    </View>

  );

};