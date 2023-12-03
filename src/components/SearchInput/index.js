import { View, TextInput, Image } from "react-native";
import { styles } from "./styles";
import * as constants from "../../utility/constants";


export default function SearchInput({ placeholder, onChangeText, value, border }) {

    return (

        <View style={[styles.container, { borderColor: border ? constants.primary : "grey" }]}>

            <TextInput style={styles.input}
                       placeholder={placeholder}
                       onChangeText={onChangeText}
                       value={value}
                       placeholderTextColor={border ? "#000" : "grey" } />

            <View style={styles.searchImage}>

                <Image source={require("../../assets/icons/search.png")}
                       style={styles.icon} />

            </View>

        </View>

    );

}
