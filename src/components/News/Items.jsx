import React from "react";
import s from "./News.module.css";
import Hr from "../Other/Hr";

const Items = (props) => {
  return (
    <div className={s.news}>
      <div className={s.items}>
        <div className={s.item1}>{props.source_id}</div>
        <div className={s.item2}>{props.pubDate}</div>
        <div className={s.item3}>
          {props.image_url ? (
            <img className={s.image} src={props.image_url} />
          ) : (
            ""
          )}
        </div>
        <div className={s.item4}>Author : {props.creator || "не указан"}</div>
        <div className={s.item5}>Category : {props.category}</div>
        <div className={s.item6}>{props.title}</div>
        <div className={s.item7}>
          {props.description}
          <Hr />
          <a className={s.link} target="_blank" href={props.link}>
            Go to source
          </a>
        </div>
      </div>
    </div>
  );
};

export default Items;
