import { View, Pressable, Image, Text } from "react-native";
import * as constants from "../../utility/constants";
import styles from "./styles" ;


export default function IconButton({ icon, category, pressAction }) {

    return (

        <View style={styles.container}>

            <Pressable style={[styles.button, styles.boxShadow]}
                       onPress={pressAction}>

                <Image source={icon}
                       style={{ width: 30, height: 30, tintColor: constants.primary }}/>

            </Pressable>

            <Text style={styles.text}>{category}</Text>

        </View>

    );

}
