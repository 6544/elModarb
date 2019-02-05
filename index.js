/** @format */
import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import store from "./src/store/index";
import { Provider } from "react-redux";

const app=()=>(
    <Provider store={store}>
    <App/>
    </Provider>
)
AppRegistry.registerComponent(appName, () => app);
