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
    // const filteredItems = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
    const filteredItems = data.filter(item => item.ticker.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(filteredItems);

};

const uuid = (length) => {

    let uuid = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";

    while (uuid.length < length) {

        const index = Math.floor(Math.random()*characters.length);
        uuid += characters[index];

    }

    return uuid;

};

const formatDate = (date) => {

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;

}

const previousWorkingDay = (date) => {

    const target = new Date(date);

    while (target.getDay() === 0 || target.getDay() === 1) {

        target.setDate(target.getDate() - 1);

    }

    target.setDate(target.getDate() - 1);
    return formatDate(target);

};


export { dropShadow, searchFilter, uuid, previousWorkingDay };
