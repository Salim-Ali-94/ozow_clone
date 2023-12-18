import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";


export const styles = StyleSheet.create({

    overlay: {
        
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },

    card: {
        
        // backgroundColor: constants.secondary,
        backgroundColor: constants.primary,
        padding: 20,
        width: "90%",
        height: 320,
        borderRadius: 20
    },

    input: {

        borderRadius: 10,
        color: "#000",
        borderWidth: 1.5,
        height: 50,
        padding: 10,
        fontSize: 16,
        fontFamily: "poppins_regular"
    },

    button: {

        marginTop: 10
    },

    submit: {

        backgroundColor: "#000",
        height: 53,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    actionText: {

        fontFamily: "poppins_bold",
        fontSize: 18,
        color: "#fff"
    }

});
