import { StyleSheet } from "react-native";
import * as utility from "../../utility/utility";


let styles = StyleSheet.create({

    card: {

        backgroundColor: "#ffffff",
        borderRadius: 20,
        width: "90%",
        height: 100
    }

});


styles = utility.dropShadow(styles, -2, 4, "#171717", 0.2, 3, 4, "#171717");
export default styles;
