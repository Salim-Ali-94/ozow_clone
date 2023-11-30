import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";


export const styles = StyleSheet.create({

    container: {
        
        backgroundColor: constants.background,
        flex: 1
    },

    gradient: {
        
        flex: 1
    },

    section: {

        marginTop: 30,
        paddingBottom: 30
    },

    centerAlign: {

        alignItems: "center"
    },

    sectionText: {

        fontFamily: "poppins_semi_bold",
        color: "#000000",
        fontSize: 16,
        marginLeft: "5%"
    }

});
