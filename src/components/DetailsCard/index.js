import { Pressable, Image, View, Text } from "react-native";
import styles from "./styles";


export default function DetailsCard() {

    return (

        <Pressable style={[styles.card, styles.boxShadow]}
                   onPress={() => console.log("details card")}>

            <Image source={require("../../assets/icons/phone.png")}
                   style={styles.image} />
            
            <View style={styles.textContainer}>

                <Text style={styles.categoryText}>Airtime</Text>
                <Text style={styles.detailsText}>Buy/send airtime from your pocket fast!</Text>

            </View>

            <Image source={require("../../assets/icons/arrow.png")}
                   style={styles.rightArrow} />

        </Pressable>

    );

}
