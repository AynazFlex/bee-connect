import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "normalize.css";
import store from "./redux/reduxStore";
import { BrowserRouter } from "react-router-dom";

const render = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

store.subscribe(() => render(store.getState()));

render(store.getState());
