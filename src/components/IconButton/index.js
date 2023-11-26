import { View, Pressable, Image, Text } from "react-native";
import styles from "./styles" ;


export default function IconButton({ icon, category }) {

    return (

        <View style={styles.container}>

            <Pressable style={[styles.button, styles.boxShadow]}
                       onPress={() => console.log("clicked")}>

                <Image source={icon}
                       style={{ width: 40, height: 40 }}/>

            </Pressable>

            <Text style={styles.text}>{category}</Text>

        </View>

    );

}
