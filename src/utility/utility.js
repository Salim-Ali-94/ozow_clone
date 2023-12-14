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

const searchFilter = (data, text, setFilteredData, setSearchQuery, key) => {

    setSearchQuery(text);
    const filteredItems = data.filter(item => item[key].toLowerCase().includes(text.toLowerCase()));
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
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;

}

const previousWorkingDay = (date) => {

    const target = new Date(date);

    do {

        target.setDate(target.getDate() - 1);

    } while ((target.getDay() === 0) || (target.getDay() === 1));

    do {

        target.setDate(target.getDate() - 1);

    } while ((target.getDay() === 0) || (target.getDay() === 1));

    return formatDate(target);

};

function encrypt(text, key) {

    let cipher = "";

    for (let index = 0; index < text.length; index++) {

        cipher += String.fromCharCode(text.charCodeAt(index) ^ parseInt(key));

    }

    return cipher;

}


export { dropShadow, searchFilter, uuid, previousWorkingDay, encrypt };
