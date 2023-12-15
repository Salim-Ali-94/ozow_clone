import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";


export const styles = StyleSheet.create({

    container: {

        width: "90%"
    },

    label: {

        fontFamily: "poppins_bold",
        color: constants.primary,
        fontSize: 24,
        lineHeight: 28,
        marginBottom: 10
    },

    input: {

        borderRadius: 10,
        // width: 300,
        // width: "90%",
        color: "#000",
        borderWidth: 1.5,
        padding: 10,
        fontSize: 16,
        fontFamily: "poppins_regular"
    }

});
