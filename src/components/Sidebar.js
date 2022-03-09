import React from 'react';
import s from './Sidebar.module.css';


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(s);
        return (
            <div className={s.sidebar}>Lsfsefsfsefs</div>
        )
    }
}

export default Sidebar;