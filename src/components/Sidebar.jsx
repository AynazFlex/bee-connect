import React from "react";
import s from "./Sidebar.module.css";
import Hr from "./Hr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faHome,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.sidebar}>
        <h4 className={s.profile}>Айназ Давлетшин</h4>
        <div>
          <img
            src="https://vk.com/images/camera_200.png"
            className={s.avatar}
            alt="my avatar"
          />
        </div>
        <Hr />
        <p>
          <FontAwesomeIcon icon={faPen} className={s.icon} />Frontend Developer
        </p>
        <p>
          <FontAwesomeIcon icon={faHome} className={s.icon} />Россия, Mосква
        </p>
        <p>
          <FontAwesomeIcon icon={faCakeCandles} className={s.icon} />17 мая 2003
        </p>
        <Hr />
        <button className={s.redac}>Редактировать</button>
      </div>
    );
  }
}

export default Sidebar;
