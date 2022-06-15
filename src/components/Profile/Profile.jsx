import React from "react";
import s from "./Profile.module.css";
import ProfileInfoContainer from "../Other/ProfileInfoContainer";

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
          <ProfileInfoContainer {...props} />
        </div>
      </div>
      <div className={s.posts}>
        {props.posts || <div className={s.noposts}>Нет постов</div>}
      </div>
    </div>
  );
};

export default Profile;
