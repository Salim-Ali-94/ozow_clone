import { StyleSheet } from "react-native";
import * as utility from "../../utility/utility";


let styles = StyleSheet.create({

    card: {
        
        overflow: "hidden",
        width: "90%",
        height: 220,
        borderRadius: 20,
        padding: 20
    },

    detailsSection: {
        
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    descriptionContainer: {

        alignItems: "center"
    },

    logoBox: {
        
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },

    indicator: {
        
        color: "#fff",
        fontFamily: "poppins_bold",
        fontSize: 24
    },

    priceSection: {
        
        alignItems: "flex-end",
        marginBottom: 5
    },

    currentPrice: {
        
        color: "#fff",
        fontFamily: "poppins_bold",
        fontSize: 24,
        lineHeight: 27,
        padding: 0
    },

    cash: {
        
        color: "#fff",
        fontFamily: "poppins_semi_bold",
        fontSize: 18,
        lineHeight: 23,
        padding: 0
    }

});

styles = utility.dropShadow(styles, -2, 4, "#171717", 0.2, 3, 4, "#171717");
export default styles;
