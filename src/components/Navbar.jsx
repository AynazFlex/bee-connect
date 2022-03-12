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
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.state = {
      info: null
    }
  }

  mouseMove(e) {
    let info = e.target.closest(`.${s.link}`);
    if(info.dataset.name) {
      this.setState({
        info: <div style={{left: info.getBoundingClientRect().left, top: info.getBoundingClientRect().bottom + 5}} className={s.info}>{info.dataset.name}</div>
      })
    } else {
      this.setState({
        info: null
      })
    }
  }

  mouseOut() {
    this.setState({
      info: null
    })
  }

  render() {
    return (
      <div className={s.navbar} onMouseOver={this.mouseMove} onMouseOut={this.mouseOut}>
        <div className={s.left}>
          <a className={s.link}>
            <FontAwesomeIcon icon={faVk} className={s.icon} />
            <span className={s.logo}>биконект</span>
          </a>
          <a data-name="Друзья" className={s.link}>
            <FontAwesomeIcon icon={faUser} className={s.icon} />
          </a>
          <a data-name="Новости" className={s.link}>
            <FontAwesomeIcon icon={faNewspaper} className={s.icon} />
          </a>
          <a data-name="Сообщения" className={s.link}>
            <FontAwesomeIcon icon={faMessage} className={s.icon} />
          </a>
          <a data-name="Уведомления" className={s.link}>
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
        {this.state.info}
      </div>
    );
  }
}

export default Navbar;
