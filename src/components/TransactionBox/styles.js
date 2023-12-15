import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {

        width: "90%",
        // height: 450,
        borderRadius: 20,
        backgroundColor: "#ffffff",

        // marginBottom: 120
    },

    rightArrow: {
        
        width: 12,
        height: 12,
        marginBottom: 2,
        marginLeft: 5
    },

    row: {
        
        paddingVertical: 20
        // paddingTop: 10,
        // paddingBottom: 10
    },

    header: {

        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 20
    },

    expand: {

        flexDirection: "row",
        alignItems: "center"
    },

    headingText: {

        fontFamily: "poppins_bold",
        fontSize: 16,
        color: "#000000"
    },

    transactions: {

        marginTop: 20,
        height: 240,
        paddingHorizontal: 20,
        justifyContent: "space-between"
    }

});
