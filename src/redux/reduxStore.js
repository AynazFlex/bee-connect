import { createStore, combineReducers, applyMiddleware } from "redux";
import dataReducer from "./dataReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import newsReducer from "./newsReducer";
import appReducer from "./appReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  data: dataReducer,
  usersPage: usersReducer,
  profile: profileReducer,
  auth: authReducer,
  news: newsReducer,
  app: appReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

window.store = store;

export default store;
