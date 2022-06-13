import React from "react";
import s from "./Sidebar.module.css";
import Hr from "../Other/Hr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faPen,
  faScrewdriverWrench,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const MyProfile = ({ profile, setModal }) => {
  return (
    <div className={s.sidebar}>
      <h4 className={s.profile}>{profile.fullName}</h4>
      <div className={s.avatarBlock}>
        <img src={profile.photos.large} className={s.avatar} alt="my avatar" />
        <div onClick={() => setModal(true)} className={s.changephoto}>
          изменить фото профиля
        </div>
      </div>
      <Hr />
      <div className={s.description}>
        <FontAwesomeIcon icon={faPen} className={s.icon} />
        <div>{profile.aboutMe || "---"}</div>
      </div>
      <div className={s.description}>
        <FontAwesomeIcon icon={faScrewdriverWrench} className={s.icon} />
        <div>{profile.lookingForAJobDescription || "---"}</div>
      </div>
      <div className={s.description}>
        <FontAwesomeIcon icon={faHammer} className={s.icon} />
        <div>{profile.lookingForAJob ? "ищу работу" : "не ищу работу"}</div>
      </div>
      {profile.contacts.website && <div className={s.description}>
        <FontAwesomeIcon icon={faGlobe} className={s.icon} />
        <a href={profile.contacts.website} target="_blank">{profile.contacts.website}</a>
      </div>}
      {Object.values(profile.contacts).find(values => values) && (
        <div className={s.contacts}>
          {Object.keys(profile.contacts).map(
            (contact) =>
              profile.contacts[contact] && (
                <Contact
                  key={contact}
                  contact={contact}
                  link={profile.contacts[contact]}
                />
              )
          )}
        </div>
      )}
      <Hr />
      <Link to="/edit" className={s.redac}>
        Редактировать
      </Link>
    </div>
  );
};

export default React.memo(MyProfile);
