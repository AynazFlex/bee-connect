import React from "react";
import s from "./Main.module.css";
import Newpost from "./Newpost";
import Posts from "./Posts";

const Main = (props) => {

  return (
    <div className={s.main}>
      <Newpost 
        textOfPost={props.state.textOfPost}
        addPost={props.addPost}
        changeText={props.changeText}
      />
      {props.state.posts.map((post, index) => (
        <Posts key={index} post={post} />
      ))}
    </div>
  );
};

export default Main;
