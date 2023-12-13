import { View, Text, SafeAreaView, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import * as constants from "../../utility/constants";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { previousScreen, currentScreen } from "../../providers/reducers/screenReducer";


export default function Confirmation() {

    const user = useSelector(state => state.reducer_user.user);
    const screen = useSelector(state => state.reducer_screen);
    const route = useRoute();
    const navigation = useNavigation();
    const { animation, header, size } = route.params;
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
                    dispatch(previousScreen(screen.screen));
                    dispatch(currentScreen("Home"));
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
