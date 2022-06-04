import React, { memo } from "react";
import s from "./Users.module.css";

const Pagination = (props) => {
  const len = Math.ceil(props.totalCount / props.pageSize);
  const margin = -200*Math.trunc(props.activePage/5);

  const pagination = () => {
    const pages = [];
    for (let i = 1; i <= len; i++) {
      pages.push(i);
    }
    return pages;
  };

  const paginLeft = (active, pageSize) => {
    props.changePage(active - 1, pageSize)
  }

  const paginRight = (active, pageSize) => {
    props.changePage(active + 1, pageSize)
  }

  return (
    <div className={s.paginationPanel}>
      {props.activePage === 1 ? (
        <></>
      ) : (
        <div
          onClick={() => paginLeft(props.activePage, props.pageSize)}
          className={s.paginationItems}
        >
          &laquo;
        </div>
      )}
      <div className={s.paginationPages}>
        <div
          className={s.paginationPagesItem}
          style={{ marginLeft: `${props.activePage % 5 === 0 ? margin + 200 : margin}px` }}
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
      {props.activePage === len ? (
        <></>
      ) : (
        <div
          onClick={() => paginRight(props.activePage, props.pageSize)}
          className={s.paginationItems}
        >
          &raquo;
        </div>
      )}
    </div>
  );
};

export default memo(Pagination);
