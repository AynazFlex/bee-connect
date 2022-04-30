import React, { useState, useEffect } from "react";
import s from "./Navbar.module.css";
import Promt from "../Other/Prompt";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { setAuthData } from "../../redux/authReducer";
import * as axios from "axios";

const NavbarContainer = (props) => {

  useEffect(() => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true
      })
      .then(response => {
        props.setAuthData(response.data.data);
      })
  }, []);

  const [info, setInfo] = useState(<></>);

  const mouseMove = (e) => {
    const elem = e.target.closest(`.${s.link}`);
    if (!elem) return;
    if (elem.hasAttribute("data-name")) setInfo(<Promt info={elem} />);
    else setInfo(<></>);
  };

  const mouseOut = () => setInfo(<></>);

  return (
    <Navbar
      avatar={props.avatar}
      mouseOut={mouseOut}
      mouseMove={mouseMove}
      info={info}
      id={props.id}
      auth={props.auth}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    avatar: state.data.avatar,
    id: state.data.profile.id,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {setAuthData})(NavbarContainer);
