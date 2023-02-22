import { combineReducers, createStore } from "redux";
import {addMinNumber} from "./reducer/plusMinReducer";
import {todoDataReducer} from "./reducer/todoReducer"

const reducer = combineReducers({
    incerementDecerement : addMinNumber,
    todotask:todoDataReducer,

})

const store = createStore(reducer)

export default store;