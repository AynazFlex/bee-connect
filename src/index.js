import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "normalize.css";
import store from "./redux/reduxStore";
import { BrowserRouter } from "react-router-dom";

const render = (store) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

store.subscribe(() => render(store));

render(store);
