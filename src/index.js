import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "normalize.css";
import store from "./redux/reduxStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const render = (store) => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

store.subscribe(() => render(store));

render(store);
