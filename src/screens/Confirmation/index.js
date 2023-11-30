import { View, Text } from "react-native";
import { useEffect, useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { screenContext } from "../../providers/screenContext";
import * as constants from "../../utility/constants";
import { styles } from "./styles";


export default function Confirmation() {

    const route = useRoute();
    const navigation = useNavigation();
    const { animation, header } = route.params;
    const { setPrevious, setScreen, screen } = useContext(screenContext);
    const [text, setText] = useState(header);

    useEffect(() => {

        const unsubscribe = navigation.addListener("focus", () => {

            setTimeout(() => {

                setText("Success!");
    
                setTimeout(() => {

                    constants.tabBarRef?.current?.setVisible(true);
                    setPrevious(screen);
                    setScreen("Home");
                    navigation.navigate("Home");

                }, 1000);

            }, 2000);

        });
    
        return unsubscribe;

    }, [navigation, screen]);

    return (
    
        <View style={styles.container}>

            <Text style={styles.heading}>{text}</Text>
 
            <LottieView source={animation} style={styles.loader} autoPlay loop />

        </View>
    
    );

}
