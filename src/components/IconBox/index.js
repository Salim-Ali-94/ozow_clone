import { View, Image } from "react-native";
import { styles } from "./styles";


export default function IconBox({ icon }) {

    return (

        <View style={styles.box}>

            <Image source={icon}
                   style={styles.icon}/>

        </View>

    );

}
