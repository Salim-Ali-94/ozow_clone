import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";


export const styles = StyleSheet.create({

    container: {
        
        backgroundColor: constants.background,
        flex: 1
    },

    gridContainer: { 
        
        marginTop: -115
    },

    row: {
        
        flexDirection: "row"
    },

    verticalGap: {
        
        height: 20
    },

    horizontalGap: {
        
        width: 10
    },

    tradeSection: {
        
        marginBottom: 120
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
        fontSize: 32,
        marginLeft: "5%"
    }

});
