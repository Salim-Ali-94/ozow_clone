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

    itemTextStyle: {
        
        fontFamily: "poppins_medium",
        color: "grey"
    },

    itemContainerStyle: {
        
        borderRadius: 5,
        width: "98%",
        alignSelf: "center"
    },

    containerStyle: {
        
        borderRadius: 10
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
        fontFamily: "poppins_semi_bold",
        color: "#000"
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
