import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    row: {

        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "90%",
        flexDirection: "row"
    },

    left: {

        flexDirection: "row",
        alignItems: "center"
    },

    info: {

        marginLeft: 10
    },

    dateText: {

        fontFamily: "poppins_regular",
        fontSize: 10,
        color: "grey"
    },

    right: {

        alignItems: "flex-end"
    },

    priceText: {

        fontFamily: "poppins_bold",
        fontSize: 18,
        color: "#000000"
    }

});
