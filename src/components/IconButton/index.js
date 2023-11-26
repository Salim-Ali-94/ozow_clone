import { View, Pressable } from "react-native";
import { styles } from "./styles" ;


export default function IconButton() {

    return (

        <View style={styles.container}>

            <Pressable style={styles.button}
                       onPress={() => console.log("clicked")}>

            </Pressable>

        </View>

    );

}
