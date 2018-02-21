import React, { Component } from 'react'
import {createStore,combineReducers} from 'redux'
import ArrWords from './arrWordsReducer';
import Filter from './filterStatusReducer';
import IsAdding from './isAddingReducer';


export default reducer = combineReducers({
    arrWords:ArrWords,
    filterStatus:Filter,
    isAdding:IsAdding
})
