import { View, Pressable, Image, Text } from "react-native";
import styles from "./styles" ;


export default function IconButton({ icon, category, pressAction }) {

    return (

        <View style={styles.container}>

            <Pressable style={[styles.button, styles.boxShadow]}
                       onPress={pressAction}>

                <Image source={icon}
                       style={styles.icon}/>

            </Pressable>

            <Text style={styles.text}>{category}</Text>

        </View>

    );

}
