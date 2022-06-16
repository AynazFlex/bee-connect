import React, { useState, useEffect, memo, useRef } from "react";
import s from "./Status.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark
} from "@fortawesome/free-solid-svg-icons";

const Status = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, newStatus] = useState(props.status);
  const statusElem = useRef(null);
  const [x_y, setX_Y] = useState(null);

  useEffect(() => {
    setX_Y({
      left: `${statusElem.current.getBoundingClientRect().left}px`,
      top: `${statusElem.current.getBoundingClientRect().bottom + 5}px`,
    });
    newStatus(props.status);
  }, [props.status]);

  return (
    <div ref={statusElem} className={s.status}>
      {editMode ? (
        <input
          className={s.edit}
          autoFocus
          type="text"
          onBlur={(e) => {
            setEditMode(false);
            props.putStatus(e.currentTarget.value);
          }}
          value={status}
          onChange={(e) => newStatus(e.currentTarget.value)}
        />
      ) : (
        <div
          className={s.text}
          onDoubleClick={() => {
            setEditMode(true);
          }}
        >
          {props.status || "Установите ваш статус"}
        </div>
      )}
      {!editMode && props.errorMessage && <div style={x_y} className={s.error}>
        {props.errorMessage}
        <FontAwesomeIcon
            onClick={() => props.setError(null)}
            icon={faXmark}
            className={s.delete}
        />
      </div>}
    </div>
  );
};

export default memo(Status);
