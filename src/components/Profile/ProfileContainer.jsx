import { connect } from "react-redux";
import React, { useEffect } from "react";
import Preloader from "../Other/Preloader";
import { getProfile, getStatus } from "../../redux/profileReducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { compose } from "redux";

const ProfileContainer = (props) => {
  const { userId } = useParams();

  useEffect(() => {
    props.getProfile(userId);
    props.getStatus(userId);
  }, []);

  //console.log('profile render');

  return !props.isOpen || props.statusIsFetching ? (
    <Preloader />
  ) : (
    <Profile {...props.profile} status={props.status} />
  );
};

const mapStateToProps = (state) => {
  //console.log("profile mstp");
  return {
    profile: state.profile.profile,
    status: state.profile.status,
    isOpen: state.profile.isOpenProfile,
    statusIsFetching: state.profile.statusIsFetching
  };
};

export default compose(connect(mapStateToProps, { getProfile, getStatus }))(
  ProfileContainer
);
