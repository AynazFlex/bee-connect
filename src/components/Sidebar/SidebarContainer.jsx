import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import { getMyProfile, updatePhoto } from '../../redux/dataReducer'; 
import { Link } from 'react-router-dom';
import Button from "../Other/Button";
import Preloader from '../Other/Preloader';
import s from "./Sidebar.module.css";

const SidebarContainer = (props) => {

  useEffect(() =>{
    props.isAuth && props.getMyProfile(props.id);
  }, [props.isAuth]);

  if(!props.isAuth) {
    return <Link className={s.rederectToLogin} to="/login"><Button text="Войти" /></Link>;
  }
  else if(props.initiated) {
    return <Sidebar profile={props.profile} avatar={props.avatar} updatePhoto={props.updatePhoto} deletePhoto={props.deletePhoto} />
  } else {
    return <Preloader />
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.data.profile,
    id: state.auth.id,
    initiated: state.data.profileInitiated,
    isAuth: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { getMyProfile, updatePhoto })(SidebarContainer);