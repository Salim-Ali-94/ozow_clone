import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";


export const styles = StyleSheet.create({

    container: {
        
        backgroundColor: constants.background,
        flex: 1
    },

    cardHolder: {
        
        marginTop: 30
    },

    horizontalScroll: {
        
        marginTop: 50
    },

    column: {
        
        gap: 10
    },

    row: {
        
        gap: 20
    },

    transactionsHolder: {

        width: "90%"
    },

    entry: {
        
        paddingVertical: 20
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
    }

});
