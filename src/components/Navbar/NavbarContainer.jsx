import React, { useState } from "react";
import s from "./Navbar.module.css";
import Promt from "../Other/Prompt";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { logoutAuth } from "../../redux/authReducer";

const NavbarContainer = (props) => {

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
      logoutAuth={props.logoutAuth}
      info={info}
      auth={props.auth}
    />
  );
};

const mapStateToProps = (state) => ({
  avatar: state.data.avatar,
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutAuth })(
  NavbarContainer
);
