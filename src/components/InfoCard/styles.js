import { StyleSheet } from "react-native";
import * as utility from "../../utility/utility";


let styles = StyleSheet.create({

    container: {

        width: 200,
        // width: "50%",
        // height: 180,
        height: 160,
        borderRadius: 20,
        backgroundColor: "#ffffff"
    }

});


styles = utility.dropShadow(styles, -2, 4, "#171717", 0.2, 3, 4, "#171717");
export default styles;
