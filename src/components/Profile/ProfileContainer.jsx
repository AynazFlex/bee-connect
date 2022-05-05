import { connect } from "react-redux";
import React, { useEffect } from "react";
import Preloader from "../Other/Preloader";
import { getProfile } from "../../redux/profileReducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import { compose } from "redux";

const ProfileContainer = (props) => {
  const { userId } = useParams();

  useEffect(() => {
    props.getProfile(userId);
  }, []);

  return !props.profile ? <Preloader /> : <Profile {...props.profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default compose(
  withAuthNavigate,
  connect(mapStateToProps, { getProfile })
)(ProfileContainer)
