import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";
import * as utility from "../../utility/utility";


let styles = StyleSheet.create({

    card: {

        // width: "48.7%",
        // height: 150,

        // width: 200,
        width: 189,
        // width: "46%",
        // width: "47%",
        height: 140,

        // height: 180,
        // height: 160,
        borderRadius: 20,
        backgroundColor: "#ffffff",
        // padding: 10,
        paddingHorizontal: 10,
        // paddingVertical: 20,
        paddingTop: 20,
        paddingBottom: 10,
        // justifyContent: "center",
        // justifyContent: "space-between",
        justifyContent: "space-around",
        alignItems: "center"
    },

    image: {

        // width: 50,
        // height: 50,
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
        textAlign: "center",
        // lineHeight: 19
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
