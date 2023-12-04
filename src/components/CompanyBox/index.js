import { Pressable } from "react-native";
import { useState } from "react";
import { SvgUri } from "react-native-svg";
import PopUp from "../PopUp";
import { styles } from "./styles";


export default function CompanyBox({ logo, gap_right, gap_left, ticker, price, high, low, stocks }) {

    const [open, setOpen] = useState(false);
    const [shares, setShares] = useState("");

    return (

        <Pressable style={[styles.box, { marginRight: gap_right ? gap_right : 0,
                                        marginLeft: gap_left ? gap_left : 0 }]}

                    onPress={() => setOpen(true) }>

            <SvgUri width={50}
                    height={50}
                    fill={"deeppink"}
                    uri={logo} />

            <PopUp open={open}
                   setOpen={setOpen}
                   ticker={ticker}
                   price={price}
                   low={low}
                   high={high}
                   shares={shares}
                   stocks={stocks}
                   logo={logo}
                   setShares={setShares} />

        </Pressable>

    );

} 
