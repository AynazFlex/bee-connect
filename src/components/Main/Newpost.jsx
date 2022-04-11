import React from "react";
import s from "./Newpost.module.css";
import Button from "../Other/Button";
import { addPostActionCreate, changeEntryActionCreate } from "../../redux/dataReducer";

function Newpost(props) {

  const click = () => {
    props.dispatch(addPostActionCreate())
  }

  const change = event => {
    const text = event.target.value;
    props.dispatch(changeEntryActionCreate(text));
  }

  return (
    <>
      <div className={s.post}>
        <textarea
          onChange={change}
          placeholder="Что у вас нового?"
          className={s.input}
          value={props.textOfPost}
        />
        <Button callback={click} text="Опубликовать" />
      </div>
    </>
  );
}

export default Newpost;
