import { Pressable, Image, Text, View } from "react-native";
import styles from "./styles";


export default function InfoCard({ category, icon, info, pressAction }) {

    return (

        <Pressable style={[styles.card, styles.boxShadow]}
                   onPress={pressAction}>

            <Image source={icon}
                   style={styles.image} />

            <View style={styles.textContainer}>

                <Text style={styles.categoryText}>{category}</Text>

                <Text style={styles.infoText}>{info}</Text>

            </View>

        </Pressable>

    );

}
