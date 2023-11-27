import { Pressable } from "react-native";
import styles from "./styles";


export default function DetailsCard() {

    return (

        <Pressable style={[styles.card, styles.boxShadow]}
                   onPress={() => console.log("details card")}>

        </Pressable>

    );

}
