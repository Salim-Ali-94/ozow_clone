import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";


export const styles = StyleSheet.create({

    card: {

        backgroundColor: constants.primary,
        borderRadius: 20,
        width: 120,
        height: 120,
        justifyContent: "center",
        alignItems: "center"
    },

    group: {

        alignItems: "center",
        height: 65,
        justifyContent: "space-between"

    },

    image: {

        width: 30,
        height: 30
    },

    text: {

        color: "#ffffff",
        fontFamily: "poppins_medium"
    }

});
