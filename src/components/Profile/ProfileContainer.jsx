import { connect } from "react-redux";
import React, { useEffect } from "react";
import Preloader from "../Other/Preloader";
import { getProfile, getStatus } from "../../redux/profileReducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import { compose } from "redux";

const ProfileContainer = (props) => {
  const { userId } = useParams();

  useEffect(() => {
    props.getProfile(userId);
    props.getStatus(userId);
  }, []);

  return !props.profile ? (
    <Preloader />
  ) : (
    <Profile {...props.profile} status={props.status} />
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  status: state.profile.status,
});

export default compose(
  withAuthNavigate,
  connect(mapStateToProps, { getProfile, getStatus })
)(ProfileContainer);
