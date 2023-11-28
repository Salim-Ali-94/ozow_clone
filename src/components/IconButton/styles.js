import { StyleSheet } from "react-native";
import * as utility from "../../utility/utility";


let styles = StyleSheet.create({

    container: {

        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "space-between"
    },

    button: {

        backgroundColor: "#ffffff",
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },

    text: {

        color: "#000000",
        fontFamily: "poppins_regular"
    }

});

styles = utility.dropShadow(styles, -2, 4, "#171717", 0.2, 3, 4, "#171717");
export default styles;
