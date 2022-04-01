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
        <Newpost text={this.props.state.newPostText} addPost={this.props.addPost}/>
        {this.props.state.posts.map((post, index) => <Posts key={index} post={post}/>)}
      </div>
    );
  }
}

export default Main;
