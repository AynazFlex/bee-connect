import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import { getMyProfile } from '../../redux/dataReducer'; 
import { Link } from 'react-router-dom';
import Button from "../Other/Button";

const SidebarContainer = (props) => {

  useEffect(() =>{
    props.isAuth && props.getMyProfile(props.id);
  }, [props.isAuth]);

  if(!props.isAuth) {
    return <Link to="/login"><Button text="Войти" /></Link>;
  }
  else if(props.initiated) {
    return <Sidebar profile={props.profile} avatar={props.avatar} />
  } else {
    return <div>Loading ...</div>
  }
}

const mapStateToProps = (state) => {
  return {
    avatar: state.data.avatar,
    profile: state.data.profile,
    id: state.auth.id,
    initiated: state.data.profileInitiated,
    isAuth: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { getMyProfile })(SidebarContainer);