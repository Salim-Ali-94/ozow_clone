import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";


export const styles = StyleSheet.create({

    card: {

        // backgroundColor: "#ffffff",
        backgroundColor: "#000",
        borderRadius: 20,
        width: "90%",
        height: 140,
        justifyContent: "space-between",
        padding: 20
        // padding: 10
    },

    headingText: {

        // color: "#000",
        color: "#ffffff",
        fontFamily: "poppins_medium",
        fontSize: 16
    },

    balanceContainer: {

        flexDirection: "row"
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