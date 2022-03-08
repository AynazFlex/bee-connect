import React from 'react';
import s from './Navbar.module'


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.sidebar}>Lorem ipsum dolor sit amet, consectetur adip</div>
        )
    }
}

export default Sidebar;