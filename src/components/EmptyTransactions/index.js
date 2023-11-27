import { View, Text, Image } from "react-native";


export default function EmptyTransactions() {

    return (

        <View style={{ alignItems: "center" }}>
                    
            <Image source={require("../../assets/icons/box.png")}
                   style={{ width: 200, height: 200 }} />

            <Text style={{ fontFamily: "poppins_bold", color: "grey", fontSize: 18 }}>No transactions</Text>

        </View>

    );

}
