import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {

        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5
    },

    input: {

        flex: 1,
        height: 50,
        padding: 10,
        fontFamily: "poppins_regular",
        fontSize: 18
    },

    searchImage: {

        paddingRight: 10
    },

    icon: {

        width: 20,
        height: 20,
        tintColor: "black"
    }

});
