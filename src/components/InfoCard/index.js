import { Pressable } from "react-native";
import styles from "./styles";


export default function InfoCard() {

    return (

        <Pressable style={[styles.container, styles.boxShadow]}
                   onPress={() => console.log("click")}>

        </Pressable>

    );

}
