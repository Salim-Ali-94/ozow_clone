import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";


export const styles = StyleSheet.create({

    container: {
        
        flex: 1,
        alignItems: "center"
    },

    heading: {
        
        // width: "90%",
        fontFamily: "poppins_bold",
        color: constants.secondary,
        fontSize: 32,
        // marginBottom: 30,
        marginTop: 50,
        height: 120
    },

    loader: {
        
        width: 260,
        height: 260
    }

});
