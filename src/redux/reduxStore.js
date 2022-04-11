import { createStore, combineReducers } from "redux";
import dataReducer from "./dataReducer";

const reducers = combineReducers({
    data: dataReducer,
})
const store = createStore(reducers);


export default store;