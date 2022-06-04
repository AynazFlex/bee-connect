import React from 'react';
import { faVk } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s from "./Intial.module.css"


export default function(props) {
    return (
        <div className={s.container}>
            <FontAwesomeIcon icon={faVk} className={s.icon} />
        </div>
    )
}