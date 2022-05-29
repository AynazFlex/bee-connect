import React, { memo } from "react";
import s from "./Users.module.css";

const Pagination = (props) => {
  return (
    <div className={s.paginationPanel}>
      <div
        onClick={() => props.scrolling("left")}
        className={s.paginationItems}
      >
        &laquo;
      </div>
      <div className={s.paginationPages}>
        <div
          className={s.paginationPagesItem}
          style={{ marginLeft: props.scroll + "px" }}
        >
          {props.pagination().map((p) => (
            <div
              onClick={() => props.changePage(p)}
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
        onClick={() => props.scrolling("right")}
        className={s.paginationItems}
      >
        &raquo;
      </div>
    </div>
  );
};

export default memo(Pagination);
