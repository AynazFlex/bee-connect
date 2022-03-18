import React from "react";
import s from "./News.module.css";

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.news}>
        <h1>Новости</h1>
      </div>
    );
  }
}

export default News;