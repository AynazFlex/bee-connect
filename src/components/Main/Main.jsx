import React from "react";
import s from "./Main.module.css";
import Newpost from "./Newpost";
import Posts from "./Posts";
import Status from "./Status";
import Hr from "../Other/Hr";

const Main = (props) => {
  return (
    <div className={s.main}>
      <Status status={props.status} putStatus={props.putStatus} />
      <Hr />
      <Newpost addPost={props.addPost} />
      {props.state.posts.map((post, index) => (
        <Posts key={index} post={post} />
      ))}
    </div>
  );
};

export default Main;
