import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants"; 


export const styles = StyleSheet.create({

    container: {

        width: "90%"
    },

    dropdown: {

        borderColor: constants.secondary,
        borderWidth: 1.5,
        borderRadius: 10,
        paddingHorizontal: 8,
        padding: 7,
        width: "100%"
    },

    label: {

        position: "absolute",
        backgroundColor: "white",
        left: 22,
        top: 8,
        zIndex: 2,
        fontSize: 14
    },

    placeholderStyle: {

        fontSize: 16,
        fontFamily: "poppins_regular",
        color: "lightgray"
    },

    selectedTextStyle: {

        fontSize: 16,
        fontFamily: "poppins_semi_bold",
        color: "#000"
    },

    iconStyle: {

        width: 20,
        height: 20
    },

    inputSearchStyle: {

        fontSize: 16,
        fontFamily: "poppins_regular",
        color: "#000",
        borderRadius: 10
    }

});
