import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";


export const styles = StyleSheet.create({

    container: {

        backgroundColor: constants.background,
        flex: 1
    },

    header: {

        marginTop: 30
    },

    invite: {

        marginLeft: "5%",
        marginTop: 20
    },

    sectionHeading: {
        
        color: "#000",
        fontFamily: "poppins_semi_bold",
        fontSize: 16
    },

    contactsTable: {

        width: "90%",
        backgroundColor: "#ffffff",
        borderRadius: 20,
        padding: 20,
        height: 300
    },

    section: {

        marginTop: 30,
        paddingBottom: 30
    },

    centerAlign: {

        alignItems: "center"
    },

    sectionText: {

        fontFamily: "poppins_bold",
        color: constants.primary,
        width: "78%",
        fontSize: 28,
        marginLeft: "5%"
    },

    horizontalSection: {

        marginTop: 20
    }

});
