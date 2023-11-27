import { Pressable, Image, View, Text } from "react-native";
import styles from "./styles";


export default function DetailsCard({ category, icon, details }) {

    return (

        <Pressable style={[styles.card, styles.boxShadow]}
                   onPress={() => console.log("details card")}>

            <Image source={require("../../assets/icons/phone.png")}
                   style={styles.image} />
            
            <View style={styles.textContainer}>

                <Text style={styles.categoryText}>{category}</Text>
                <Text style={styles.detailsText}>{details}</Text>

            </View>

            <Image source={icon}
                   style={styles.rightArrow} />

        </Pressable>

    );

}
