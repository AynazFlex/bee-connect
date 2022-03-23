import React from "react";
import s from "./Main.module.css";
import Newpost from "./Newpost";
import Posts from "./Posts";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.main}>
        <Newpost />
        {this.props.posts.map(post => <Posts post={post}/>)}
      </div>
    );
  }
}

export default Main;
