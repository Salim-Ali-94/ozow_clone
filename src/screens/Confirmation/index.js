import { View, Text } from "react-native";
import { useEffect, useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { screenContext } from "../../providers/screenContext";
import * as constants from "../../utility/constants";


export default function Confirmation() {

    const route = useRoute();
    const navigation = useNavigation();
    const { animation, header } = route.params;
    const { setPrevious, setScreen, screen } = useContext(screenContext);
    const [text, setText] = useState(header);
    

    // useEffect(() => {

    //     const unsubscribe = navigation.addListener("focus", () => {

    //         setTimeout(() => { setText("Success!"); }, 2000);

    //         // setTimeout(() => { constants.tabBarRef?.current?.setVisible(true);
    //         //                 setPrevious(screen);
    //         //                 setScreen("Home");
    //         //                 navigation.navigate("Home"); }, 2000);

    //     });

    //     // const subscribe = navigation.addListener("focus", () => {

    //     //     setTimeout(() => { constants.tabBarRef?.current?.setVisible(true);
    //     //                     setPrevious(screen);
    //     //                     setScreen("Home");
    //     //                     navigation.navigate("Home"); }, 1000);

    //     // });

    //     return unsubscribe;

    // }, [navigation]);

    // useEffect(() => {

    //     // const unsubscribe = navigation.addListener("focus", () => {

    //     //     setTimeout(() => { setText("Success!"); }, 2000);

    //     //     // setTimeout(() => { constants.tabBarRef?.current?.setVisible(true);
    //     //     //                 setPrevious(screen);
    //     //     //                 setScreen("Home");
    //     //     //                 navigation.navigate("Home"); }, 2000);

    //     // });

    //     const subscribe = navigation.addListener("focus", () => {

    //         setTimeout(() => { constants.tabBarRef?.current?.setVisible(true);
    //                         setPrevious(screen);
    //                         setScreen("Home");
    //                         navigation.navigate("Home"); }, 1000);

    //     });

    //     return subscribe;
    //     // return () => {
    //     //     unsubscribe();
    //     //     subscribe();
    //     // };

    // }, [text]);


    // useEffect(() => {
    //     const unsubscribe = navigation.addListener("focus", () => {
    //         // Change the text
    //         setText("Success!");
    
    //         // Navigate after a delay
    //         setTimeout(() => {
    //             constants.tabBarRef?.current?.setVisible(true);
    //             setPrevious(screen);
    //             setScreen("Home");
    //             navigation.navigate("Home");
    //         }, 1000);
    //     });
    
    //     return unsubscribe;
    // }, [navigation, screen]);


    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            // Delay before changing the text to "Success!"
            setTimeout(() => {
                setText("Success!");
    
                // Navigate after another delay
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
    
        // <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <View style={{flex: 1, alignItems: "center"}}>

            <Text style={{
        
        fontFamily: "poppins_bold",
        color: constants.secondary,
        fontSize: 32,
        // lineHeight: 33,
        marginBottom: 30,
        marginTop: 50
    // }}>{header}</Text>
}}>{text}</Text>
 
            <LottieView source={animation} style={{ width: 260, height: 260 }} autoPlay loop />

        </View>
    
    );

}
