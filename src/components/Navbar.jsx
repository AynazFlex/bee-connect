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

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.navbar}>
        <div className={s.left}>
          <a className={s.link}>
            <FontAwesomeIcon icon={faVk} className={s.icon} />
            <span className={s.logo}>биконект</span>
          </a>
          <a className={s.link}>
            <FontAwesomeIcon icon={faUser} className={s.icon} />
          </a>
          <a className={s.link}>
            <FontAwesomeIcon icon={faNewspaper} className={s.icon} />
          </a>
          <a className={s.link}>
            <FontAwesomeIcon icon={faMessage} className={s.icon} />
          </a>
          <a className={s.link}>
            <FontAwesomeIcon icon={faBell} className={s.icon} />
          </a>
        </div>
        <div>
          <a className={s.link}>
            <img
              src="https://vk.com/images/camera_200.png"
              className={s.avatar}
              alt="nav avatar"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
