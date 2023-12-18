import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateBalance, storeTransaction } from "../../providers/reducers/userReducer";
import { useState } from "react";
import InputText from "../../components/InputText";
import DropDown from "../../components/DropDown";
import SecurityBadge from "../../components/SecurityBadge";
import SafetyTag from "../../components/SafetyTag";
import ContinueButton from "../../components/ContinueButton";
import * as constants from "../../utility/constants";
import * as utility from "../../utility/utility";
import { styles } from "./styles";
import { DB_ENDPOINT } from "@env";
import { previousScreen, currentScreen } from "../../providers/reducers/screenReducer";
import { toggleState } from "../../providers/reducers/ozowReducer";

  
export default function SendMoney() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.reducer_user.user);
    const screen = useSelector(state => state.reducer_screen);
    const navigation = useNavigation();
    const [amount, setAmount] = useState("");
    const [number, setNumber] = useState("");
    const [category, setCategory] = useState(constants.transactionCategories[0].value);
    const [reference, setReference] = useState("");
    const [amountFocused, setAmountFocused] = useState(false);
    const [referenceFocused, setReferenceFocused] = useState(false);
    const [numberFocused, setNumberFocused] = useState(false);
    const [categoryFocused, setCategoryFocused] = useState(false);

    return (

        <SafeAreaView style={styles.container}>

            {/* <StatusBar translucent={true} backgroundColor={"transparent"} /> */}

            <LinearGradient colors={[constants.primary, constants.secondary]} 
                            style={styles.gradient}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}>

                <StatusBar translucent={true} backgroundColor={"transparent"} />

            </LinearGradient >

            <View style={styles.headerSection}>

                <Text style={styles.heading}>Send money to another pocket</Text>

            </View>

            <View style={styles.inputHolder}>

                <InputText placeHolder={"How much?"}
                           text={amount}
                           setText={setAmount}
                           focused={amountFocused}
                           numbers={true}
                           setFocused={setAmountFocused} />

            </View>

            <View style={styles.inputHolder}>

                <InputText placeHolder={"Reference"}
                           text={reference}
                           setText={setReference}
                           focused={referenceFocused}
                           setFocused={setReferenceFocused} />

            </View>

            <View style={styles.inputHolder}>

                <InputText placeHolder={"Receiver's phone number"}
                           text={number}
                           numbers={true}
                           setText={setNumber}
                           focused={numberFocused}
                           setFocused={setNumberFocused} />

            </View>

            <View style={{marginTop: 20, marginLeft: "5%"}}>

                <Text style={{fontFamily: "poppins_medium", fontSize: 16, color: "#000"}}>Transaction category</Text>

            </View>

            <View style={[styles.inputHolder, { marginTop: 5 }]}>

                <DropDown data={constants.transactionCategories}
                          focused={categoryFocused}
                          setFocused={setCategoryFocused}
                          value={category}
                          placeHolder={"Default"}
                          setValue={setCategory} />

            </View>

            <View style={{marginTop: 30, alignItems: "center"}}>
    
                <SafetyTag />

                <SecurityBadge key={"security_tls_buy"} />

            </View>

            <View style={styles.bottom}>

                <ContinueButton active={amount && (parseFloat(amount) > 0) && number && (number.length === 10) && reference ? true : false}
                                pressAction={() => {

                                                        dispatch(toggleState(false));
                                                        const uuid = utility.uuid(10);
                                                        const status = ["Paid", "Failed", "Pending"][Math.floor(Math.random()*3)];
                                                        const currentDate = new Date();
                                                        const options = { day: "numeric",
                                                                          month: "long",
                                                                          year: "numeric",
                                                                          hour: "numeric",
                                                                          minute: "numeric",
                                                                          hour12: false };

                                                        const formattedDateTime = new Intl.DateTimeFormat("en-GB", options).format(currentDate);
                                                        dispatch(updateBalance(parseFloat(user.balance - parseFloat(amount).toFixed(2))));
                                                        dispatch(storeTransaction({ direction: "from", reference: reference,
                                                                                    category: constants.transactionCategories.find(element => element.value === category).label.toLowerCase().replace(" ", "_"),
                                                                                    amount: parseFloat(parseFloat(amount).toFixed(2)), date: formattedDateTime,
                                                                                    status: status, id: uuid }));
                                                        
                                                        axios.patch(DB_ENDPOINT + "registerTransaction", { id: user.id, transaction: { direction: "from", reference: reference, category: constants.transactionCategories.find(element => element.value === category).label.toLowerCase().replace(" ", "_"), amount: parseFloat(parseFloat(amount).toFixed(2)), date: formattedDateTime, status: status, id: uuid }});
                                                        axios.patch(DB_ENDPOINT + "updateBalance", { id: user.id, balance: parseFloat(user.balance - parseFloat(amount).toFixed(2))});
                                                        
                                                        dispatch(previousScreen(screen.screen));
                                                        dispatch(currentScreen("Confirmation"));
                                                        navigation.navigate("Confirmation", { animation: require("../../assets/animations/transfer.json"),
                                                                                              header: "Sending your cash..."}); }} />

            </View>

        </SafeAreaView>

    );

}
