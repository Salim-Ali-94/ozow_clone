import { View } from "react-native";
import EquityCard from "../../components/EquityCard";


export default function StockMarket() {

    return (

    <View style={{alignItems: "center"}}>

        <EquityCard data={[{value: 15}, {value: 30}, {value: 26}, {value: 40},{value: 20},{value: 18},{value: 40},{value: 36},{value: 60},{value: 54},{value: 85},{value: 10},{value: 8},{value: 58},{value: 56},{value: 78},{value: 74},{value: -5},{value: 98}]}
                    company={"tEslA"}
                    ticker={"tsla"}
                    price={103.45}
                    high={105.63}
                    low={98.42} />

      </View>

    );

}
