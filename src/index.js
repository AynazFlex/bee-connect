import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "normalize.css";
import state, { subscribe } from "./components/redux/state";
import { addPost, changeEntryField } from "./components/redux/state";
import { BrowserRouter } from "react-router-dom";

const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} changeEntryField={changeEntryField}/>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

render();

subscribe(render);
