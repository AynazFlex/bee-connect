import React from 'react';
import s from './Navbar.module';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.navbar}>Lorem ipsum dolor sit amet, consectetur adip</div>
        )
    }
}

export default Navbar;