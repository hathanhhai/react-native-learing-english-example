import React, { Component } from 'react'
import { View,StyleSheet,Text } from 'react-native';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux';
import Reducer from '../reducer/'; 

////////////////







///store

const store = createStore(Reducer);


export default store;