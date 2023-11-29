import { StyleSheet } from "react-native";
import * as constants from "../../utility/constants";


export const styles = StyleSheet.create({

    container: {

        backgroundColor: constants.background,
        flex: 1
    },

    inputHolder: {

        marginTop: 30,
        alignItems: "center"
    },

    bottom: {

        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 20
    }

});
