import React, { useEffect } from "react";
import s from "./Sidebar.module.css";
import Hr from "../Other/Hr";

const Modal = ({ setModal, updatePhoto, isPhotoLoadin }) => {
  const closeModal = (e) => {
    e.target.className === `${s.modal}` && setModal(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", closeModal);
    return () => {
      document.body.removeEventListener("click", closeModal);
    };
  }, []);

  return (
    <div className={s.modal}>
      <div className={s.formBlock}>
        <div>
          Друзьям будет проще узнать вас, если вы загрузите свою настоящую
          фотографию.
        </div>
        <div>Вы можете загрузить изображение в формате JPG, GIF или PNG.</div>
        <Hr />
        {isPhotoLoadin ? (
          <div className={s.label}>progres...</div>
        ) : (
          <label className={s.label}>
            выбрать файл
            <input
              className={s.fileInput}
              type="file"
              onChange={(e) => updatePhoto(e.target.files[0])}
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default Modal;
