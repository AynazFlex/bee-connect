import React from "react";
import s from "./Main.module.css";
import Newpost from "./Newpost";
import Posts from "./Posts";
import Status from "./Status";
import Hr from "../Other/Hr";

<<<<<<< HEAD
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
=======
const Main = (props) => {
  return (
    <div className={s.main}>
      <Status status={props.status} putStatus={props.putStatus} />
      <Hr />
      <Newpost addPost={props.addPost} />
      {props.state.posts.map((post) => (
        <Posts key={post.date} post={post} deletePost={props.deletePost} />
      ))}
    </div>
  );
};
>>>>>>> newredux

export default Main;
