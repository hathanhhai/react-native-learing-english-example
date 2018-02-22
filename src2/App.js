import React, { Component } from 'react'
import {Provider} from 'react-redux'
import Main from './conponents/main'
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