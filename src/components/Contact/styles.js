import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";


export const styles = StyleSheet.create({

    container: {
        
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center"
    },

    imageHolder: {
        
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: constants.cement,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    nameText: {
        
        fontFamily: "poppins_medium",
        color: "#000",
        fontSize: 18,
        lineHeight: 19
    },

    phoneText: {
        
        fontFamily: "poppins_medium",
        color: "grey",
        fontSize: 16
    }

});
