import { View, Text, SafeAreaView, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useEffect, useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { screenContext } from "../../providers/screenContext";
import * as constants from "../../utility/constants";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Confirmation() {

    const route = useRoute();
    const navigation = useNavigation();
    const { animation, header, size } = route.params;
    const { user, setPrevious, setScreen, screen } = useContext(screenContext);
    const [text, setText] = useState(header);

    const updateStorage = async () => {
        
        await AsyncStorage.setItem("user", JSON.stringify(user));

    }

    useEffect(() => {

        const unsubscribe = navigation.addListener("focus", () => {

            updateStorage();

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
    
                <LottieView source={animation} style={[styles.loader, size && { width: size, height: size }]} autoPlay loop />

            </View>

        </SafeAreaView>   

    );

}
