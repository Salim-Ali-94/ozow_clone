import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";


export const styles = StyleSheet.create({

    container: {

        backgroundColor: constants.background,
        flex: 1
    },

    inputHolder: {

        // marginTop: 30,
        marginTop: 20,
        alignItems: "center"
    },

    headerSection: {

        marginTop: 30,
        marginLeft: "5%"
    },

    heading: {
        
        fontFamily: "poppins_bold",
        color: constants.primary,
        fontSize: 24,
        lineHeight: 26,
        marginTop: 30,
        width: "70%"
        // marginBottom: 0
    },

    bottom: {

        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 20
    }

});
