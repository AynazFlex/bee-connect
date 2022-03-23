import React from "react";
import Hr from "../Other/Hr";
import s from "./News.module.css";

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.news}>
        Новости
      </div>
    );
  }
}

export default News;