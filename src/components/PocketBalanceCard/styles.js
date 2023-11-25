import { StyleSheet, Platform } from "react-native";
import * as constants from "../../utility/constants";


const styles = StyleSheet.create({

    card: {

        backgroundColor: "#ffffff",
        // backgroundColor: "#000000",
        borderRadius: 20,
        width: "90%",
        height: 140,
        justifyContent: "space-between",
        padding: 20
        // padding: 10
    },

    headingText: {

        color: "#000000",
        // color: "#ffffff",
        fontFamily: "poppins_medium",
        fontSize: 16
    },

    balanceContainer: {

        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "#fff",
        height: 50,
        // paddingBottom: 5
        marginBottom: 5,
        width: "36%",
        justifyContent: "space-between"
    },

    rightArrow: {

        tintColor: constants.primary,
        width: 18,
        height: 18
    },

    valueText: {

        color: constants.primary,
        fontFamily: "poppins_bold",
        fontSize: 32
    },

    plainText: {

        color: "gray",
        fontFamily: "poppins_regular",
        fontSize: 14
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
