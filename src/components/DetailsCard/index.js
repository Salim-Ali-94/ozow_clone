import { Pressable, Image, View, Text } from "react-native";
import styles from "./styles";


export default function DetailsCard({ category, icon, details, textWidth, iconSize }) {

    return (

        <Pressable style={[styles.card, styles.boxShadow]}
                   onPress={() => console.log("details card")}>

            <View style={styles.imageContainer}>

                <Image source={icon}
                       style={[styles.image, { width: iconSize ? iconSize : 50,
                                               height: iconSize ? iconSize : 50 }]} />

            </View>
            
            <View style={styles.textContainer}>

                <Text style={styles.categoryText}>{category}</Text>
                {/* <Text style={styles.detailsText}>{details}</Text> */}
                <Text style={[styles.detailsText, { width: textWidth ? textWidth : "85%" }]}>{details}</Text>

            </View>

            <Image source={require("../../assets/icons/arrow.png")}
                   style={styles.rightArrow} />

        </Pressable>

    );

}
