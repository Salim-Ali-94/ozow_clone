import { Pressable, Image, Text, View } from "react-native";
import styles from "./styles";


export default function InfoCard({ category, icon, info }) {

    return (

        <Pressable style={[styles.card, styles.boxShadow]}
                   onPress={() => console.log(category)}>

            <Image source={icon}
                   style={styles.image} />

            {/* <View style={{height: 20}} /> */}

            <View style={styles.textConatiner}>

                <Text style={styles.categoryText}>{category}</Text>

                <Text style={styles.infoText}>{info}</Text>

            </View>

        </Pressable>

    );

}
