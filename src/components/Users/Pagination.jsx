import React, { memo, useState } from "react";
import s from "./Users.module.css";

const Pagination = (props) => {

  const [scroll, setScroll] = useState(0);

  const pagination = () => {
    const len = Math.ceil(props.totalCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= len; i++) {
      pages.push(i);
    }
    return pages;
  };

  const scrolling = (direction) => {
    switch (direction) {
      case "left":
        scroll === 0 || setScroll(scroll + 200);
        return;
      case "right":
        setScroll(scroll - 200);
        return;
      default:
        return;
    }
  };

  return (
    <div className={s.paginationPanel}>
      <div
        onClick={() => scrolling("left")}
        className={s.paginationItems}
      >
        &laquo;
      </div>
      <div className={s.paginationPages}>
        <div
          className={s.paginationPagesItem}
          style={{ marginLeft: scroll + "px" }}
        >
          {pagination().map((p) => (
            <div
              onClick={() => props.changePage(p, props.pageSize)}
              key={p}
              className={
                props.activePage === p
                  ? `${s.paginationItems} ${s.active}`
                  : s.paginationItems
              }
            >
              {p}
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => scrolling("right")}
        className={s.paginationItems}
      >
        &raquo;
      </div>
    </div>
  );
};

export default memo(Pagination);
