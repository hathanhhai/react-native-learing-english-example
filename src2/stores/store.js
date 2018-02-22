import {createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reducer from '../reducers/temp_reducer'


export default store = createStore(Reducer,applyMiddleware(thunk));