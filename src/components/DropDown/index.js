import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import * as constants from "../../utility/constants"; 
import { styles } from "./styles";


export default function DropDown({ data, focused, setFocused, value, setValue, placeHolder }) {

    return (

        <View style={styles.container}>

            <Dropdown style={[styles.dropdown, focused && { borderColor: constants.primary }]}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      itemTextStyle={styles.itemTextStyle}
                      itemContainerStyle={styles.itemContainerStyle}
                      containerStyle={styles.containerStyle}
                      data={data}
                      search
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      searchPlaceholder="Search"
                      placeholder={placeHolder}
                      value={value}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      onChange={item => { setValue(item.value);
                                          setFocused(false); }} />

        </View>

    );

}
