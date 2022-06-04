import React, { memo } from 'react';
import s from './Hr.module.css';


function Hr() {
    return <hr className={s.line}/>
}

export default memo(Hr);