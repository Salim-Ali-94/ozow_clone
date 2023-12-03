import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";


export const styles = StyleSheet.create({

    container: {

        backgroundColor: constants.background,
        flex: 1
    },

    headingSection: {
        
        marginTop: 30,
        marginBottom: 10
    },

    heading: {
        
        flexDirection: "row"
    },

    header: {

        marginTop: 30
    },

    fireIcon: {
        
        width: 40,
        height: 40
    },

    searchBox: {
        
        borderRadius: 10,
        backgroundColor: constants.secondary,
        marginLeft: 5,
        width: "20%",
        height: 53.5,
        justifyContent: "center",
        alignItems: "center"
    },

    searchIcon: {
        
        width: 20,
        height: 20,
        tintColor: "#fff"
    },

    resultsSection: {
        
        alignItems: "center"
    },

    loader: {
        
        width: 240,
        height: 240
    },

    emptySection: {
        
        justifyContent: "center",
        alignItems: "center"
    },

    emptyIcon: {
        
        width: 160,
        height: 160
    },

    sectionHeading: {
        
        color: "#000",
        fontFamily: "poppins_semi_bold",
        fontSize: 16
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

    emptyText: {
        
        fontFamily: "poppins_bold",
        color: "grey",
        fontSize: 18
    }

});
