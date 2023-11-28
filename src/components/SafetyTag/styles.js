import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";


export const styles = StyleSheet.create({

    container: {
        
        marginTop: 16,
        marginBottom: 5
    },

    text: {
        
        fontFamily: "poppins_regular"
    },

    highlight: {
        
        color: constants.primary,
        textDecorationLine: "underline"
    }

});
