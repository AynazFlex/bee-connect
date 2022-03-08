import React from 'react';
import s from './Main.module'


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.main}>Lorem ipsum dolor sit amet, consectetur adip</div>
        )
    }
}

export default Main;