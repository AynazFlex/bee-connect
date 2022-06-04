import React from "react";
import s from "./Preloader.module.css";

const Preloader = (props) => (
  <div className={s.preloader}>
    <div className={s.loader}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Preloader;
