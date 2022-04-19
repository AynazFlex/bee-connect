import { createStore, combineReducers } from "redux";
import dataReducer from "./dataReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
    data: dataReducer,
    usersPage: usersReducer,
})


const store = createStore(reducers);


export default store;