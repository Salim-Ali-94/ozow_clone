import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";


export const styles = StyleSheet.create({

    container: {
        
        backgroundColor: constants.background,
        flex: 1
    },

    search: {
        
        marginTop: 30,
        alignItems: "center"
    },

    transactionList: {
        
        width: "90%"
    },

    centerAlign: {

        alignItems: "center"
    },

    section: {

        marginTop: 30,
        paddingBottom: 30
    },

    sectionText: {

        fontFamily: "poppins_semi_bold",
        color: "#000000",
        fontSize: 16,
        marginLeft: "5%"
    },

    horizontalSection: {

        marginTop: 20
    }

});
