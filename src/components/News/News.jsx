import React from "react";
import Items from "./Items";
import s from "./News.module.css";

const News = ({ news }) => {
  return (
    <div className={s.news}>
      {news.map((item, i) => (
        <Items key={i} {...item} />
      ))}
    </div>
  );
};

export default News;
