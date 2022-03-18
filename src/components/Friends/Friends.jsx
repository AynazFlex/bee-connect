import React from "react";
import s from "./Friends.module.css";

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.friends}>
        <h1>Друзья</h1>
      </div>
    );
  }
}

export default Friends;