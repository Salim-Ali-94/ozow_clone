import { View, Text, Image } from "react-native";
import { styles } from "./styles";


export default function Contact({ name, phone }) {

    return (

        <View style={styles.container}>

            <View style={styles.imageHolder}>

                <Image source={require("../../assets/icons/user.png")}
                       style={styles.image} />

            </View>

            <View>

                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.phoneText}>{phone}</Text>

            </View>

        </View>

    );

}