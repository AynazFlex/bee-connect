import React, { useEffect } from "react";
import { connect } from "react-redux";
import News from "./News";
import { setNews } from "../../redux/newsReducer";
import Preloader from "../Other/Preloader";
import { compose } from "redux";
import withAuthNavigate from "../../hoc/withAuthNavigate";

const NewsContainer = (props) => {
    useEffect(() =>props.setNews(), []);

    console.log(props.news.news, props.news.isGet);

    return props.news.isGet ? <News news={props.news}/> : <Preloader />
}

const mapStateToProps = (state) => ({
    news: state.news
})

export default compose(
    withAuthNavigate,
    connect(mapStateToProps, { setNews })
)(NewsContainer);