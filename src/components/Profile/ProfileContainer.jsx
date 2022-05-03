import { connect } from "react-redux";
import React, { useEffect } from "react";
import Preloader from "../Other/Preloader";
import { getProfile } from "../../redux/profileReducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";

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

export default connect(mapStateToProps, { getProfile })(ProfileContainer);
