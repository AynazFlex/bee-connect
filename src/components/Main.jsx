import React from 'react';
import s from './Main.module.css'


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(s);
        return (
            <div className={s.main}>Lorem ipsum dolor sit amet, consectetur adip</div>
        )
    }
}

export default Main;