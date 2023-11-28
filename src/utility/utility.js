import { Platform } from "react-native";


const dropShadow = (styles, xOffset, yOffset, shadowColourIOS, shadowOpacity, shadowRadius, elevation, shadowColourAndroid) => {

    if (Platform.OS === "ios") {

        styles.boxShadow = {

            shadowColor: shadowColourIOS,
            shadowOffset: { width: xOffset, height: yOffset },
            shadowOpacity,
            shadowRadius
        };

    } else if (Platform.OS === "android") {

        styles.boxShadow = {

            elevation,
            shadowColor: shadowColourAndroid
        };
    }

    return styles;

};

const searchFilter = (data, text, setFilteredData, setSearchQuery) => {

    setSearchQuery(text);
    const filteredItems = data.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(filteredItems);

};


export { dropShadow, searchFilter };
