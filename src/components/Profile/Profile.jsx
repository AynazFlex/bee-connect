import React from "react";
import Hr from "../Other/Hr";
import s from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faHome,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

const Profile = (props) => {
  return (
    <div>
      <div className={s.profile}>
        <img
          className={s.photo}
          src={
            props.photos.large ||
            "https://vk.com/images/camera_200.png"
          }
          alt="profile avatar"
        />
        <div>
          <h3 className={s.name}>{props.fullName}</h3>
          <p className={s.aboutUser}>
            {props.status || "Статус не установлен"}
          </p>
          <Hr />
          <p>
            <FontAwesomeIcon icon={faPen} className={s.icon} />
            {props.job || "--"}
          </p>
          <p>
            <FontAwesomeIcon icon={faHome} className={s.icon} />
            {props.address || "--"}
          </p>
          <p>
            <FontAwesomeIcon icon={faCakeCandles} className={s.icon} />
            {props.age || "--"}
          </p>
        </div>
      </div>
      <div className={s.posts}>
        {props.posts || <div className={s.noposts}>Нет постов</div>}
      </div>
    </div>
  );
};

export default Profile;
