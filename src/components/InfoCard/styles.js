import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";
import * as utility from "../../utility/utility";


let styles = StyleSheet.create({

    card: {

        // width: 189,
        width: "46%",
        height: 140,
        borderRadius: 20,
        backgroundColor: "#ffffff",
        paddingHorizontal: 10,
        paddingTop: 20,
        paddingBottom: 10,
        justifyContent: "space-around",
        alignItems: "center"
    },

    image: {

        width: 40,
        height: 40,
        tintColor: constants.primary
    },

    textContainer: {

        justifyContent: "center",
        alignItems: "center"
    },

    categoryText: {

        fontFamily: "poppins_bold",
        color: "#000000",
        fontSize: 18,
        textAlign: "center"
    },

    infoText: {

        fontFamily: "poppins_regular",
        color: "#000000",
        textAlign: "center",
        lineHeight: 15
    }

});

styles = utility.dropShadow(styles, -2, 4, "#171717", 0.2, 3, 4, "#171717");
export default styles;
