import React from "react";
import s from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faVk,
  faTwitter,
  faInstagram,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Contact = ({ contact, link }) => {
  switch (contact) {
    case "facebook":
      return (
        <a href={link} target="_blank" className={s.link}>
          <FontAwesomeIcon
            style={{ color: "#3b5998" }}
            icon={faFacebook}
            className={s.iconContact}
          />
        </a>
      );
    case "github":
      return (
        <a href={link} target="_blank" className={s.link}>
          <FontAwesomeIcon style={{ color: "black" }} icon={faGithub} className={s.iconContact} />
        </a>
      );
    case "instagram":
      return (
        <a href={link} target="_blank" className={s.link}>
          <FontAwesomeIcon
            style={{ color: "#3f729b" }}
            icon={faInstagram}
            className={s.iconContact}
          />
        </a>
      );
    case "mainLink":
      return (
        <a href={link} target="_blank" className={s.link}>
          <FontAwesomeIcon
            style={{ color: "#3b5998" }}
            icon={faFacebook}
            className={s.iconContact}
          />
        </a>
      );
    case "twitter":
      return (
        <a href={link} target="_blank" className={s.link}>
          <FontAwesomeIcon
            style={{ color: "#00acee" }}
            icon={faTwitter}
            className={s.iconContact}
          />
        </a>
      );
    case "vk":
      return (
        <a href={link} target="_blank" className={s.link}>
          <FontAwesomeIcon
            style={{ color: "#597da3" }}
            icon={faVk}
            className={s.iconContact}
          />
        </a>
      );
    //case 'website': return <a scr={link} className={s.link}><FontAwesomeIcon icon={faWebsite} className={s.iconContact} /></a>
    case "youtube":
      return (
        <a href={link} target="_blank" className={s.link}>
          <FontAwesomeIcon
            style={{ color: "#c4302b" }}
            icon={faYoutube}
            className={s.iconContact}
          />
        </a>
      );
    default:
      return <></>;
  }
};

export default React.memo(Contact);
