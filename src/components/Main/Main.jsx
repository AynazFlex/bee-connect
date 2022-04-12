import React from "react";
import s from "./Main.module.css";
import Newpost from "./Newpost";
import Posts from "./Posts";
import { addPostActionCreate, changeEntryActionCreate } from "../../redux/dataReducer";

const Main = (props) => {

  const addPost = () => {
    props.dispatch(addPostActionCreate());
  }

  const changeText = (text) => {
    props.dispatch(changeEntryActionCreate(text));
  }

  return (
    <div className={s.main}>
      <Newpost 
        textOfPost={props.state.textOfPost} 
        dispatch={props.dispatch} 
        addPost={addPost}
        changeText={changeText}
      />
      {props.state.posts.map((post, index) => (
        <Posts key={index} post={post} />
      ))}
    </div>
  );
};

export default Main;
