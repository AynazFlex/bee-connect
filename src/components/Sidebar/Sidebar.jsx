import React from "react";
import s from "./Sidebar.module.css";
import Hr from "../Other/Hr";
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
        <h4 className={s.profile}>{this.props.profile.name}</h4>
        <div>
          <img
            src={this.props.avatar}
            className={s.avatar}
            alt="my avatar"
          />
        </div>
        <Hr />
        <p>
          <FontAwesomeIcon icon={faPen} className={s.icon} />{this.props.profile.job}
        </p>
        <p>
          <FontAwesomeIcon icon={faHome} className={s.icon} />{this.props.profile.address}
        </p>
        <p>
          <FontAwesomeIcon icon={faCakeCandles} className={s.icon} />{this.props.profile.age}
        </p>
        <Hr />
        <button className={s.redac}>Редактировать</button>
      </div>
    );
  }
}

export default Sidebar;
