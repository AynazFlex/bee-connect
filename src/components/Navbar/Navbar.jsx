import React from "react";
import s from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMessage,
  faNewspaper,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Navbar = (props) => (
  <div
    className={s.navbar}
    onMouseOver={(e) => props.mouseMove(e)}
    onMouseOut={props.mouseOut}
  >
    <div className={s.left}>
      <Link to="/profile" className={s.link}>
        <FontAwesomeIcon icon={faVk} className={s.icon} />
        <span className={s.logo}>биконект</span>
      </Link>
      <Link to="/friends" data-name="Пользователи" className={s.link}>
        <FontAwesomeIcon icon={faUser} className={s.icon} />
      </Link>
      <Link to="/news" data-name="Новости" className={s.link}>
        <FontAwesomeIcon icon={faNewspaper} className={s.icon} />
      </Link>
      <Link to="/messages" data-name="Сообщения" className={s.link}>
        <FontAwesomeIcon icon={faMessage} className={s.icon} />
      </Link>
      <a data-name="Уведомления" className={s.link}>
        <FontAwesomeIcon icon={faBell} className={s.icon} />
      </a>
    </div>
    <div>
      <a className={s.link}>
        <img src={props.avatar} className={s.avatar} alt="nav avatar" />
      </a>
    </div>
    {props.info}
  </div>
);

export default Navbar;
