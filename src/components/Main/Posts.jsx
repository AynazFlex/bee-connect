import React from "react";
import s from "./Posts.module.css";
import Hr from "../Other/Hr";

const Posts = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.head}>
                <div>
                    <div className={s.title}>
                        <img className={s.ava} src={props.post.ava} alt="ava" />
                        <h3>{props.post.profileName}</h3>
                    </div>
                </div>
                <div>
                    <span className={s.date}>{props.post.date}</span>
                </div>
            </div>
            <Hr />
            <div className={s.body}>{props.post.body}</div>
        </div>
    )
}

export default Posts
