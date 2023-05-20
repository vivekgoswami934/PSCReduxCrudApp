import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducer.js"



const rootReducer = combineReducers({reducer})

const middleware = [thunk]

export const store = legacy_createStore(rootReducer, applyMiddleware(...middleware))