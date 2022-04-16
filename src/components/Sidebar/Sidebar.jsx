import React from "react";
import s from "./Sidebar.module.css";
import Hr from "../Other/Hr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faHome,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className={s.sidebar}>
      <h4 className={s.profile}>{props.profile.name}</h4>
      <div>
        <img src={props.avatar} className={s.avatar} alt="my avatar" />
      </div>
      <Hr />
      <p>
        <FontAwesomeIcon icon={faPen} className={s.icon} />
        {props.profile.job}
      </p>
      <p>
        <FontAwesomeIcon icon={faHome} className={s.icon} />
        {props.profile.address}
      </p>
      <p>
        <FontAwesomeIcon icon={faCakeCandles} className={s.icon} />
        {props.profile.age}
      </p>
      <Hr />
      <Link to="/edit" className={s.redac}>
        Редактировать
      </Link>
    </div>
  );
};

export default Sidebar;
