import React from "react";
import s from "./Sidebar.module.css";
import Hr from "../Other/Hr";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import ProfileInfoContainer from "../Other/ProfileInfoContainer"

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
      <ProfileInfoContainer {...profile} />
      <Hr />
      <Link to="/edit" className={s.redac}>
        Редактировать
      </Link>
    </div>
  );
};

export default React.memo(MyProfile);
