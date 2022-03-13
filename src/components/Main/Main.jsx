import React from "react";
import s from "./Main.module.css";
import Newpost from "./Newpost";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.main}>
        <Newpost />
      </div>
    );
  }
}

export default Main;
