import React, { useState } from "react";
import s from "./Navbar.module.css";
import Promt from "../Other/Prompt";
import { connect } from "react-redux";
import Navbar from "./Navbar";

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
      info={info}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    avatar: state.data.avatar,
  };
};

export default connect(mapStateToProps)(NavbarContainer);
