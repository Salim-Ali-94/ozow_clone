import { View, TextInput, Image } from "react-native";
import { styles } from "./styles";


export default function SearchInput({ placeholder, onChangeText, value }) {

    return (

        <View style={styles.container}>

            <TextInput style={styles.input}
                       placeholder={placeholder}
                       onChangeText={onChangeText}
                       value={value}
                       placeholderTextColor="grey" />

            <View style={styles.searchImage}>

                <Image source={require("../../assets/icons/search.png")}
                       style={styles.icon} />

            </View>

        </View>

    );

};
