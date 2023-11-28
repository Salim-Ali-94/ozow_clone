import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";
import * as utility from "../../utility/utility";


let styles = StyleSheet.create({

    card: {

        backgroundColor: "#ffffff",
        borderRadius: 20,
        width: "90%",
        height: 140,
        justifyContent: "space-between",
        padding: 20
    },

    headingText: {

        color: "#000000",
        fontFamily: "poppins_bold",
        fontSize: 16
    },

    balanceContainer: {

        flexDirection: "row",
        alignItems: "center",
        height: 50
    },

    space: {

        width: 5
    },

    rightArrow: {

        tintColor: constants.primary,
        width: 18,
        height: 18,
        marginBottom: 2
    },

    valueText: {

        color: constants.primary,
        fontFamily: "poppins_bold",
        fontSize: 32
    },

    plainText: {

        color: "grey",
        fontFamily: "poppins_regular",
    }

});

styles = utility.dropShadow(styles, -2, 4, "#171717", 0.2, 3, 4, "#171717");
export default styles;
