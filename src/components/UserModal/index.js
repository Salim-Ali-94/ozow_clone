import { Alert, TextInput, View, Pressable, Text, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import axios from "axios";
import { styles } from "./styles";
import { DB_ENDPOINT } from "@env";
import * as constants from "../../utility/constants";
import { assignUser } from "../../providers/reducers/userReducer";


export default function UserModal({ open, setOpen, name, setName, password, setPassword }) {

    const dispatch = useDispatch();

    return (

        <Modal visible={open} onRequestClose={() => setOpen(false)} animationType="slide" transparent={true}>

            <View style={styles.overlay}>

                <View style={styles.card}>

                    <Text style={[styles.actionText, { marginTop: 20 }]}>User name</Text>

                    <TextInput style={styles.input}
                               value={name}
                               onChangeText={value => setName(value)} />

                    <Text style={[styles.actionText, { marginTop: 20 }]}>Password</Text>

                    <TextInput style={styles.input}
                               value={password}
                               secureTextEntry={true}
                               onChangeText={value => setPassword(value)} />

                    <Pressable onPress={async () => { if ((name !== "") && (password !== "")) {

                                                            let check = await axios.get(DB_ENDPOINT + "findUser", { params: { name: name, password: password } });

                                                            if (check.status === 200) {

                                                                if (Object.keys(check.data).length === 0) {

                                                                        let person = { ...constants.user };
                                                                        person.name = name;
                                                                        person.password = password;
                                                                        dispatch(assignUser(person));
                                                                        await AsyncStorage.setItem("user", JSON.stringify(person));
                                                                        axios.post(DB_ENDPOINT + "storeUser", person);

                                                                    } else {

                                                                        let person = check.data
                                                                        dispatch(assignUser(person));
                                                                        await AsyncStorage.setItem("user", JSON.stringify(person));

                                                                    }

                                                                } else {

                                                                    let person = { ...constants.user };
                                                                    person.name = name;
                                                                    person.password = password;
                                                                    dispatch(assignUser(person));
                                                                    await AsyncStorage.setItem("user", JSON.stringify(person));
                                                                    axios.post(DB_ENDPOINT + "storeUser", person);

                                                                }

                                                                setOpen(false);

                                                            } else { ((name === "") && (password === "")) ? Alert.alert("A name and password is required", "Please input your name and password for a new account or your user name and password for an existing account") :
                                                                     ((name === "") && (password !== "")) ? Alert.alert("Please input your name", "A blank user name is not allowed") :
                                                                                                            Alert.alert("Please input a password", "A blank password is not allowed") }

                                                    }

                                                }

                                                style={[styles.button, { marginTop: 20 }]}>

                        <View style={styles.submit}>

                            <Text style={styles.actionText}>Submit</Text>

                        </View>

                    </Pressable>

                </View>

            </View>

        </Modal>

    );

}
