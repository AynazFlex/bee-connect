import React from "react";
import Hr from "./Hr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faPen,
  faScrewdriverWrench,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faVk,
  faTwitter,
  faInstagram,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import s from "./ProfileInfoContainer.module.css";

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
          <FontAwesomeIcon
            style={{ color: "black" }}
            icon={faGithub}
            className={s.iconContact}
          />
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

export default React.memo(function ({
  aboutMe,
  lookingForAJobDescription,
  lookingForAJob,
  contacts,
}) {
  return (
    <>
      <Hr />
      <div className={s.description}>
        <FontAwesomeIcon icon={faPen} className={s.icon} />
        <div>{aboutMe || "---"}</div>
      </div>
      <div className={s.description}>
        <FontAwesomeIcon icon={faScrewdriverWrench} className={s.icon} />
        <div>{lookingForAJobDescription || "---"}</div>
      </div>
      <div className={s.description}>
        <FontAwesomeIcon icon={faHammer} className={s.icon} />
        <div>{lookingForAJob ? "ищу работу" : "не ищу работу"}</div>
      </div>
      {contacts.website && (
        <div className={s.description}>
          <FontAwesomeIcon icon={faGlobe} className={s.icon} />
          <a href={contacts.website} target="_blank">
            {contacts.website}
          </a>
        </div>
      )}
      {Object.values(contacts).find((values) => values) && (
        <div className={s.contacts}>
          {Object.keys(contacts).map(
            (contact) =>
              contacts[contact] && (
                <Contact
                  key={contact}
                  contact={contact}
                  link={contacts[contact]}
                />
              )
          )}
        </div>
      )}
    </>
  );
});
