import React from "react";
import Hr from "../Other/Hr";
import s from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faPen,
  faScrewdriverWrench,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Profile = (props) => {
  return (
    <div>
      <div className={s.profile}>
        <img
          className={s.photo}
          src={props.photos.large || "https://vk.com/images/camera_200.png"}
          alt="profile avatar"
        />
        <div className={s.infoPanel}>
          <div>{props.status || "статуса нет"}</div>
          <Hr />
          <div className={s.description}>
            <FontAwesomeIcon icon={faPen} className={s.icon} />
            <div>{props.aboutMe || "---"}</div>
          </div>
          <div className={s.description}>
            <FontAwesomeIcon icon={faScrewdriverWrench} className={s.icon} />
            <div>{props.lookingForAJobDescription || "---"}</div>
          </div>
          <div className={s.description}>
            <FontAwesomeIcon icon={faHammer} className={s.icon} />
            <div>{props.lookingForAJob ? "ищу работу" : "не ищу работу"}</div>
          </div>
          {props.contacts.website && (
            <div className={s.description}>
              <FontAwesomeIcon icon={faGlobe} className={s.icon} />
              <a href={props.contacts.website} target="_blank">
                {props.contacts.website}
              </a>
            </div>
          )}
          {Object.values(props.contacts).find((values) => values) && (
            <div className={s.contacts}>
              {Object.keys(props.contacts).map(
                (contact) =>
                  props.contacts[contact] && (
                    <a key={contact} target="_blank" className={s.link} href={props.contacts[contact]}>{contact}</a>
                  )
              )}
            </div>
                  )}
        </div>
      </div>
      <div className={s.posts}>
        {props.posts || <div className={s.noposts}>Нет постов</div>}
      </div>
    </div>
  );
};

export default Profile;
