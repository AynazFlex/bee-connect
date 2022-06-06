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

const MyProfile = ({ profile, avatar, setModal }) => {
    console.log('render');
  return (
    <div className={s.sidebar}>
      <h4 className={s.profile}>{profile.name}</h4>
      <div className={s.avatarBlock}>
        <img src={avatar} className={s.avatar} alt="my avatar" />
        <div onClick={() => setModal(true)} className={s.changephoto}>
          изменить фото профиля
        </div>
      </div>
      <Hr />
      <p>
        <FontAwesomeIcon icon={faPen} className={s.icon} />
        {profile.job}
      </p>
      <p>
        <FontAwesomeIcon icon={faHome} className={s.icon} />
        {profile.address}
      </p>
      <p>
        <FontAwesomeIcon icon={faCakeCandles} className={s.icon} />
        {profile.age}
      </p>
      <Hr />
      <Link to="/edit" className={s.redac}>
        Редактировать
      </Link>
    </div>
  );
};

export default React.memo(MyProfile);
