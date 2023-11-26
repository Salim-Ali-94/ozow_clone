import { View, Image } from "react-native";
import { styles } from "./styles";


export default function IconBox() {

    return (

        <View style={styles.box}>

            <Image source={require("../../assets/icons/burger.png")}
                   style={styles.icon}/>

        </View>

    );

}
