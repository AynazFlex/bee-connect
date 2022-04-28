import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "normalize.css";
import store from "./redux/reduxStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App id={store.getState().data.profile.id} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
