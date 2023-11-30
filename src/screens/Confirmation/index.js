import { View, Text } from "react-native";
import { useEffect, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { screenContext } from "../../providers/screenContext";
import * as constants from "../../utility/constants";


export default function Confirmation() {

    const route = useRoute();
    const navigation = useNavigation();
    const { animation, header } = route.params;
    const { setPrevious, setScreen, screen } = useContext(screenContext);

    useEffect(() => {

        const unsubscribe = navigation.addListener("focus", () => {

            setTimeout(() => { constants.tabBarRef?.current?.setVisible(true);
                            setPrevious(screen);
                            setScreen("Home");
                            navigation.navigate("Home"); }, 2000);

        });

        return unsubscribe;

    }, [navigation]);

    return (
    
        // <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <View style={{flex: 1, alignItems: "center"}}>

            <Text style={{
        
        fontFamily: "poppins_bold",
        color: constants.secondary,
        fontSize: 32,
        // lineHeight: 33,
        marginBottom: 30,
        marginTop: 50
    }}>{header}</Text>
 
            <LottieView source={animation} style={{ width: 260, height: 260 }} autoPlay loop />

        </View>
    
    );

}
