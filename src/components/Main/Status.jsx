import React, { useState } from "react";
import s from "./Status.module.css";

const Status = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, newStatus] = useState(props.status);

  return (
    <div className={s.status}>
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
            newStatus(props.status);
          }}
        >
          {props.status || "Установите ваш статус"}
        </div>
      )}
    </div>
  );
};

export default Status;
