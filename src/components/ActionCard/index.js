import { View, Image, Text } from "react-native";
import { styles } from "./styles";


export default function ActionCard({ category, icon }) {

    return (

        <View style={styles.card}>

            <View style={styles.group}>

                <Image source={icon}
                    style={styles.image}/>

                <Text style={styles.text}>{category}</Text>

            </View>

        </View>

    );

}
