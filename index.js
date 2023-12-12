/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import { Provider } from "react-redux";
import { globalStore } from "./src/providers/store";


const Application = () => (

    <Provider store={globalStore}>
      <App />
    </Provider>

);

AppRegistry.registerComponent(appName, () => Application);
// AppRegistry.registerComponent(appName, () => App);
