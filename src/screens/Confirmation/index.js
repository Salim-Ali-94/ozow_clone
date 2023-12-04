import { View, Text, SafeAreaView, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
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

                }, 1);

            }, 5000);

        });
    
        return unsubscribe;

    }, []);

    return (

        <SafeAreaView>

            <LinearGradient colors={[constants.primary, constants.secondary]} 
                            style={styles.gradient}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}>

                <StatusBar translucent={true} backgroundColor={"transparent"} />

            </LinearGradient >

            <View style={styles.container}>

                <Text style={styles.heading}>{text}</Text>
    
                <LottieView source={animation} style={styles.loader} autoPlay loop />

            </View>

        </SafeAreaView>   

    );

}
