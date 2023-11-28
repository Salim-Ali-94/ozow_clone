import { View, Text, Image } from "react-native";


export default function SecurityBadge() {

    return (

        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", borderRadius: 50, backgroundColor: "#F0F0F8", paddingVertical: 10, paddingHorizontal: 20 }}>

            <View style={{ marginRight: 5 }}>

                <Image source={require("../../assets/icons/shield.png")}
                    style={{ width: 20, height: 20, tintColor: "#61687A" }} />

            </View>

            <Text style={{ color: "#61687A", fontFamily: "poppins_medium", fontSize: 16 }}>Secure TLS Encryption</Text>

        </View>

    );

}
