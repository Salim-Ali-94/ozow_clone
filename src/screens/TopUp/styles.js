import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";


export const styles = StyleSheet.create({

    container: {

        backgroundColor: constants.background,
        flex: 1
    },

    inputHolder: {

        marginTop: 30,
        alignItems: "center"
    },

    bankSection: {

        marginTop: 30,
        marginLeft: "5%"
    },

    bankHeading: {
        
        fontFamily: "poppins_bold",
        color: constants.primary,
        fontSize: 24,
        lineHeight: 25,
        marginBottom: 0
    },

    bottom: {

        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 20
    }

});
