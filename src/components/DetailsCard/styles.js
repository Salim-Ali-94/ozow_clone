import { StyleSheet } from "react-native";
import * as utility from "../../utility/utility";
import * as constants from "../../utility/constants";


let styles = StyleSheet.create({

    card: {

        backgroundColor: "#ffffff",
        borderRadius: 20,
        width: "90%",
        height: 100,
        flexDirection: "row",
        padding: 10,
        alignItems: "center"
    },

    textContainer: {

        // justifyContent: "center",
        // alignItems: "center"
        marginLeft: 5,
        // backgroundColor: "pink",
        width: "75%"
    },

    categoryText: {

        fontFamily: "poppins_bold",
        color: "#000000",
        fontSize: 18,
        // textAlign: "center"
    },

    detailsText: {

        fontFamily: "poppins_regular",
        color: "#000000",
        // textAlign: "center",
        lineHeight: 15,
        width: "60%"
    },

    image: {

        width: 50,
        height: 50,
        // width: 40,
        // height: 40,
        tintColor: constants.primary
    },

    rightArrow: {

        width: 20,
        height: 20,
        // paddingRight: 5
    }

});


styles = utility.dropShadow(styles, -2, 4, "#171717", 0.2, 3, 4, "#171717");
export default styles;
