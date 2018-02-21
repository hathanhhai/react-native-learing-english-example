import React, { Component } from 'react'
import { View,StyleSheet,Text } from 'react-native';
import {Provider} from 'react-redux'
import Main from './conpenents/main'
import store from './stores/store';
////////////////

////////////////
export default class App  extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }
}