import { StyleSheet, Platform } from "react-native";


const styles = StyleSheet.create({

    container: {

        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "space-between"
    },

    button: {

        backgroundColor: "#ffffff",
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },

    text: {

        color: "#000000",
        fontFamily: "poppins_regular",
        fontSize: 16
    }

});

const boxShadow = (xOffset, yOffset, shadowColourIOS, shadowOpacity, shadowRadius, elevation, shadowColourAndroid) => {

    if (Platform.OS === "ios") {

        styles.boxShadow = {

            shadowColor: shadowColourIOS,
            shadowOffset: { width: xOffset, height: yOffset },
            shadowOpacity,
            shadowRadius
        };

    } else if (Platform.OS === "android") {

        styles.boxShadow = {

            elevation,
            shadowColor: shadowColourAndroid
        };
    }
};

boxShadow(-2, 4, "#171717", 0.2, 3, 4, "#171717");
export default styles;
