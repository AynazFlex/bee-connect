import React from "react";
import s from "./Main.module.css";
import Newpost from "./Newpost";
import Posts from "./Posts";
import Status from "./Status";
import Hr from "../Other/Hr";

const Main = (props) => {
  return (
    <div className={s.main}>
      <Status status={props.status} putStatus={props.putStatus} errorMessage={props.errorMessage} setError={props.setError} />
      <Hr />
      <Newpost addPost={props.addPost} />
      {props.state.posts.map((post) => (
        <Posts key={post.date} post={post} deletePost={props.deletePost} />
      ))}
    </div>
  );
};

export default Main;
