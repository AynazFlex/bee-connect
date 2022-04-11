import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "normalize.css";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

store.subscribe(render);

render();
