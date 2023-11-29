import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import * as constants from "../../utility/constants"; 
import { styles } from "./styles";


export default function DropDown({ data, focused, setFocused, value, setValue }) {

    return (

        <View style={styles.container}>

            <Dropdown style={[styles.dropdown, focused && { borderColor: constants.primary }]}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      itemTextStyle={{fontFamily: "poppins_medium", color: "grey"}}
                      itemContainerStyle={{borderRadius: 5, width: "98%", alignSelf: "center"}}
                      containerStyle={{borderRadius: 10}}
                      data={data}
                      search
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      // placeholder={!focused ? "Select item" : "..."}
                      searchPlaceholder="Search"
                      // placeholderStyle={{fontFamily: "poppins_medium"}}
                      placeholder=""
                      value={value}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      onChange={item => {
                      setValue(item.value);
                      setFocused(false); }} />

        </View>

    );

};
